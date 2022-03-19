<template>
  <div class="home">
    <product-display />
    <separation-bar v-if="!isCartEmpty" />
    <cart-display v-if="!isCartEmpty" />
    <Footer />
  </div>
</template>

<script>
import CartDisplay from "../components/CartDisplay.vue";
import productDisplay from "../components/productDisplay.vue";
import SeparationBar from "../components/SeparationBar.vue";
import Footer from "../components/footer.vue";
import { mapGetters } from "vuex";
// import separationBar from "../components/SeparationBar.vue";

export default {
  components: { productDisplay, SeparationBar, CartDisplay, Footer },
  computed: {
    ...mapGetters(["isCartEmpty"])
  }
};
</script>
<style>
.home {
  background-color: #1b1b1e;
}
</style>
