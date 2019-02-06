<template>
  <div id="app">
    <HelloWorld msg="Click on the buttons below to test Cookies" />
    <ul>
      <li> <!-- setCookie's values currently hard coded -->
        <Button v-on:click="setCookie('sasToken', 'asdkjAKJHSajAS21983', 5)">Create Cookie</Button>
      </li>
      <li>
        <Button v-on:click="getCookie">View Cookie</Button>
      </li>
      <li>
        <Button v-on:click="deleteCookie">Erase Cookie</Button>
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
  },
  //Define methods used for the cookie test buttons.
  methods: {
    //setCookie will write a cookie based on the button input, currently with
    //placeholder data
    setCookie : function(sasToken, sasValue, expDays) {
      console.log('Set Cookie');
      var d = new Date();
      d.setTime(d.getTime() + (expDays*24*60*60*1000));
      var expireDate = "expires="+ d.toUTCString();
      document.cookie = sasToken + "=" + sasValue + ";" + expireDate + ";path=/";
    },
    //getCookie method retrieves data written to the cookie
    getCookie : function() {
      console.log('Get Cookie');
      var x = document.cookie;
      alert(x);
    },
    //deleteCookie deletes the cookie by setting its expiration date in the past
    deleteCookie : function() {
      console.log('Delete Cookie')
      document.cookie = "sasToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
}

li {
  margin-bottom: 20px;
}

</style>
