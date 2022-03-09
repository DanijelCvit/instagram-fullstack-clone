<template>
  <div class="card shadow">
    <div class="d-flex align-items-center justify-content-between p-1">
      <div class="d-flex align-items-center">
				<a :href="'/#/user/'+post.author.username">
					<img
						id="avatar"
						:src="post.author.image"

						class="card-img-top rounded-circle p-1"
						alt=""
					/>
				</a>
				<a :href="'/#/user/'+post.author.username" class="text-decoration-none link-dark">
        	<h5 class="card-title ps-2">{{ post.author.username }}</h5>
				</a>
      </div>
      <slot name="menu"></slot>
    </div>
    <img :src="post.image" class="" alt="" />
    <div class="card-body">
      <button class="btn p-0"><i class="far fa-heart"></i></button>
      <span class="ps-2">{{ post.likes }}</span>
    </div>
    <div id="text-body" class="card-body">
      <p v-if="post.created_at">Posted {{ post.created_at }}</p>
      <p class="card-text">
				<a :href="'/#/user/'+post.author.username" class="text-decoration-none link-dark">
					<span class="fw-bold pe-1">{{ post.author.username }}</span>
				</a>
				{{ post.description }}
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
		}
	},
	mounted(){
	}
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

</style>
