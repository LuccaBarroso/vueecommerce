<template>
  <div class="home">
    <product-display> </product-display>
  </div>
</template>

<script>
import productDisplay from "../components/productDisplay.vue";

export default {
  components: { productDisplay },
  name: "Home",
};
</script>

<style lang="scss" scoped></style>
