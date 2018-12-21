import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
// Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn';

const app = new Vue({
    ...App
})
app.$mount()
