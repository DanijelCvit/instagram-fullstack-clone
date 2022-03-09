<template>
  <div>
    <div
      v-if="resultsVisible"
      @click="resultsVisible = false"
      class="overlay"
    ></div>
    <div class="position-relative">
      <input
        @click="resultsVisible = !resultsVisible"
				@keyup="search"
        v-model="searchQuery"
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
          <div class="search-body justify-content-center align-items-center">
            <p v-if="results.length===0">No recent searches.</p>
						<div v-if="results.length!==0" v-for="result in results" class="d-block">
							<a :href="'/#/user/'+result.username" class="text-decoration-none link-dark">
								<div class="my-2 row">
									<div class="col-3">
										<img :src="result.image" :alt="result.username" class="rounded-circle profile-pic">
									</div>
									<div class="col-9">
										<span class="h6">@{{result.username}}</span>
										<br>
										<span>{{result.first_name}}</span>
										<span>{{result.last_name}}</span>
									</div>
								</div>
							</a>
						</div>
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
			searchQuery: '',
			results: [],
    };
  },
	methods: {
		async search(e){

			try {
				const res = await fetch(`/api/user/search/${this.searchQuery}`)
				const results = await res.json()
				this.results = await results

			} catch {

			} finally {

			}
		}
	}
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
.profile-pic {
	width: 100%;
	height: auto;
	aspect-ratio: 1/1;
	object-fit: cover;
}
</style>
