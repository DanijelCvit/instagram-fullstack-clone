<template>
  <div class="home">
     <TheHeader />
    <div class="container">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <post-card :post="post" :user="user" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
components: {
    TheHeader,
    PostCard,
},
  data() {
    return {
      user: {
        name: "danijel",
        avatar:
          "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
      },
      posts: [
        {
          title: "This is my post",
          image:
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
          body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          title: "This is my post",
          image:
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
          body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          title: "This is my post",
          image:
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
          body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    };
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  margin-bottom: 2rem;
}
</style>
