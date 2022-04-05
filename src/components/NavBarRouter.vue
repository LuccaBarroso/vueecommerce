<template>
  <div>
    <router-link
      :to="{ name: 'Orders' }"
      @mouseover="setCurHover(name)"
      @mouseleave="setCurHover('')"
      id="car"
    >
      <v-icon style="color: white;" small class="icons" @click="click"
        >fas fa-{{ icon }}</v-icon
      >
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: {
    icon: { type: String, required: true },
    id: { type: String, required: false },
    name: { type: String, required: false }
  },
  methods: {
    ...mapActions(["scrollToId"]),
    ...mapMutations(["setCurHover"]),
    click() {
      if (this.id) {
        this.scrollToId(this.id);
      } else {
        this.$emit("clicked");
      }
    },
    hover() {
      this.setCurHover("teste");
    },
    leave() {
      this.setCurHover("");
    }
  }
};
</script>

<style lang="scss" scoped>
.icons {
  padding: 15px;
}
button {
  transition: all 0.2s ease-in-out;
}
button:hover {
  transform: scale(1.1);
}
</style>
