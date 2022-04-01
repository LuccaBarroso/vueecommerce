<template>
  <div v-if="!checkPopup('')" class="popups" @click="close">
    <loginPopup v-if="checkPopup('login')" />
    <success-popup v-if="checkPopup('Success')" />
    <profile-popup :user="getUser" v-if="checkPopup('updateMe')" />
    <logout-popup v-if="checkPopup('logout')" />
    <error-popup v-if="checkPopup('erro')" />
  </div>
</template>

<script>
import loginPopup from "./loginPopup.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import SuccessPopup from "./SuccessPopup.vue";
import ProfilePopup from "./ProfilePopup.vue";
import LogoutPopup from "./LogoutPopup.vue";
import ErrorPopup from "./ErrorPopup.vue";
export default {
  computed: {
    ...mapGetters(["getCurPopup", "getUser", "getError"])
  },
  components: {
    loginPopup,
    SuccessPopup,
    ProfilePopup,
    LogoutPopup,
    ErrorPopup
  },
  methods: {
    ...mapActions(["getMe"]),
    ...mapMutations(["setPopup", "setError"]),
    close: function() {
      this.setPopup("");
      this.setError("");
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
