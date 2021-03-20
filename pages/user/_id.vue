<template>
  <div>详情{{$route.params.id}}</div>
</template>
<script>
export default {
  // 校验请求参数，返回 true 则可以访问此组件
  validate({params}) {
    return /^\d+$/.test(params.id);
  }
}
</script>