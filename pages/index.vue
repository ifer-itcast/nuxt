<template>
  <div class="container">
    <h2>首页标题：{{title}}</h2>
    <ul>
      <li>标题：{{data.title}}</li>
      <li>内容：{{data.content}}</li>
      <li>作者：{{data.author}}</li>
    </ul>
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
  },
  // 加载组件之前服务端会调用
  /* asyncData({$axios}) {
    return $axios.get('https://mock.mengxuegu.com/mock/6054bf950d58b864da03d161/blog-web/test').then(response => {
      const data = response.data.data;
      return { data };
    });
  }, */
  async asyncData({$axios}) {
    const { data: { data } } = await $axios.get('https://mock.mengxuegu.com/mock/6054bf950d58b864da03d161/blog-web/test')
    return { data };
  },
}
</script>
