<template>
	<div>
		<form @submit.prevent="login" class="container card py-2 my-5 shadow" action="http://localhost:8000/login" method="post" enctype="application/x-www-form-urlencoded">
			<div class="form-group">
				<h2 class="text-center">Login</h2>
				<br>
				<div class="row justify-content-center">
					<div class="col-12 col-sm-5 col-xl-3">

						<label for="email">Email</label>
						<input
							class="form-control my-3"
							type="email"
							v-model="form.email"
							autocomplete="email"
							id="email"
							name="email"
							placeholder="user@email.com"
							required>

						<label for="password">Password</label>
						<input
							class="form-control my-3"
							type="password"
							v-model="form.password"
							autocomplete="password"
							id="password"
							name="password"
							placeholder="Password"
							required>
					</div>

				</div>
				<button type="submit" class="btn btn-primary my-3 row w-25 mx-auto d-block">Login</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			image: 'images/placeholder.jpg',
			username: 'username',
			form: {
				email: "",
				password: ""
			}
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
		login() {
			const vm = this;

			var myHeaders = new Headers();
			myHeaders.append("Accept", "application/json");
			myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

			var urlencoded = new URLSearchParams();
			urlencoded.append("email", this.form.email);
			urlencoded.append("password", this.form.password);

			var requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: urlencoded,
				redirect: 'follow'
			};

			fetch("http://localhost:8000/api/login", requestOptions)
				.then(response => response.text())
				.then(result => console.log(result)) // TODO store in vuex
				.then(function() {
					vm.$router.push('/')
				});


		}
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
