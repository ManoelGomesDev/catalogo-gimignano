<template>
  <div id="app" class="container-fluid">
    <div class="container">
    <div class="row">
    <div class="col-sm-12 col-md-12 m-4" align="center">
      <img alt=" logo" class="logo" src="./assets/logoGmig.svg" />
      <h1>Nossa Coleção</h1>
</div>
    </div>
    </div>
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./views/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
body{
  background-color: #f4f5ff ;
}
.logo {
  height: 100px;
  margin-bottom: 20px;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #000d9c;
}
</style>
