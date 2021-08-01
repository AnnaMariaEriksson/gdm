<template>
<div>
  <p>Moo!</p>
<b-form id="login">
  <b-form-group id="username" label="Username">
    <b-form-input placeholder="username" v-model="username"></b-form-input>
  </b-form-group>
  <b-form-group id="password" label="Password">
    <b-form-input type="password" placeholder="password..." v-model="password"></b-form-input>
  </b-form-group>
  <b-button id="sign-in">Sign in</b-button>
</b-form>
</div>
</template>

<script>
export default {
  name: "DoggieDiary",
  data() {
    return {
      username: "",
      password: ""
    }
  }
};
</script>

<style scoped>
form {
  width: 50%;
  margin: auto;
}
</style>