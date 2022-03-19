<template>
  <div>
    <table class="cart">
      <tr>
        <th style="width: 40%">Product</th>
        <th style="width: 20%">Quantity</th>
        <th style="width: 20%">Price</th>
        <th style="width: 20%">Total</th>
      </tr>
      <template v-for="item in cart">
        <cart-item :key="item.id" :item="item"></cart-item>
      </template>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="totalPrice">{{ getCartTotal.toFixed(2) }}$</td>
      </tr>
    </table>

    <div class="buttonArea">
      <div class="spa"></div>
      <button>
        Place Order
      </button>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { CartItem },
  computed: {
    ...mapGetters(["getCartTotal"]),
    cart() {
      return this.$store.state.cart;
    }
  }
};
</script>

<style scoped lang="scss">
div {
  width: 100%;
  display: flex;
  font-size: 2.1ch;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .buttonArea {
    display: flex;
    flex-direction: row;
    width: 90%;
    .spa {
      width: 100%;
    }
    button {
      background-color: #96031a;
      color: #fff;
      width: 80%;
      padding: 10px 0;
      margin: 10px;
    }
  }
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
.totalPrice {
  background-color: #27272b;
  padding: 1vw;
  border: 9px solid #1b1b1e;
}
@media (max-width: 700px) {
  * {
    font-size: 1.7ch;
  }
}
</style>
