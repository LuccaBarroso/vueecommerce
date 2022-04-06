<template>
  <ul class="OrdersDisplay">
    <li v-for="order in orders" :key="order.id">
      <p>{{ order.date }}</p>
      <p>{{ order.address }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    orders: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
p {
  color: white;
}
</style>
