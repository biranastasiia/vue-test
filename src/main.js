import Vue from 'vue'
import App from './App.vue'
import './assets/scss/app.scss'
document.title = 'GoVacation';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
