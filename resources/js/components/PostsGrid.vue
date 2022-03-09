<template>
  <div>
		<div class="row mt-5 justify-content-between mx-lg-5 mx-xl-5">
			<div v-for="post in posts" :key="post.id" class="mb-3 col-4">
				<post-card :post="post" class="thegram-grid">
					<template v-slot:menu>
						<menu-item :post="post" />
						<delete-modal :post="post" @onDelete="deletePost($event)" />
						<edit-modal :post="post" @onEdit="updatePosts($event)" />
					</template>
				</post-card>
			</div>
		</div>
	</div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import MenuItem from "./MenuItem";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default {
  components: {
    PostCard,
		MenuItem,
		DeleteModal,
		EditModal,
  },
  data() {
    return {
			noPosts: false,
    };
  },
	methods: {
		updatePosts(updatedPost) {
			const newPosts = this.posts.map((post) =>
				post.slug === updatedPost.slug ? updatedPost : post
			);
			this.posts = newPosts;
		},
		deletePost(postToDelete) {
			const newPosts = this.posts.filter(
				(post) => post.slug !== postToDelete.slug
			);
			this.posts = newPosts;
		},
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
