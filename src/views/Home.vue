<template>
  <div class="home">
    <product-display />
    <separation-bar />
    <cart-display />
  </div>
</template>

<script>
import CartDisplay from "../components/CartDisplay.vue";
import productDisplay from "../components/productDisplay.vue";
import SeparationBar from "../components/SeparationBar.vue";
// import separationBar from "../components/SeparationBar.vue";

export default {
  components: { productDisplay, SeparationBar, CartDisplay },
};
</script>
<style>
.home {
  background-color: #1b1b1e;
}
</style>
