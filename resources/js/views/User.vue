<template>
	<div>
		<TheHeader />
		
		<component :is="dynamicComponent" :swap-component="swapComponent"></component>
	</div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import UserProfile from "@/components/UserProfile.vue";
import EditProfile from "@/components/EditProfile.vue";

export default {
	data() {
		return {
			dynamicComponent: 'UserProfile'
		}
	},
	components: {
		TheHeader,
		UserProfile,
		EditProfile,
	},
	methods: {
		swapComponent: function(component) {
      		this.dynamicComponent = component;
    	}
	}
};
</script>
