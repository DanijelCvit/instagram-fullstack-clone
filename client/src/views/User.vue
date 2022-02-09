<template>
	<div>
		<TheHeader />
		<UserProfile />
	</div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import UserProfile from "@/components/UserProfile.vue";

export default {
	components: {
		TheHeader,
		UserProfile,
	},
};
</script>
