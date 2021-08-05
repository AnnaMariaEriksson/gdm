<template>
  <div class="home">
    <h1>Hello and welcome.</h1>
    <h2>Soon you'll find some awesomesauce stuff here.</h2>
    <p>I'm very excited about this!</p>
    <ul>
      <li v-for="(dog, i) in dogs" :key="i">{{ dog.name }}</li>
    </ul>

    <ul>
      <li v-for="(post, i) in posts" :key="i">
        <span v-html="post.content.rendered"></span>
      </li>
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
      dogs: {},
      posts: {},
    };
  },
  computed: {},
  created() {
    axios.get("/dogs").then((response) => (this.dogs = response.data));

    //Change to the right API address after .env issue has been figured out.
    axios.get(process.env.VUE_APP_API_URL + "/wp-json/wp/v2/posts").then((response) => (this.posts = response.data));
  },
};
</script>
