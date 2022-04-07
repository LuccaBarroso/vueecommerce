<template>
  <div class="footer">
    <p>
      This is not a real store, just a demo for
      <a href="https://www.luccabarroso.com.br/"> my portfolio </a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  padding-top: 20px;
  width: 100%;
  height: 2.5rem;
  background-color: #1b1b1e;
  margin: 0 auto;
  p,
  a {
    color: white;
    text-decoration: none;
  }
  a {
    color: #96031a;
    font-weight: 600;
  }
  a:hover {
    color: white;
  }
}
</style>
