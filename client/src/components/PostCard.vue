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
    </div>
    <div id="text-body" class="card-body">
      <p class="card-text">
        <span class="fw-bold pe-1">{{ user.name }}</span
        >{{ post.body }}
      </p>
    </div>
    <form>
      <div class="input-group border-top">
        <input
          type="text"
          class="form-control border-0"
          placeholder="Add a comment..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-primary border-0"
          type="button"
          id="button-addon2"
        >
          Post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
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
