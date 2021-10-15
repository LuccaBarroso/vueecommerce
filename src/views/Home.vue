<template>
  <div class="home">
    <product-display />
    <separation-bar />
  </div>
</template>

<script>
import productDisplay from "../components/productDisplay.vue";
import SeparationBar from "../components/SeparationBar.vue";
// import separationBar from "../components/SeparationBar.vue";

export default {
  components: { productDisplay, SeparationBar },
};
</script>
<style></style>
