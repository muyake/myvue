// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'
import ue from '../page/uepage.vue'
import jq from '../page/jq.vue'
// 配置路由
export default [{
	path: '/',
	component: index
}, {
	path: '/content/:id',
	component: content
},, {
    path: '/jq',
    component: jq
} ]