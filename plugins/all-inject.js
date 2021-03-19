export default function(context, inject) {
  inject('myAllFunction', str => console.log('注入到 context 和 Vue 实例 和 store 中', str));
}