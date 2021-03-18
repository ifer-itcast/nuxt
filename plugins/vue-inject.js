import Vue from 'vue'

Vue.prototype.$myInjectedFunction = str => console.log('绑定到 Vue 实例中的参数', str);