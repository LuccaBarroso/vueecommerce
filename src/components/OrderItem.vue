<template>
  <div class="order">
    <div class="data">
      <p class="date">{{ order.date }}</p>
      <p>{{ order.tamanho }} products</p>
    </div>
    <div class="info">
      <button @mouseover="changeShow()" @mouseleave="changeShow()">
        <v-icon style="color: white;" small class="icons" @click="click"
          >fas fa-plus</v-icon
        >
      </button>
      <p v-if="show">Info</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    show: false
  }),
  methods: {
    changeShow() {
      this.show = !this.show;
    },
    click() {
      this.$emit("clicked");
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
    padding: 5px;
    border-radius: 25px;
    width: auto;
    margin-right: 20px;
    display: flex;
    p {
      padding-left: 5px;
      position: relative;
      top: 1px;
    }
  }
  p {
    color: white;
  }
}
</style>
