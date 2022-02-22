<template>
  <div class="card shadow">
    <div class="d-flex align-items-center justify-content-between p-1">
      <div class="d-flex align-items-center">
        <img
          id="avatar"
          :src="avatar"
          class="card-img-top rounded-circle p-1"
          alt=""
        />
        <h5 class="card-title ps-2">{{ post.author.username }}</h5>
      </div>
      <slot name="menu"></slot>
    </div>
    <img :src="post.image" class="" alt="" />
    <div class="card-body">
      <button class="btn p-0"><i class="far fa-heart"></i></button>
      <span class="ps-2">{{ post.likes }}</span>
    </div>
    <div id="text-body" class="card-body">
      <p>Posted {{ post.created_at }}</p>
      <p class="card-text">
        <span class="fw-bold pe-1">{{ post.author.username }}</span
        >{{ post.description }}
      </p>
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: ["post"],
  data(){
      return {
          image:  this.post.image,
          avatar:  this.post.author.image
      }
  },

};
</script>

<style scoped>
#avatar {
  max-width: 35px;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.btn-outline-primary:hover {
  background-color: transparent;
  color: #0d6efd;
}

.card-title {
  margin: 0;
  font-size: 0.8rem;
}
/*

.card-body {
  font-size: 0.85rem;
}

.fa-heart {
  font-size: 1.5rem;
}

#text-body {
  padding-top: 0;
} */
</style>
