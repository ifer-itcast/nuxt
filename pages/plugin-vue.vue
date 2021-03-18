<template>
  <div>

  </div>
</template>
<script>
export default {
  mounted() {
    // 测试：http://localhost:3000/plugin-vue
    this.$myInjectedFunction('hello world');
  }
}
</script>