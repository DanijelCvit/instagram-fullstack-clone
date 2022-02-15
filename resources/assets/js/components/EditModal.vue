<template>
  <div
    class="modal fade"
    :id="`editModal${post.slug}`"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit post</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <img class="img-fluid" :src="post.image" alt="" />
          </div>
          <form
            class="p-3"
            enctype="multipart/form-data"
            action="/posts"
            method="POST"
          >
            <input type="hidden" name="user_id" class="form-control my-3" />
            <label for="Image">Select image</label>
            <input
              type="file"
              name="uploaded_file"
              accept="image/png, image/jpeg"
              class="form-control my-3"
              id="Image"
              @change="onFileChange"
            />
            <label for="Description">Description</label>
            <textarea
              class="form-control my-3"
              name="description"
              placeholder=""
              v-model="tempPost.description"
            ></textarea>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            data-bs-dismiss="modal"
            @click="submitEdit"
            type="button"
            class="btn btn-primary"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
export default {
  props: ["post"],
  components: { PostCard },
  data() {
    return {
      user: {
        id: 10000,
        name: "danijel",
        avatar:
          "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
      },
      tempPost: { ...this.post },
      fileInput: null,
    };
  },

  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.fileInput = files[0];
    },
    createImage(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.post.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitEdit() {
      const formData = new FormData();
      for (const key in this.tempPost) {
        formData.append(key, this.tempPost[key]);
      }
      if (this.fileInput) {
        formData.append("uploaded_file", this.fileInput, ".jpg");
      }

      const requestOptions = {
        method: "PATCH",
        body: formData,
      };

      fetch(`/posts/${this.post.slug}`, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      this.$emit("onEdit", this.tempPost);
    },
  },
};
</script>

<style scoped>
.modal-body {
  padding: 0;
}
</style>
