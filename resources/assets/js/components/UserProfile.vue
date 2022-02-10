<template>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-12 col-md-5 col-lg-3 justify-content-center d-flex align-items-center flex-wrap mb-3">
				<img :src="imageUrl" alt="" class="shadow-lg profile-pic rounded-circle mx-auto">
			</div>
			<div class="col-8 col-md-5 col-lg-3 text-center">
				<p class="h3">@{{user.username}}</p>
				<div class="row justify-content-center">
					<span class="col-4">Posts:<br>{{user.posts}}</span>
					<span class="col-4">Followers:<br>{{user.followers}}</span>
					<span class="col-4">Following:<br>{{user.following}}</span>
				</div>
				<p class="h5 mt-3">{{user.first_name}} {{user.last_name}}</p>
				<p>{{user.email}}</p>
				<button class="btn btn-light">Edit Profile</button>
				
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
	    return {
	      user: {
	      	id: "",
	        email: "",
	        first_name: "",
	        last_name: "",
	        username: "",
	        password: "",
	        image: "",
	        posts: "0",
	        followers: "0",
	        following: "0",
	      },
	      appUrl: "http://localhost:3000/",
	    };
	  },
	  async mounted() {
	    try {
	      const res = await fetch("http://localhost:3000/user/10000");
	      const user = await res.json();
	      this.user = user[0];
	      this.user.password = "";
	      this.user.posts = 0;
	      this.user.followers = 0;
	      this.user.following = 0;
	      // TODO dynamically grab post, followers, and following COUNT
	    } catch (error) {
	      console.log("Something went wrong", error);
	    }
	  },
	  computed: {
	    imageUrl() {
	      return this.appUrl ? this.appUrl + this.user.image : this.user.image;
	    },
	  },
	}
</script>

<style>
	.profile-pic {
		aspect-ratio: 1/1;
		height: 200px;
		width: 200px;
		object-fit: cover;
	};
</style>