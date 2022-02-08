<template>
		<div class="row justify-content-center mt-5">
			<div class="col-3">
				<form class="container card py-2">
					<div class="form-group">
						<h2>Create Post</h2><br>
						<label for="Image">Image</label>
						<input type="file" accept="image/png, image/jpeg" class="form-control my-3" id="Image" @change="onFileChange">
						<label for="Description">Description</label>
						<textarea class="form-control my-3" id="Description" placeholder="Description" @keyup="updateDescription"></textarea>
						<button type="button" class="btn btn-primary my-3">Post</button>
					</div>
				</form>
			</div>
			<div class="col-3">
				<post-card :post="post" :user="user" />
			</div>
		</div>	
</template>

<script>
	import PostCard from "@/components/PostCard.vue";
	export default {
		name: "CreatePost",
		components: {
			PostCard,
		},

		data() {
			return {
				user: {
					name: "danijel",
					avatar: "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
				},
				post: {
					image: "https://img.icons8.com/material/344/image.png",
					description: "Description"
				},
			};
		},

		methods: {
			updateDescription(e) {
				this.post.description = e.target.value
			},
			onFileChange(e) {
				const files = e.target.files || e.dataTransfer.files;
				if (!files.length)
				return;
				this.createImage(files[0]);
			},
			createImage(file) {
				const reader = new FileReader();
				const vm = this;

				reader.onload = (e) => {
				vm.post.image = e.target.result;
				};
				reader.readAsDataURL(file);
			},
		},
	};
</script>

<style>
	form > div > input,textarea {
		autocomplete:  off;
		required: required;
	}
</style>