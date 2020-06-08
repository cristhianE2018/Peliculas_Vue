import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  icons: {
    iconfont: 'md',
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
