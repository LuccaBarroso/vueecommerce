<template>
  <v-app class="app">
    <topbar />
  </v-app>
</template>

<script>
import topbar from "./components/topBar.vue";

export default {
  name: "App",

  components: {
    topbar,
  },
};
</script>

<style>
.app {
  height: 400vh;
  background-color: #1b1b1e;
}
</style>
