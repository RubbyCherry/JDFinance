import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router.js'

new Vue({
    router:VueRouter,
    render: h=> h(App)
}).$mount('#app')