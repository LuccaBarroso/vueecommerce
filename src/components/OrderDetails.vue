<template>
  <div class="OrderDetails">
    <div class="separation"></div>
    <p>Ordered on {{ getCurOrder().date }}</p>
    <table class="orderD" id="orderD">
      <tr>
        <th style="width: 40%">Product</th>
        <th style="width: 20%">Quantity</th>
        <th style="width: 20%">Price</th>
        <th style="width: 20%">Total</th>
      </tr>
      <template v-for="item in getCurOrder().products" :id="item">
        <cart-item
          :key="item._id"
          :item="{ name: item.product, quantity: item.quantity }"
        ></cart-item>
      </template>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td class="totalPrice">{{ calcTotal() }}$</td>
      </tr>
    </table>

    <p>Address to be delivered is {{ getCurOrder().address }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import cartItem from "./CartItem.vue";

export default {
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  components: { cartItem },
  computed: {
    ...mapGetters(["getCurOrderBeeingViewed", "getProductInfoByName"])
  },
  methods: {
    getCurOrder() {
      return this.orders[this.getCurOrderBeeingViewed];
    },
    calcTotal() {
      let total = 0;
      this.getCurOrder().products.forEach(item => {
        total +=
          item.quantity *
          this.getProductInfoByName(item.product).price.toFixed(2);
      });
      return total.toFixed(2);
    }
  }
};
</script>

<style scoped lang="scss">
.OrderDetails {
  width: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  p {
    color: #fff;
    width: 100%;
    text-align: start;
    padding: 0 10px;
  }
  .separation {
    margin: 30px 0 30px;
    width: 100%;
    height: 1px;
    background-color: #fff;
  }
  .orderD {
    width: 100%;
    color: white;
    th {
      background-color: #27272b;
      padding: 1.5vw;
      border: 9px solid #1b1b1e;
    }
  }
}
</style>
