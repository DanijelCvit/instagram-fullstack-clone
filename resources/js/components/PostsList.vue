<template>
  <div class="container">
    <ul class="ps-0 col-10 col-lg-5 mx-auto">
      <li v-for="post in posts" :key="post.id">
        <post-card :post="post">
          <template v-slot:menu>
            <menu-item :post="post" />
            <delete-modal :post="post" @onDelete="deletePost($event)" />
            <edit-modal :post="post" @onEdit="updatePosts($event)" />
          </template>
          <comments />
        </post-card>
      </li>
    </ul>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import Comments from "./Comments.vue";
import MenuItem from "./MenuItem.vue";
import DeleteModal from "./DeleteModal.vue";
import EditModal from "./EditModal.vue";
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
