<template>
  <div class="container">
    <ul class="ps-0 col-5 mx-auto">
      <li v-for="post in posts" :key="post.id">
        <post-card appUrl="http://localhost:3000/" :post="post" :user="user"
          ><comments
        /></post-card>
      </li>
    </ul>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import Comments from "./Comments.vue";
export default {
  components: {
    PostCard,
    Comments,
  },
  data() {
    return {
      user: {
        name: "danijel",
        avatar:
          "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
      },
      posts: [],
    };
  },
  async mounted() {
    try {
      const res = await fetch("http://localhost:3000/posts/");
      const posts = await res.json();
      this.posts = posts;
    } catch (error) {
      console.log("Something went wrong", error);
    }
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li:first-of-type {
  margin-top: 2rem;
}

li {
  margin-bottom: 2rem;
}
</style>
