<template>
  <div class="order">
    <div class="data">
      <p class="date">{{ order.date }}</p>
      <p>{{ order.tamanho }} products</p>
    </div>
    <button @click="changeCurOrder" class="info">
      <v-icon style="color: white;" small class="icons"
        >fas fa-{{ isCurOrder() ? "minus" : "plus" }}</v-icon
      >
      <p>Info</p>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getCurOrderBeeingViewed"])
  },
  methods: {
    ...mapMutations(["setCurOrderBeeingViewed"]),
    changeShow() {
      this.show = !this.show;
    },
    isCurOrder() {
      return this.order.id === this.getCurOrderBeeingViewed;
    },
    changeCurOrder() {
      console.log("click");
      if (this.isCurOrder()) {
        this.setCurOrderBeeingViewed("-1");
      } else {
        this.setCurOrderBeeingViewed(this.order.id);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.order {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #27272b;
  height: 75px;
  margin: 10px;
  .data,
  .info {
    width: 50%;
  }
  .data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    p {
      text-align: left;
      padding-left: 20px;
      padding-top: 10px;
    }
    p.date {
      font-size: 0.9em;
      padding-top: 0;
    }
  }
  .info {
    background-color: #96031a;
    padding: 10px;
    border-radius: 25px;
    width: auto;
    margin-right: 20px;
    display: flex;
    p {
      display: none;
      margin-left: 5px;
    }
  }
  p {
    color: white;
  }
}
.info:hover {
  p {
    display: flex;
  }
}
</style>
