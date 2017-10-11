// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'
import ue from '../page/uepage.vue'
import jq from '../page/jq.vue'
import ArticleCom from '@/page/ArticleCom';
import SideSec from '@/page/SideSec';
import UserCom from '@/page/UserCom';
// 配置路由
export default [{
	path: '/',
	name: 'RootPath',
	components: {
		main: index,
	},
}, {
	path: '/topic/:id',
	name: 'ArticleRoute',
	components: {
		main: ArticleCom,
		side: SideSec,
	},
}, {
	path: '/content/:id',
	component: content
}, {
	path: '/jq',
	component: jq
}, {
	path: '/user/:name',
	name: 'UserRoute',
	components: {
		main: UserCom,
	},
}, {
	path: '/user/:name',
	redirect: '/user:name',
}]