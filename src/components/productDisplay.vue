<template>
  <ul class="products">
    <li v-for="item in products" :key="item.id">
      <product-display-item v-bind="item" />
    </li>
  </ul>
</template>

<script>
import productDisplayItem from "./productDisplayItem.vue";
export default {
  components: { productDisplayItem },
  data() {
    return { products: this.$store.state.products };
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding-top: 50px;
  width: 100%;
  background-color: #1b1b1e;
  display: flex;
  flex-direction: column;
}
</style>
