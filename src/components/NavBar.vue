<template>
  <div class="topbar">
    <div class="logo"><h1>SodaCola</h1></div>
    <v-divider></v-divider>
    <nav-bar-btn icon="shopping-cart" />
    <nav-bar-btn icon="sign-out-alt" />
    <nav-bar-btn icon="sign-in-alt" />
    <nav-bar-btn icon="user" />
  </div>
</template>

<script>
import NavBarBtn from "./NavBarBtn.vue";
export default {
  components: { NavBarBtn },
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
  .logo {
    color: white;
    font-family: "Birthstone Bounce", cursive;
    font-weight: 400;
    font-size: 15px;
  }
}
</style>
