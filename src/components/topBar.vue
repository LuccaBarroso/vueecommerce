<template>
  <div class="topbar">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <div class="logo"><h1>SodaCola</h1></div>
    <v-divider></v-divider>
    <top-bar-btn icon="shopping-cart" />
    <top-bar-btn icon="sign-out-alt" />
    <top-bar-btn icon="sign-in-alt" />
    <top-bar-btn icon="user" />
  </div>
</template>

<script>
import topBarBtn from "./topBarBtn.vue";
export default {
  components: { topBarBtn },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@400;500&display=swap");
.topbar {
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
