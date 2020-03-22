import Vue from 'vue'
import Vuex from 'vuex'
import good from './modules/good'
import user from './modules/user'
import shop from './modules/shop'

//注册
Vue.use(Vuex);

const store = new Vuex.Store({
	modules:{
		good,
		user,
		shop
	},
	state:{},
	getters:{},
	mutations:{},
	actions:{}
});

/* 
state原始数据
通过mutations操作state,
getters过滤state
actions通过commit操作mutations
 */

export default store