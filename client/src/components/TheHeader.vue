<template>
	<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid d-flex">
			
			<div id="nav" class="navbar-nav w-100 mb-2 mb-lg-0 d-flex">

		    	<div id="left" class="w-25 d-flex">
		    		<router-link to="/" class="nav-link"><i class="fas fa-home"></i></router-link>
		<!--       	<router-link to="/about">About</router-link> | -->
					<router-link to="/about" class="nav-link"><i class="far fa-plus-square"></i></router-link>
		    	</div>


		    	<div id="center" class="w-50 d-flex px-5 input-group-sm mb-2 align-self-center flex-nowrap">
		    		<input type="text" class="form-control" name="" placeholder="Search">

		    	</div>


		    	<div id="right" class="w-25 d-flex justify-content-end">
		    		<router-link to="/about" class="nav-link"><i class="fas fa-user-circle"></i></router-link>

		    	</div>
		    	
				<!-- <div class="input-group-sm ms-auto me-auto mb-2  align-self-center flex-nowrap">
					
		      	</div>
		      	<a class="nav-link" href="https://www.bradhaupt.com">Brad</a> -->
		      	
		      	
	      	</div>
	      	
  		
      	</div>
    </nav>

</template>

<script>
export default {
  name: "TheHeader",
  
};
</script>

<style>
#nav {
  	font-size: 40px;
  	//border: 1px solid white;
  	

}

#nav > * {
  	font-weight: bold;
  	//color: #2c3e50;
  	text-decoration: none;
  	//border: 1px solid white;
}

#nav a:hover, #navRight a: hover{
	color: #2a7553;
}

#nav a.router-link-exact-active {
  	color: #42b983;
}


#navRight > * {
	font-weight: bold;
  	color: #2c3e50;
  	text-decoration: none;
}
</style>