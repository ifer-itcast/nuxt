<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      信息：{{error.message}}
    </h1>
    <h1 v-else>服务器错误</h1>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>