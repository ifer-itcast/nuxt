<template>
  <div>xx</div>
</template>
<script>
export default {
  // 服务端（Nuxt）
  asyncData({ app }) {
    app.$myAllFunction('asyncData~~~~~~~~~~');
  },
  // 客户端（Vue）
  mounted() {
    this.$myAllFunction('mounted~~~~~~~~~~~');
  }
}
</script>
