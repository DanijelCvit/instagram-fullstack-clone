<template>
  <div class="row mt-5 justify-content-between mx-lg-5 mx-xl-5">
    <div v-for="post in posts" :key="post.id" class="mb-3 col-4">
      <post-card :post="post" class="thegram-grid"> </post-card>
    </div>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
export default {
  components: {
    PostCard,
  },
  data() {
    return {
      // user: {
      //   //name: "danijel",
      //   avatar:
      //     "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
      // },
      posts: [],
    };
  },
  props: ["user"],
  async mounted() {
    try {
      const res = await fetch("/api/posts");
      const posts = await res.json();
      this.posts = posts;
    } catch (error) {
      console.log("Something went wrong", error);
    }
  },
};
</script>

<style>
.thegram-grid > img {
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>
