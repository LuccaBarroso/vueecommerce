<template>
  <div>
    <table class="cart">
      <tr>
        <th style="width: 40%">Product</th>
        <th style="width: 10%">Quantity</th>
        <th style="width: 20%">Price</th>
        <th style="width: 30%">Total</th>
      </tr>
      <template v-for="item in cart">
        <cart-item :key="item.id" :item="item"></cart-item>
      </template>
    </table>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  components: { CartItem },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  justify-content: center;
  .cart {
    width: 90%;
    color: white;
    th {
      background-color: #27272b;
      padding: 1.5vw;
      border: 9px solid #1b1b1e;
    }
  }
}
</style>
