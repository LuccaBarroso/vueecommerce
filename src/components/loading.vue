<template>
  <div>
    <p>Loading...</p>
    <v-icon class="rotation" style="color: white;" small>fas fa-spinner</v-icon>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
}
p {
  color: white;
  padding: 10px;
  font-size: 18px;
}
.rotation {
  animation: rotation 2s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
