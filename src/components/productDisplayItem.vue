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
          <button @click="sub()">
            <v-icon style="color: white;" x-small class="icons"
              >fas fa-minus</v-icon
            >
          </button>
          <p>{{ getCartItemQntById(id) }}</p>
          <button @click="add()">
            <v-icon style="color: white;" x-small class="icons"
              >fas fa-plus</v-icon
            >
          </button>
        </div>
        <div class="total">
          <p>{{ (getCartItemQntById(id) * price).toFixed(2) }}$</p>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="price">
        <p>{{ price.toFixed(2) }}$</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions(["addProduct", "subProduct"]),
    isOdd: function() {
      return this.id % 2 !== 0;
    },
    getImgPath: function() {
      return require("../assets/" + this.name.toLowerCase() + ".png");
    },
    add: function() {
      // console.log("add pressed");
      this.addProduct(this.id);
      // console.log(this.id);
    },
    sub: function() {
      if (this.getCartItemQntById(this.id) != 0) {
        // console.log("sub pressed");
        this.subProduct(this.id);
      }
    }
  },
  computed: {
    ...mapGetters(["getCartItemQntById"])
  }
};
</script>

<style lang="scss" scoped>
.item {
  z-index: 0 !important;
  width: 100%;
  padding-bottom: 35vw;
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
    font-size: 2.1ch;
    .qntbox {
      z-index: 2;
      flex-direction: column;
      padding-top: 6vh;
      .qnt {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button {
          color: white;
          background-color: transparent;
          border: white solid 1px;
          width: 20px;
          height: 20px;
          border-radius: 25px;
          margin: 0 5px;
          line-height: 50%;
          text-align: center;
        }
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
    top: 0;
    filter: drop-shadow(5px 5px 37px #000000);
    max-width: 800px;
    overflow: hidden;
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
@media (max-width: 500px) {
  .item {
    .info {
      width: 80%;
    }
  }
  img {
    margin: 15vw 15vw 0 10vw;
  }
}
@media (max-width: 700px) {
  * {
    font-size: 1.7ch;
  }
}
</style>
