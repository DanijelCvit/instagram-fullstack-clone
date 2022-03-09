<template>
	<div>
		<div v-if="userExists" class="container mt-5">
			<div class="shadow row justify-content-center bg-white rounded py-3 mx-lg-5 mx-xl-5">
				<div class="col-12 col-md-6 col-lg-6 justify-content-center d-flex align-items-center flex-wrap mb-3">
					<img :src="user.image" alt="" class="profile-pic rounded-circle mx-auto">
				</div>
				<div class="col-8 col-md-6 col-lg-6 text-center">
					<p class="h3">@{{user.username}}</p>
					<div class="row justify-content-center">
						<span class="col-4">Posts:<br>{{user.postCount}}</span>
						<span class="col-4">Followers:<br>{{user.followers}}</span>
						<span class="col-4">Following:<br>{{user.following}}</span>
					</div>
					<p class="h5 mt-3">{{user.first_name}} {{user.last_name}}</p>
					<p>{{user.email}}</p>
					<button @click="swapComponent('editProfile')" class="btn btn-light">Edit Profile</button>
					<button @click="swapComponent('editProfile')" class="btn btn-outline-danger">Logout</button>
				</div>
			</div>

			<!-- Insert Posts Here -->
			<posts-grid :user="user" v-if="!loading">
			</posts-grid>
			<div v-if="loading" class="row mt-5 mx-auto text-center">
				<div class="spinner-border mx-auto text-center" role="status">
					<span class="sr-only mx-auto text-center">Loading...</span>
				</div>
			</div>

		</div>
		<div v-if="!userExists" class="shadow row justify-content-center bg-white rounded mt-5 py-3 mx-lg-5 mx-xl-5">
			<p class="card-title text-center display-6 text-muted">404 | User Not Found</p>
		</div>
	</div>
</template>

<script>
	import PostsGrid from "@/components/PostsGrid.vue";
	import {mapGetters} from "vuex";
	export default {
		data() {
			return {
				user: {
					id: '',
					email: "",
					first_name: "",
					last_name: "",
					username: '',
					password: "",
					image: "https://picsum.photos/200",
					postCount: "0",
					followers: "0",
					following: "0",
				},
				appUrl: "http://localhost:8000/",
				userExists: true,
				loading: true,
			};
		},
		async mounted() {
			try {
				if (this.$route.params.username) {
					this.user.username = this.$route.params.username
				} else {
					this.user.username = localStorage.getItem('username')
				}
				const res = await fetch(`/api/user/${this.user.username}`);
				this.user = await res.json();
				this.loading = false
			} catch (error) {
				this.userExists = false
				this.loading = false
				console.log(error)
			}

		},
		props: ['swapComponent'],

		computed: {
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
