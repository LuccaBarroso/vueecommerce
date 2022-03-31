<template>
  <tr>
    <td class="product">
      {{ getProductInfoByName(item.name).name }}
    </td>
    <td>{{ item.qnt }}</td>
    <td>{{ getProductInfoByName(item.name).price.toFixed(2) + "$" }}</td>
    <td>
      {{ (getProductInfoByName(item.name).price * item.qnt).toFixed(2) + "$" }}
    </td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getProductInfoByName"])
  }
};
</script>

<style scoped lang="scss">
.product {
  text-align: left !important;
  padding: 10px 0;
  padding-left: 10px;
}
</style>
