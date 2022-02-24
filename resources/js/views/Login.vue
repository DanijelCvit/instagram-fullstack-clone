<template>
	<div>
		<TheHeader />
		<LoginForm />
	</div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
	components: {
		TheHeader,
		LoginForm,
	},
};
</script>
