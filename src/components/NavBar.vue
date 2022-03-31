<template>
  <div class="topbar">
    <div class="logo"><h1>SodaCola</h1></div>
    <div class="spa"></div>
    <nav-bar-btn v-if="!isCartEmpty" icon="shopping-cart" id="cart" />
    <nav-bar-btn v-if="isLogged" icon="sign-out-alt" v-on:clicked="signOut" />
    <nav-bar-btn v-if="!isLogged" icon="sign-in-alt" v-on:clicked="signIn" />
    <nav-bar-btn v-if="isLogged" icon="user" v-on:clicked="profile" />
  </div>
</template>

<script>
import NavBarBtn from "./NavBarBtn.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { NavBarBtn },
  methods: {
    ...mapMutations(["setPopup"]),
    signOut() {
      alert("todo");
    },
    signIn() {
      this.setPopup("login");
    },
    async profile() {
      this.setPopup("updateMe");
    }
  },
  computed: {
    ...mapGetters(["isCartEmpty", "isLogged"])
  }
};
</script>

<style lang="scss" scoped>
.topbar {
  z-index: 1;
  display: flex;
  width: 100vw;
  position: fixed;
  top: 0%;
  background-color: #27272b;
  padding: 0 15px 0 10px;
  align-items: center;
  .spa {
    width: 100%;
  }
  .logo {
    color: white;
    font-family: "Birthstone Bounce", cursive;
    font-weight: 400;
    font-size: 15px;
  }
}
</style>
