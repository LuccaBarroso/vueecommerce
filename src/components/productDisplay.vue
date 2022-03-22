<template>
  <ul class="products">
    <li v-for="item in getProducts" :key="item.id">
      <product-display-item v-bind="item" />
    </li>
  </ul>
</template>

<script>
import productDisplayItem from "./productDisplayItem.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getProducts"])
  },
  components: { productDisplayItem }
};
</script>

<style lang="scss" scoped>
.products {
  padding-top: 50px;
  width: 100%;
  background-color: #1b1b1e;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
