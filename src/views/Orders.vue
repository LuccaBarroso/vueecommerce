<template>
  <div class="orders">
    <div class="content">
      <p class="hello">Hi {{ getName }},</p>
      <p class="ordersText">These are your orders:</p>
      <orders-display :orders="getOrders" />
      <order-details
        v-if="getCurOrderBeeingViewed !== '-1'"
        :orders="getOrders"
      />
    </div>
  </div>
</template>

<script>
import OrdersDisplay from "../components/OrdersDisplay.vue";
import { mapGetters } from "vuex";
import OrderDetails from "../components/OrderDetails.vue";

export default {
  components: { OrdersDisplay, OrderDetails },
  computed: {
    ...mapGetters([
      "getUser",
      "getName",
      "getOrders",
      "getCurOrderBeeingViewed"
    ])
  },
  created() {
    console.log(this.getUser);
  }
};
</script>
<style scoped lang="scss">
.orders {
  width: 100% !important;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #1b1b1e;
  .content {
    padding-top: 55px;
    width: 80vw;
    max-width: 800px;
    p {
      color: #fff;
      text-align: left;
    }
    .hello {
      padding: 10px 0 0 20px;
    }
    .ordersText {
      padding: 10px 0 0 30px;
    }
  }
}
</style>
