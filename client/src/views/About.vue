<template>
  <v-app-bar absolute color="blue" dark>
    <v-text-field
      dense
      color="white"
      v-model="search"
      class="my-auto mx-auto"
      label="Search"
      placeholder="Title"
      filled
    ></v-text-field>
  </v-app-bar>
</template>

<script>
import API from "../api";

export default {
  data() {
    return {
      post: {},
      expand: false,
      expand2: false,
    };
  },
  async created() {
    const response = await API.getPostByID(this.$route.params.id);
    this.post = response;
  },
  methods: {
    async findPost(id) {
      const response = await API.getPostByID(id);
      this.$router.getPostByID({
        name: "home",
        params: { message: response.message },
      });
    },
  },
};
</script>