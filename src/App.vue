<template>
  <v-app class="app">
    <top-bar />
    <div class="content"></div>
  </v-app>
</template>

<script>
import topBar from "./components/topBar.vue";
export default {
  components: { topBar },
  name: "App",
};
</script>

<style lang="scss">
.app {
  width: 100vw;
  .content {
    background-color: #1b1b1e;
    * {
      color: white;
    }
  }
}
</style>
