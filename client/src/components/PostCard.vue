<template>
  <div class="card">
    <div class="d-flex align-items-center p-1">
      <img
        id="avatar"
        :src="user.avatar"
        class="card-img-top rounded-circle p-1"
        alt=""
      />
      <h5 class="card-title ps-2">{{ user.name }}</h5>
    </div>
    <img :src="post.image" class="" alt="" />
    <div class="card-body">
      <button class="btn p-0"><i class="far fa-heart"></i></button>
      <span class="ps-2">{{ post.likes }}</span>
    </div>
    <div id="text-body" class="card-body">
      <p class="card-text">
        <span class="fw-bold pe-1">{{ user.name }}</span
        >{{ post.description }}
      </p>
    </div>
    <comments />
  </div>
</template>

<script>
import Comments from "./Comments.vue";
export default {
  components: { Comments },
  props: ["post", "user"],
};
</script>

<style scoped>
#avatar {
  max-width: 35px;
}

.btn-outline-primary:hover {
  background-color: transparent;
  color: #0d6efd;
}

.card-title {
  margin: 0;
  font-size: 0.8rem;
}

.card-body {
  font-size: 0.85rem;
}

.fa-heart {
  font-size: 1.5rem;
}

#text-body {
  padding-top: 0;
}
</style>
