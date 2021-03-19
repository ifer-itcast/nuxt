<template>
  <div>
  会插入到 Nuxt 占位符
  </div>
</template>

<script>
export default {
  layout(context) {
    context.app.myContextFunction('服务端~~~')
    return 'blog/index'
  },
  asyncData({ app }) {
    app.myContextFunction('asyncData~~')
  },
}
</script>