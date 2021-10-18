<template>
  <tr>
    <td class="product">
      {{ getProductInfoById(item.productID).name }}
    </td>
    <td>{{ item.qnt }}</td>
    <td>{{ getProductInfoById(item.productID).price.toFixed(2) + "$" }}</td>
    <td>
      {{
        (getProductInfoById(item.productID).price * item.qnt).toFixed(2) + "$"
      }}
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getProductInfoById"]),
  },
};
</script>

<style scoped lang="scss">
.product {
  text-align: left !important;
  padding: 10px 0;
  padding-left: 10px;
}
</style>
