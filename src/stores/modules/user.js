import { fetchLogin } from '@/utils/api';
// const data = [];

// 用户信息,很多界面会共用
const userStore = {
  namespaced: true,
  state: {
    userinfo: {
      username: 'user',
    },
  },
  mutations: {
    updateUserinfo(state, payload) {
      state.userinfo = payload;
    },
  },
  actions: {
    // data从前端获取的
    // 调取数据验证用户
    // fetchLogin(data).then(res=>{
    // 	console.log('user module',res);
    // 	store.commit('updateUserinfo',res);
    // }),

    /* userLogin(store,data){
			fetchLogin(data).then(res=>{
				// fetch 已经判断过了
				console.log('user module',res);
				store.commit('updateUserinfo',res);
				// 通过commit修改mutations的函数,mutatioins通过函数修改state
				
				// return new Promise(function(resolve){})
				// callback && callback(res);
				// 可以用一个promise,也可以用callback
			})
		}
		 */
    userLogin(data) {
      return fetchLogin(data);
    },
  },
};

export default userStore;
