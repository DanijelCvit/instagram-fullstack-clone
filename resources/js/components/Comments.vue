<template>
  <div>
		<div class="card-body mt-0 pt-0">

			<template v-if="showComments">
					<p v-for="comment in comments" :key="comment.id" class="card-text">
						<a :href="'/#/user/'+comment.username" class="text-decoration-none link-dark">
							<span class="fw-bold pe-1">{{ comment.username }}</span>
						</a>
						{{ comment.comment }}
					</p>
				<a href="#" @click.prevent="showMore" class="pe-auto text-muted text-decoration-none">View less comments</a>
			</template>
			<template v-else>
				<p class="card-text">
					<a :href="'/#/user/'+comments[0].username" class="text-decoration-none link-dark">
						<span class="fw-bold pe-1">{{ comments[0].username }}</span>
					</a>
					{{ comments[0].comment }}
				</p>
				<a href="#" @click.prevent="showMore" class="pe-auto text-muted text-decoration-none">View more comments</a>
			</template>
		</div>

    <form>
        <div class="input-group border-top">
          <input
            type="text"
            class="form-control border-0"
            placeholder="Add a comment..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-primary border-0"
            type="button"
            id="button-addon2"
          >
            Post
          </button>
        </div>
      </form>
  </div>
</template>

<script>
export default {
	data(){
		return {
			comments: [
				{
					id: 0,
					username: "firstuser",
					comment: "this is my comment"
				},
				{
					id: 1,
					username: "usertwo",
					comment: "this is another comment"
				},
				{
					id: 4,
					username: "thirdprofile",
					comment: "this is a comment that I wrote. It's a bit longer than the other ones"
				},
			],
			showComments: false,
		}
	},
	methods: {
		showMore(){
			this.showComments = !this.showComments

		}
	}
};
</script>

<style lang="scss" scoped></style>
