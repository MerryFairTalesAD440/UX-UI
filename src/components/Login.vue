<template>
<div id="app">
    Google Token
    <br /><br />
    {{ infom }}
    <br /><br />
  <button v-google-signin-button="clientId" content="605612772484-00bg9me5h345h6b0utcrmlh8le4f3a9r" class="google-signin-button"> Continue with Google</button>
  </div>
</template>
 
<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
export default {
  directives: {
    GoogleSignInButton
  },
  data: () => ({
    clientId: '605612772484-00bg9me5h345h6b0utcrmlh8le4f3a9r',
    infom: null
  }),
  methods: {
    OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend
      this.$session.set('myT',idToken);
      this.infom = idToken;
    },
    OnGoogleAuthFail (error) {
      this.infom = error
    }
  }
}
</script> 
 
<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
