<template>
  <div>
		<div v-if="!loading" class="row mt-5 justify-content-between mx-lg-5 mx-xl-5">
			<div v-for="post in posts" :key="post.id" class="mb-3 col-4">
				<post-card :post="post" class="thegram-grid"> </post-card>
			</div>
		</div>
		<div v-if="loading" class="row mt-5 mx-auto text-center">
			<div class="spinner-border mx-auto text-center" role="status">
				<span class="sr-only mx-auto text-center">Loading...</span>
			</div>
		</div>
		<div v-if="noPosts" class="row mt-5 mx-auto text-center">
			<p class="mx-auto text-center">No Posts</p>
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
			noPosts: false,
			loading: true,
    };
  },
  props: ["user"],
  async mounted() {
    const vm = this
		try {
      const res = await fetch(`/api/posts/user/${this.user.id}`);
      const posts = await res.json();
      vm.posts = await posts;
			this.loading = false
			//console.log(this.posts)
    } catch (error) {
			this.loading = false
			this.noPosts = true
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
