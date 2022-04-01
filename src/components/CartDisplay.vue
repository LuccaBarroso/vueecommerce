<template>
  <div>
    <table class="cart" id="cart">
      <tr>
        <th style="width: 40%">Product</th>
        <th style="width: 20%">Quantity</th>
        <th style="width: 20%">Price</th>
        <th style="width: 20%">Total</th>
      </tr>
      <template v-for="item in cart">
        <cart-item :key="item.name" :item="item"></cart-item>
      </template>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="totalPrice">{{ getCartTotal.toFixed(2) }}$</td>
      </tr>
    </table>

    <div class="buttonArea">
      <input type="text" placeholder="Address" v-model="address" />
      <button v-on:click="doAction">
        Place Order
      </button>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { CartItem },
  data() {
    return {
      address: ""
    };
  },
  methods: {
    ...mapActions(["makeOrder"]),
    doAction() {
      this.makeOrder({
        address: this.address,
        cart: this.cart
      });
    }
  },
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
    input {
      width: 100%;
      height: 50px;
      border: none;
      background-color: #c4c4c4;
      font-size: 1.4ch;
      padding: 0 10px;
      margin: 10px;
      &:focus {
        outline: none;
      }
    }

    button {
      background-color: #96031a;
      color: #fff;
      width: 60%;
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
