const {
  Aborter,
  BlockBlobURL,
  ContainerURL,
  ServiceURL,
  SharedKeyCredential,
  StorageURL,
  uploadFileToBlockBlob
} = require("@azure/storage-blob");

const path = require("path");

const STORAGE_ACCOUNT_NAME = process.env.ACCOUNT_NAME_DEV;
const ACCOUNT_ACCESS_KEY = process.env.ACCOUNT_KEY_DEV;

const ONE_MINUTE = 60 * 1000;

async function showContainerNames(aborter, serviceURL) {
  let response;
  let marker;

  do {
    response = await serviceURL.listContainersSegment(aborter, marker);
    marker = response.marker;
    for (let container of response.containerItems) {
      console.log(` - ${container.name}`);
    }
  } while (marker);
}

async function uploadLocalFile(aborter, containerURL, filePath) {
  filePath = path.resolve(filePath);

  const pathArray = filePath.split(path.sep);

  var fileName = "";

  for (let i = 7; i < pathArray.length; i++) {
    fileName = path.join(fileName, pathArray[i]);
  }

  var contentType = getFileContentType(fileName);

  const options = { blobHTTPHeaders: { blobContentType: contentType } };

  const blockBlobURL = BlockBlobURL.fromContainerURL(containerURL, fileName);

  return await uploadFileToBlockBlob(aborter, filePath, blockBlobURL, options);
}

async function showBlobNames(aborter, containerURL) {
  let response;
  let marker;

  do {
    response = await containerURL.listBlobFlatSegment(aborter);
    marker = response.marker;
    for (let blob of response.segment.blobItems) {
      console.log(` - ${blob.name}`);
    }
  } while (marker);
}

function getFileContentType(filename) {
  var extension = filename.split(".").pop();
  var contentType = "";

  switch (extension) {
    case "html":
      contentType = "text/html";
      break;
    case "js":
      contentType = "application/javascript";
      break;
    case "css":
      contentType = "text/css";
      break;
    case "png":
      contentType = "image/png";
      break;
    case "ico":
      contentType = "image/x-icon";
      break;
    case "map":
      contentType = "application/javascript";
      break;
  }
  return contentType;
}

async function clearJsBlobs(aborter, containerURL, pipeline, serviceURL) {
  let response;
  let marker;

  do {
    response = await containerURL.listBlobFlatSegment(aborter);
    marker = response.marker;
    for (let blob of response.segment.blobItems) {
      if (getFileContentType(blob.name) == "application/javascript") {
        let blobToDelete = new BlockBlobURL(serviceURL + blob.name, pipeline);
        await blobToDelete.delete(aborter);
        console.log(`Block blob "${blob.name}" is deleted`);
      }
    }
  } while (marker);
}

async function execute() {
  //Prepare to move the contents of ./dist folder into the $web container
  const containerName = "$web";
  const folderPath = "./dist";
  //to do so we will need to walk through ./dist folder and copy down all of the paths to each file.
  const walk = require("walk");
  const walker = walk.walk(folderPath, { followLinks: false });
  const files = [];
  //next we will prepare an api request to azure to store our files.
  const credentials = new SharedKeyCredential(
    STORAGE_ACCOUNT_NAME,
    ACCOUNT_ACCESS_KEY
  );
  const pipeline = StorageURL.newPipeline(credentials);
  const serviceURL = new ServiceURL(
    `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
    pipeline
  );
  const containerURL = ContainerURL.fromServiceURL(serviceURL, containerName);
  const aborter = Aborter.timeout(30 * ONE_MINUTE);
  //For each file you find
  walker.on("file", function(root, stat, next) {
    // Add this file to a list of file names
    files.push(root + "/" + stat.name);
    next();
  });

  //log the containers
  console.log("Containers:");
  await showContainerNames(aborter, serviceURL);
  //Clear out the old minified js
  console.log("Deleting old JS files:");
  await clearJsBlobs(
    aborter,
    containerURL,
    pipeline,
    serviceURL.url + containerName + "/"
  );
  //upload the new files
  console.log("Uploading build files:");
  for (let file of files) {
    await uploadLocalFile(aborter, containerURL, file);
    console.log(`Local file "${file}" is uploaded`);
  }
  //log what files are in the $wweb container after
  console.log(`Blobs in "${containerName}" container:`);
  await showBlobNames(aborter, containerURL);
}

execute()
  .then(() => console.log("Done"))
  .catch(e => console.log(e));
