<template>
  <div>
    <form
      class="container card py-2 my-5 shadow"
      @submit.prevent="submitForm"
      enctype="multipart/form-data"
    >
      <div class="form-group">
        <h2 class="text-center">Edit Profile</h2>
        <img
          id="profilepic"
          class="rounded-circle mx-auto d-block my-3"
          :src="getCurrentUser.user.image"
          alt=""
        />
        <h5 class="text-center">@{{ getCurrentUser.user.username }}</h5>
        <br />
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
            />
            <label for="username">Username</label>
            <div class="input-group flex-nowrap my-3">
              <span class="input-group-text">@</span>
              <input
                class="form-control"
                type="text"
                autocomplete="username"
                id="username"
                name="username"
                :value="getCurrentUser.user.username"
                @keyup="updateUsername"
                required
              />
            </div>
            <label for="email">Email</label>
            <input
              class="form-control my-3"
              type="email"
              id="email"
              name="email"
              :value="getCurrentUser.user.email"
              required
            />
          </div>
          <div class="col-12 col-sm-5 col-xl-3">
            <label for="firstName">First Name</label>
            <input
              class="form-control my-3"
              type="text"
              id="firstName"
              name="first_name"
              :value="getCurrentUser.user.first_name"
              required
            />
            <label for="lastName">Last Name</label>
            <input
              class="form-control my-3"
              type="text"
              id="lastName"
              name="last_name"
              :value="getCurrentUser.user.last_name"
              required
            />
            <label for="password">Password</label>
            <input
              class="form-control my-3"
              type="password"
              autocomplete="new-password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary my-3 row w-25 mx-auto d-block"
        >
          Save Changes
        </button>
				<button @click="swapComponent('userProfile')" class="btn btn-light my-3 row w-25 mx-auto d-block">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
      username: "username",

      user: {
        id: "",
        email: "",
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        image: "",
      },
      appUrl: "http://localhost:8000/",
      fileInput: "",
    };
  },
	props: ['swapComponent'],
  async mounted() {

  },
  methods: {
    updateUsername(e) {
      this.username = e.target.value;
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.fileInput = files[0];
    },
    createImage(file) {
      const reader = new FileReader();
      const vm = this;

      reader.onload = (e) => {
        vm.user.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitForm() {
      const formData = new FormData();

      for (const name in this.user) {
        formData.append(name, this.user[name]);
      }
      if (this.fileInput != "") {
        formData.append("uploaded_file", this.fileInput, ".jpg");
      }
      var requestOptions = {
        method: "PATCH",
        body: formData,
      };

      fetch("/user/10000", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },
  },
	computed: {
		...mapGetters([
			'getCurrentUser'
		])
	}
};
</script>

<style>
#profilepic {
  aspect-ratio: 1/1;
  height: 200px;
  width: 200px;
  object-fit: cover;
}
</style>
