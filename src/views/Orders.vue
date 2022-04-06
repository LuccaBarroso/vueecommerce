<template>
  <div class="orders">
    <div class="content">
      <p class="hello">Hello, {{ getName }}</p>
      <p class="ordersText">These are your orders:</p>
      <orders-display :orders="getOrders" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import OrdersDisplay from "../components/OrdersDisplay.vue";
import { mapGetters } from "vuex";

export default {
  components: { Footer, OrdersDisplay },
  computed: {
    ...mapGetters(["getUser", "getName", "getOrders"])
  },
  created() {
    console.log(this.getUser);
  }
};
</script>
<style scoped lang="scss">
.orders {
  width: 100% !important;
  justify-content: center;
  align-items: center;
  .content {
    align-self: center;
    padding-top: 55px;
    width: 80vw;
    max-width: 600px;
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
  background-color: #1b1b1e;
}
</style>
