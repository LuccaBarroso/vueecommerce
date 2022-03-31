<template>
  <div class="popParent" @click.stop>
    <span class="close" @click="doAction">&times;</span>
    <p>Success</p>
    <button class="bottomBtns" @click="doAction">Ok</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["setPopup"]),
    doAction: function() {
      this.setPopup("");
    }
  }
};
</script>

<style scoped lang="scss">
.popParent {
  background-color: #27272b;
  margin: 25vh auto;
  padding: 20px;
  width: 80%;
  z-index: 2;
  max-width: 550px;
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .topBtns {
    background-color: #1b1b1e;
    padding: 10px 40px;
    position: relative;
    top: -40px;
    color: #fff;
  }
  .bottomBtns {
    align-self: center;
    background-color: #96031a;
    padding: 10px 100px;
    width: 50%;
    position: relative;
    top: 40px;
    color: #fff;
  }

  p {
    color: white;
    padding-right: 5px;
    padding-top: 20px;
  }

  .selected {
    background-color: #27272b;
  }
}
</style>
