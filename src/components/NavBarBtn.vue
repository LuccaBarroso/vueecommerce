<template>
  <div>
    <button id="car">
      <v-icon style="color: white;" small class="icons" @click="click"
        >fas fa-{{ icon }}</v-icon
      >
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    icon: { type: String, required: true },
    id: { type: String, required: false }
  },
  methods: {
    ...mapActions(["scrollToId"]),
    click() {
      if (this.id) {
        this.scrollToId(this.id);
      } else {
        this.$emit("clicked");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.icons {
  padding: 10px;
}
</style>
