<template>
  <div>
		<div class="row mt-5 justify-content-between mx-lg-5 mx-xl-5">
			<div v-for="post in posts" :key="post.id" class="mb-3 col-4">
				<post-card :post="post" class="thegram-grid"> </post-card>
			</div>
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
			noPosts: false,
    };
  },
  props: ["user",'posts'],
  async mounted() {

  },
};
</script>

<style>
.thegram-grid > img {
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>
