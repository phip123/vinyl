import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


Vue.use(Buefy)

Vue.directive('tagify', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
