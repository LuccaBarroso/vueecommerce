<template>
  <div v-if="!checkPopup('')" class="popups" @click="close">
    <loginPopup v-if="checkPopup('login')" />
  </div>
</template>

<script>
import loginPopup from "./loginPopup.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCurPopup"])
  },
  components: { loginPopup },
  methods: {
    ...mapMutations(["setPopup"]),
    close: function() {
      this.setPopup("");
    },
    checkPopup(name) {
      return this.getCurPopup == name;
    }
  }
};
</script>

<style scoped lang="scss">
.popups {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
