<template>
  <div class="home">
    <TheHeader />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    TheHeader,
  },
};
</script>
