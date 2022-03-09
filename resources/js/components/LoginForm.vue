<template>
	<div>
		<form @submit.prevent="login(loginComponent)" class="container card py-2 my-5 shadow" action="http://localhost:8000/login" method="post" enctype="application/x-www-form-urlencoded">
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
				<router-link tag="button" class="btn btn-secondary my-3 row w-25 mx-auto d-block" to="/signup">Signup Instead</router-link>
			</div>
		</form>
	</div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
	data() {
		return {
			image: 'images/placeholder.jpg',
			username: 'username',
			form: {
				email: "",
				password: ""
			},
			loginComponent: this
		}
	},
	methods: {
		...mapActions(['login']),
		updateUsername(e) {
			this.username = e.target.value;
		},
	},
}
</script>

<style>

</style>
