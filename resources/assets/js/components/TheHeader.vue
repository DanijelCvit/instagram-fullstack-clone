<template>
  <nav class="navbar sticky-top navbar-expand navbar-dark bg-dark">
    <div class="container-fluid">
      <div id="nav" class="navbar-nav d-flex w-100 justify-content-between">
        <div id="left" class="d-flex">
          <router-link to="/" class="nav-link"
            ><i class="fas fa-home"></i
          ></router-link>
          <router-link to="/create-post" class="nav-link"
            ><i class="far fa-plus-square"></i
          ></router-link>
        </div>

        <div id="center" class="mb-2 align-self-center d-flex flex-nowrap">
          <the-search />
        </div>
        <div id="right" class="d-flex">
          <router-link to="/signup" class="nav-link"
            ><i class="fas fa-user-circle"></i
          ></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import TheSearch from "./TheSearch.vue";
export default {
  components: { TheSearch },
  name: "TheHeader",
};
</script>

<style>
#nav {
  font-size: 40px;
}

#nav > * {
  font-weight: bold;
  text-decoration: none;
}

#nav a:hover {
  color: #2a7553;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
