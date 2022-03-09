<template>
	<div>
		<div class="card-body mt-0 pt-0">

			<template v-if="showComments">
				<p v-for="comment in comments" :key="comment.id" class="card-text">
					<span class="fw-bold pe-1">{{ comment.author }}</span>
					{{ comment.comment }}
				</p>
				<a href="#" @click.prevent="showMore" class="pe-auto text-muted text-decoration-none">View less comments</a>
			</template>
			<template v-else-if=comments.length > 0">
				<p class="card-text">
					<span class="fw-bold pe-1">{{ comments[0].author }}</span>
					{{ comments[0].comment }}
				</p>
				<a v-if="comments.length > 1" href="#" @click.prevent="showMore"
					 class="pe-auto text-muted text-decoration-none">View more comments</a>
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
	props: ['comments'],
	data() {
		return {

			showComments: false,
		}
	},
	methods: {
		showMore() {
			this.showComments = !this.showComments

		}
	}
};
</script>

<style lang="scss" scoped></style>
