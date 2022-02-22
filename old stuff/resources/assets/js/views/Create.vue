<template>
  <div class="create">
    <TheHeader />
    <CreatePost />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import CreatePost from "@/components/CreatePost.vue";
export default {
  components: {
    TheHeader,
    CreatePost,
  },
};
</script>

<style scoped></style>
