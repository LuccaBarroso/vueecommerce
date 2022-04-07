<template>
  <div class="OrderDetails">
    <div class="separation"></div>
    <p>Ordered on {{ getCurOrder().date }}</p>
    <div>
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
          <td class="totalPrice">100$</td>
        </tr>
      </table>
    </div>
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
    ...mapGetters(["getCurOrderBeeingViewed"])
  },
  methods: {
    getCurOrder() {
      console.log("cur Order");
      console.log(this.orders[this.getCurOrderBeeingViewed]);
      return this.orders[this.getCurOrderBeeingViewed];
    }
  }
};
</script>

<style scoped lang="scss">
.separation {
  width: 100%;
  height: 1px;
  background-color: #fff;
}
</style>
