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
				document.cookie = `token=${result.token}`
				commit('setCurrentUser', result)
				loginComponent.$router.push('/')
			});
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
