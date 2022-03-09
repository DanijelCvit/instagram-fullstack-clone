<template>
	<div>
		<div class="card-body mt-0 pt-0">

			<template v-if="showComments">
				<p v-for="comment in post.comments" :key="comment.id" class="card-text">
					<span class="fw-bold pe-1">{{ comment.author }}</span>
					{{ comment.comment }}
				</p>
				<a href="#" @click.prevent="showMore" class="pe-auto text-muted text-decoration-none">View less comments</a>
			</template>
			<template v-else-if=post.comments.length > 0">
				<p class="card-text">
					<span class="fw-bold pe-1">{{ post.comments[0].author }}</span>
					{{ post.comments[0].comment }}
				</p>
				<a v-if="post.comments.length > 1" href="#" @click.prevent="showMore"
					 class="pe-auto text-muted text-decoration-none">View more comments</a>
			</template>
		</div>

		<form @submit.prevent="createComment" >
			<div class="input-group border-top">
				<input
					v-model="newComment.comment"
					name="comment"
					type="text"
					class="form-control border-0"
					placeholder="Add a comment..."
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
				/>
				<button
					class="btn btn-outline-primary border-0"
					type="submit"
					id="button-addon2"
				>
					Post
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	props: ['post'],
	data() {
		return {
			newComment: {
				comment:"",
				post_id: this.post.id,
				author: "this.getCurrentUser.username"
			},
			showComments: false,
		}
	},
	computed: {...mapGetters(['getCurrentUser'])},
	methods: {
		showMore() {
			this.showComments = !this.showComments

		},
	async	createComment(){
			try{
				await fetch("/api/comments",{
					method: "POST",
					headers:{
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(this.newComment)
				});

				this.$emit('onCreate', this.newComment);

			}catch (err){
				console.log(err);
			}
		}
	}
};
</script>

<style lang="scss" scoped></style>
