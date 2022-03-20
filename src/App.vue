<template>
  <div id="app">
    <PopUps />
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import PopUps from "./components/PopUps.vue";
import { mapActions } from "vuex";

export default {
  components: { NavBar, PopUps },
  methods: {
    ...mapActions(["fetchProducts"])
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  scroll-behavior: smooth;
}
</style>
