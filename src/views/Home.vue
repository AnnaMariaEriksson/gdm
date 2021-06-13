<template>
  <div class="home">
    <h1>Hello and welcome.</h1>
    <h2>Soon you'll find some awesomesauce stuff here.</h2>
    <p>I'm very excited about this!</p>
    <ul>
      <li v-for="(dog, i) in dogs" :key="i">{{dog.name}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      dogs: {}
    }
  },
  computed: {},
  created() {
    axios.get("/dogs")
    .then(response => this.dogs = response.data)
  }
};
</script>
