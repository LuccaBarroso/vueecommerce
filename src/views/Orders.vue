<template>
  <div class="home">
    <Footer />
    <p>{{ getUser }}</p>
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import { mapGetters } from "vuex";

export default {
  components: { Footer },
  computed: {
    ...mapGetters(["getUser"])
  },
  created() {
    console.log(this.getUser);
  }
};
</script>
<style>
.home {
  background-color: #1b1b1e;
}
</style>
