<template>
  <div>
    <button>
      <v-icon style="color: white;" small class="icons"
        >fas fa-{{ icon }}</v-icon
      >
    </button>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.icons {
  padding: 10px;
}
</style>
