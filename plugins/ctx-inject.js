// context 上下文对象
// inject 同时将方法注入到 context 和 vue 实例 和 store 中
export default ({ app }, inject) => {
  app.myContextFunction = str => console.log('context', str);
}