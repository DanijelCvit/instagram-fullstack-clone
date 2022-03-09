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
      posts: [],
    };
  },
  props: ["user"],
  async mounted() {
    const vm = this
		try {
      const res = await fetch(`/api/posts/user/30`);
      const posts = await res.json();
      vm.posts = await posts;
			//console.log(this.posts)
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
