//User Vuex Module

const state = {
	user: {
		id: 'state_id',
		first_name: 'state_first_name',
		last_name: 'state_last_name',
		username: 'state_username',
	}
}

const getters = {
	getCurrentUser: state => state.user
}

const actions = {
	async login({ commit }, loginComponent) {

		if (!localStorage.getItem('user_id')) {
			var myHeaders = new Headers();
			myHeaders.append("Accept", "application/json");
			myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

			var urlencoded = new URLSearchParams();
			urlencoded.append("email", loginComponent.form.email);
			urlencoded.append("password", loginComponent.form.password);

			var requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: urlencoded,
				redirect: 'follow'
			};

			fetch("http://localhost:8000/api/login", requestOptions)
				.then(response => response.json())
				.then(function(result) {
					loginComponent.form.email = "";
					loginComponent.form.password = "";
					localStorage.setItem('token', result.token)
					localStorage.setItem('user_id', result.user.id)
					localStorage.setItem('first_name', result.user.first_name)
					localStorage.setItem('last_name', result.user.last_name)
					localStorage.setItem('username', result.user.username)
					localStorage.setItem('email', result.user.email)
					localStorage.setItem('image', result.user.image)
					commit('setCurrentUser', result)
					loginComponent.$router.push('/')
				});
		} else {
			let fromStorage = {
				token: localStorage.getItem('token'),
				user: {
					user_id: localStorage.getItem('user_id'),
					first_name: localStorage.getItem('first_name'),
					last_name: localStorage.getItem('last_name'),
					username: localStorage.getItem('username'),
					email: localStorage.getItem('email'),
					image: localStorage.getItem('image'),
				}
			}
			commit('setCurrentUser', fromStorage)
		}

	}
}

const mutations = {
	setCurrentUser: (state, user) => (state.user = user)
}

export default {
	state,
	getters,
	actions,
	mutations
}
