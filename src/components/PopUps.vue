<template>
  <div v-if="!checkPopup('')" class="popups" @click="close">
    <loginPopup v-if="checkPopup('login')" />
    <success-popup v-if="checkPopup('Success')" />
    <profile-popup :user="getUser" v-if="checkPopup('updateMe')" />
    <logout-popup v-if="checkPopup('logout')" />
  </div>
</template>

<script>
import loginPopup from "./loginPopup.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import SuccessPopup from "./SuccessPopup.vue";
import ProfilePopup from "./ProfilePopup.vue";
import LogoutPopup from "./LogoutPopup.vue";
export default {
  computed: {
    ...mapGetters(["getCurPopup", "getUser"])
  },
  components: { loginPopup, SuccessPopup, ProfilePopup, LogoutPopup },
  methods: {
    ...mapActions(["getMe"]),
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
