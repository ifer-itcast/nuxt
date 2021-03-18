<template>
  <div class="container">
    <div>
      x
    </div>
  </div>
</template>

<script>
export default {
  // 引用的是 layouts/blog.vue
  // layout() {
  //   return 'blog/index'
  // }
  data() {
    return {
      title: '这是首页标题'
    }
  },
  head() {
    return {
      title: this.title,
      bodyAttrs: {
        style: 'background-color: #fff'
      },
      meta: [
        {
          // 指定 hid 会覆盖 nuxt.config.js 中同名的 meta 配置
          hid: 'description',
          name: 'description',
          content: 'nuxt.js 技术栈'
        }
      ]
    }
  }
}
</script>
