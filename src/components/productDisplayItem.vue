<template>
  <div class="item">
    <img
      :src="getImgPath()"
      :alt="name"
      :class="{ right: isOdd(), left: !isOdd() }"
    />
    <div class="info" :class="{ odd: isOdd() }">
      <div class="qntbox">
        <div class="qnt">
          <button>-</button>
          <p>0</p>
          <button>+</button>
        </div>
        <div class="total">
          <p>0.00</p>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="price">
        <p>{{ price.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  methods: {
    isOdd: function() {
      return this.id % 2 !== 0;
    },
    getImgPath: function() {
      return require("../assets/" + this.name + ".png");
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  z-index: 0 !important;
  width: 100%;
  padding-bottom: 30vw;
  padding-top: 10vh;
  position: relative;
  .info {
    position: absolute;
    width: 60%;
    height: 15vh;
    background-color: #27272b;
    display: flex;
    padding: 10px;
    justify-content: right;
    .qntbox {
      flex-direction: column;
      padding-top: 6vh;
      .qnt {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
  }
  p {
    color: white;
  }
  img {
    position: absolute;
    z-index: 1 !important;
    width: 50vw !important;
    top: -10vh;
  }
  .left {
    left: 10vw;
  }
  .right {
    right: 10vw;
  }
}
.odd {
  flex-direction: row-reverse;
  right: 0;
}
</style>
