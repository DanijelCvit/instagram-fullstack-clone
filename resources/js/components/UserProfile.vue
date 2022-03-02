<template>
	<div class="container mt-5">
		<div class="shadow row justify-content-center bg-white rounded py-3 mx-lg-5 mx-xl-5">
			<div class="col-12 col-md-6 col-lg-6 justify-content-center d-flex align-items-center flex-wrap mb-3">
				<img :src="imageUrl" alt="" class="profile-pic rounded-circle mx-auto">
			</div>
			<div class="col-8 col-md-6 col-lg-6 text-center">
				<p class="h3">@{{getCurrentUser.user.username}}</p>
				<div class="row justify-content-center">
					<span class="col-4">Posts:<br>{{user.postCount}}</span>
					<span class="col-4">Followers:<br>{{user.followers}}</span>
					<span class="col-4">Following:<br>{{user.following}}</span>
				</div>
				<p class="h5 mt-3">{{getCurrentUser.user.first_name}} {{getCurrentUser.user.last_name}}</p>
				<p>{{getCurrentUser.user.email}}</p>
				<button @click="swapComponent('editProfile')" class="btn btn-light">Edit Profile</button>


			</div>
		</div>

			<!-- Insert Posts Here -->
			<posts-grid :user="user">

			</posts-grid>

	</div>
</template>

<script>
	import PostsGrid from "@/components/PostsGrid.vue";
	import {mapGetters} from "vuex";
	export default {
		data() {
			return {
			  	user: {
					id: "",
					email: "",
					first_name: "",
					last_name: "",
					username: "user-not-found",
					password: "",
					image: "images/placeholder.jpg",
					postCount: "0",
					followers: "0",
					following: "0",
				},
				appUrl: "http://localhost:8000/",
			};
		},
		async mounted() {

		},
		props: ['swapComponent'],
		// methods: {
		// 	swapComponent: function(component) {
		// 		this.dynamicComponent = component;

		// 	}
		// },
		computed: {
			imageUrl() {
				return this.appUrl ? this.appUrl + this.user.image : this.user.image;
			},
			...mapGetters([
				'getCurrentUser'
			])
		},
		components: {
			PostsGrid,
		}
	}

</script>

<style>
.profile-pic {
  aspect-ratio: 1/1;
  height: 200px;
  width: 200px;
  object-fit: cover;
}
</style>
