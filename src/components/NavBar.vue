<template>
  <div class="topbar">
    <router-link
      style="text-decoration: none; color: inherit;"
      :to="{ name: 'Home' }"
    >
      <div class="logo"><h1>SodaCola</h1></div>
    </router-link>
    <div class="spa"></div>
    <p>{{ this.getCurHover }}</p>
    <nav-bar-btn
      v-if="!isCartEmpty && !isOrders()"
      name="Cart"
      icon="shopping-cart"
      id="cart"
    />
    <nav-bar-btn
      v-if="isLogged"
      name="Sign Out"
      icon="sign-out-alt"
      v-on:clicked="signOut"
    />
    <nav-bar-btn
      v-if="!isLogged"
      name="Sign In"
      icon="sign-in-alt"
      v-on:clicked="signIn"
    />
    <nav-bar-btn
      v-if="isLogged"
      name="Profile"
      icon="user"
      v-on:clicked="profile"
    />
    <nav-bar-router
      v-if="isLogged && !isOrders()"
      name="Orders"
      url="Orders"
      icon="box"
      v-on:clicked="orders"
    />
    <nav-bar-router
      v-if="isLogged && isOrders()"
      name="Cart"
      url="Home"
      icon="shopping-cart"
      v-on:clicked="orders"
    />
  </div>
</template>

<script>
import NavBarBtn from "./NavBarBtn.vue";
import { mapGetters, mapMutations } from "vuex";
import NavBarRouter from "./NavBarRouter.vue";
export default {
  components: { NavBarBtn, NavBarRouter },
  methods: {
    ...mapMutations(["setPopup"]),
    signOut() {
      this.setPopup("logout");
    },
    signIn() {
      this.setPopup("login");
    },
    orders() {
      //go to orders
    },
    async profile() {
      this.setPopup("updateMe");
    },
    isOrders() {
      // console.log(this.$route.path);
      return this.$route.path == "/orders";
    }
  },
  computed: {
    ...mapGetters(["isCartEmpty", "isLogged", "getCurHover"])
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
  p {
    color: white;
    font-size: 1.2em;
    margin: 0;
    width: 100%;
    text-align: right;
    padding: 0 15px;
  }
  .logo {
    color: white;
    font-family: "Birthstone Bounce", cursive;
    font-weight: 400;
    font-size: 15px;
    padding-left: 15px;
  }
}
</style>
