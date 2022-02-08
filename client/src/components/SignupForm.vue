<template>
	<div>
		<form class="container card py-2 my-5" action="http://localhost:3000/user/" method="post" enctype="multipart/form-data">
			<div class="form-group">
				<h2 class="text-center">Signup</h2>
				<img id="profilepic" class="rounded-circle mx-auto d-block my-3" :src="image" alt="">
				<h5 class="text-center">@{{username}}</h5><br>
				<div class="row justify-content-center">
					<div class="col-12 col-sm-5 col-xl-3">
						<label for="uploaded_file">Profile Pic</label>
						<input 
							type="file" 
							accept="image/png, image/jpeg" 
							class="form-control my-3" 
							id="uploaded_file" 
							name="uploaded_file"
							@change="onFileChange" 
							required>
						<label for="username">Username</label>
						<div class="input-group flex-nowrap my-3">
							<span class="input-group-text">@</span>
							<input 
								class="form-control" 
								type="text"
								autocomplete="username" 
								id="username"
								name="username" 
								placeholder="Username" 
								@keyup="updateUsername" 
								required>
						</div>	
						<label for="email">Email</label>
						<input 
							class="form-control my-3" 
							type="email"
							id="email" 
							name="email"
							placeholder="user@email.com" 
							required>
					</div>
					<div class="col-12 col-sm-5 col-xl-3">
						<label for="firstName">First Name</label>
						<input 
							class="form-control my-3" 
							type="text"
							id="firstName" 
							name="first_name"
							placeholder="First Name" 
							required>
						<label for="lastName">Last Name</label>
						<input 
							class="form-control my-3" 
							type="text"
							id="lastName" 
							name="last_name"
							placeholder="Last Name" 
							required>
						<label for="password">Password</label>
						<input 
							class="form-control my-3" 
							type="password" 
							autocomplete="new-password" 
							id="password" 
							name="password"
							placeholder="Password" 
							required>
					</div>
					
				</div>
				<button type="submit" class="btn btn-primary my-3 row w-25 mx-auto d-block">Signup</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				image: 'https://images.unsplash.com/photo-1643255083197-18721220670e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
				username: 'username',
			}
		},
		methods: {
			updateUsername(e) {
				this.username = e.target.value;
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
				vm.image = e.target.result;
				};
				reader.readAsDataURL(file);
			},
		}
	}
</script>

<style>
	#profilepic {
		aspect-ratio: 1/1;
		height: 200px;
		width: 200px;
		object-fit: cover;
	}
</style>