<template>
	<div>
		<TheHeader />
		<SignupForm />
	</div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import SignupForm from "@/components/SignupForm.vue";

export default {
	components: {
		TheHeader,
		SignupForm,
	},
};
</script>