Set-AzureRmCurrentStorageAccount -ResourceGroupName "NAME OF RESOURCE GROUP" -AccountName "NAME OF STORAGE ACCOUNT"

New-AzureStorageBlobSASToken -Container "NAME OF CONTAINER" -Blob "NAME OF BLOB" -Permission rwd

Read-Host -Prompt "Press Enter to exit"


# If you're not signed into AzureRM PowerShell yet run the following first: Connect-AzureRmAccount
# Fill in the info between the quotes above to personalize the script
# The rwd can be changed to define read/write/delete permissions
# An example of the script filled out properly with info for my blob is below:

# Set-AzureRmCurrentStorageAccount -ResourceGroupName "ad440-sahand-ui-1box-rg" -AccountName "ad440oneboxtempwebstore"

# New-AzureStorageBlobSASToken -Container "testing-blob" -Blob "test.txt" -Permission rwd