<template>
  <div class="OrdersDisplay">
    <div v-for="order in orders" :key="order.id">
      <order-item :order="order" />
    </div>
  </div>
</template>

<script>
import OrderItem from "./OrderItem.vue";
export default {
  components: { OrderItem },
  props: {
    orders: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.OrdersDisplay {
  width: 100%;
  display: flex;
  flex-direction: column;
}
p {
  color: white;
}
</style>
