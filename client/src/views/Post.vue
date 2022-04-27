<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="pa-4 mx-auto">
        <v-card class="pa-2" >
          <v-img :src="`/${post.image}`"></v-img>
          <v-card-actions class="pb-0">
            <v-row class="mt-1">
              <!-- <v-col sm="2">
                <v-btn small outlined color="blue darken-2">
                  {{ post.category }}
                </v-btn>
              </v-col> -->
              <v-col class="shrink">
                <v-btn class='mb-4' small outlined color='blue darken-2' @click="expand2 = !expand2">More</v-btn>
                <v-expand-x-transition>
                  <v-card
                    v-show="expand2"
                    height="auto"
                    width="auto"
                    class="mx-auto secondary"
                    
                  >
                    <v-row sm="10" class="d-flex justify-center">
                      <v-btn class='mt-2 mx-3' color="success" text :to="{ name: 'edit-post', params: {id: post._id} }">Edit</v-btn>
                      <v-btn class='mb-2 mx-3' color="red" text @click="removePost(post._id)">Delete</v-btn>
                    </v-row>
                  </v-card>
                </v-expand-x-transition>
              </v-col>
            </v-row>
          </v-card-actions> 
              <v-card-subtitle class="headline d-flex justify-center black--text">
                <h2>{{ post.title }}</h2>
              </v-card-subtitle>
          <v-card-text class="--text">
            <h3>{{ post.content }}</h3>
            <p></p>
            <v-divider></v-divider>
            <p></p>
            <p>{{ post.created }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../api";
export default {
  data(){
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
    async removePost(id) {
      const response = await API.deletePost(id);
      this.$router.push({ name: "home", params: {message: response.message} });
    },
  },
};
</script>
