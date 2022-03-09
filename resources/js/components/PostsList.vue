<template>
  <div class="container">
<!--		<p>{{getCurrentUser.token}}</p>-->
    <ul class="ps-0 col-10 col-lg-5 mx-auto">
      <li v-for="post in posts" :key="post.id">
        <post-card :post="post">
          <template v-slot:menu>
            <menu-item :post="post" />
            <delete-modal :post="post" @onDelete="deletePost($event)" />
            <edit-modal :post="post" @onEdit="updatePosts($event)" />
          </template>
          <comments :post="post" @onCreate="addComment($event)"/>
        </post-card>
      </li>
    </ul>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
import Comments from "./Comments.vue";
import MenuItem from "./MenuItem.vue";
import DeleteModal from "./DeleteModal.vue";
import EditModal from "./EditModal.vue";
import {mapGetters} from 'vuex';

export default {
  components: {
    PostCard,
    Comments,
    MenuItem,
    DeleteModal,
    EditModal,
  },
  data() {
    return {
      user: {
        username: "danijel",
        image:
          "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
      },
      posts: [],
    };
  },
  methods: {
    updatePosts(updatedPost) {
			this.posts = this.posts.map((post) =>
				post.slug === updatedPost.slug ? updatedPost : post
			);
    },
    deletePost(postToDelete) {
			this.posts = this.posts.filter(
				(post) => post.slug !== postToDelete.slug
			);
    },
		addComment(comment){
			 this.posts.find(post => post.id === comment.post_id).comments.push({...comment, created_at: new Date(), updated_at: new Date()});

		}
  },
  async mounted() {
    try {
      const res = await fetch("/api/posts");
			this.posts = await res.json();
    } catch (error) {
      console.log("Something went wrong", error);
    }
  },
	computed: mapGetters([
		'getCurrentUser'
	])
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
