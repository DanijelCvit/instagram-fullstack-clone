<template>
  <div>
    <div @click="resultsVisible = false" class="overlay"></div>
    <div class="position-relative">
      <input
        @click="resultsVisible = !resultsVisible"
        type="text"
        class="form-control d-block"
        name=""
        placeholder="Search"
      />
      <div v-if="resultsVisible" class="search-popup position-absolute">
        <div class="d-flex justify-content-center">
          <div class="arrowup"></div>
        </div>
        <div class="search-content shadow-sm p-3 mb-5 bg-body rounded">
          <h2 class="search-header">Search</h2>
          <div
            class="search-body d-flex justify-content-center align-items-center"
          >
            <p>No recent searches.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resultsVisible: false,
    };
  },
};
</script>

<style scoped>
.arrowup {
  width: 0px;
  height: 0px;
  border-bottom: 10px solid white;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid transparent;
}

.search-popup {
  left: -41px;
}

.search-content {
}
.search-header {
  font-size: 1rem;
}
.search-body {
  width: 250px;
  height: 500px;
  font-size: 0.7rem;
  font-weight: normal;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
