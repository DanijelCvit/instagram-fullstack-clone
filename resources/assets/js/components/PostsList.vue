<template>
  <div class="container">
    <ul class="ps-0 col-10 col-lg-5 mx-auto">
      <li v-for="post in posts" :key="post.id">
        <post-card :post="post" :user="user">
          <template v-slot:menu>
            <menu-item />
          </template>
          <comments />
        </post-card>
      </li>
    </ul>
    <delete-modal />
    <edit-modal :post="post" />
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
        name: "danijel",
        avatar:
          "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
      },
      posts: [],
      post: {
        image: "/placeholder.png",
        description: "Description",
      },
    };
  },
  async mounted() {
    try {
      const res = await fetch("/posts");
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
