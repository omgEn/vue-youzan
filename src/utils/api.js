// 存放所有的接口文档,
// 1 获取后端数据
// 2 vuex
import fetch from './fetch.js';

// 用于获取商品列表
export function fetchGoodList(params) {
  // 返回Promise对象
  return fetch({
    method: 'GET',
    params: params,
    url: '/youzan/getGoodList',
  });
}

// 登录接口
export function fetchLogin(data) {
  return fetch({
    method: 'POST',
    data: data,
    url: '/youzan/login',
  });
}

//dashboard,改直接调用store
export function dashboard() {}

export default {
  fetchGoodList,
  fetchLogin,
  dashboard,
};
