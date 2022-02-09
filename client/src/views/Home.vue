<template>
  <div class="home">
    <TheHeader />
    <posts-list />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import PostsList from "@/components/PostsList.vue";

export default {
  components: {
    TheHeader,
    PostsList,
  },
};
</script>

<style scoped></style>
