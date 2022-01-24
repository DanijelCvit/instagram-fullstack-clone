<template>
  <div class="card">
    <div class="d-flex align-items-center p-1">
      <img
        id="avatar"
        :src="avatar"
        class="card-img-top rounded-circle p-1"
        alt=""
      />
      <h5 class="card-title ps-2">{{ username }}</h5>
    </div>
    <img :src="post.image" class="" alt="" />
    <div class="card-body">
      <button class="btn p-0"><i class="far fa-heart"></i></button>
    </div>
    <div id="text-body" class="card-body">
      <p class="card-text">
        <span class="fw-bold pe-1">{{ username }}</span
        >{{ post.body }}
      </p>
    </div>
    <div>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "danijel",
      avatar:
        "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
      post: {
        title: "This is my post",
        image:
          "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
        body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
    };
  },
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
