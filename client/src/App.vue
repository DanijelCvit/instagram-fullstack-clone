<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <div class="container"><post-card /></div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import PostCard from "./components/PostCard.vue";
export default {
  components: { PostCard },
};
</script>

<style lang="scss" scoped></style>
