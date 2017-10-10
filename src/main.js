// 引用 vue 没什么要说的
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 光引用不成，还得使用
Vue.use(VueRouter)
	// 入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue'
// 引用路由配置文件
import routes from './router/index'
// 引用工具文件
import utils from './utils/index.js'
// 将工具方法绑定到全局
Vue.prototype.$utils = utils
	// 使用配置文件规则
const router = new VueRouter({
		routes
	})
	// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

// 跑起来吧
new Vue({
	router,
	el: '#app',
	render: (h) => h(App)
})