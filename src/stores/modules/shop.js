// dashborad
const shopStore = {
  namespaced: true,
  state: {
    dashboard: {
      allOrders: 0, //支付订单数
      yesterdayOrders: 0,
      payment: 0, //支付金额
      yesterdayPayMent: 0,
      watchNum: 0, //浏览量
      yesterdayWatchNum: 0,
      monthGoal: 0, //本月目标
      range: 0, //完成进度
      balance: 0, //余额
      avaiableBalance: 0, //可用余额
      pendingSettle: 0, //待结算
    },
  },
  getters: {},
  mutations: {},
  actions: {},
};

/* 
state原始数据
通过mutations操作state,
getters过滤state
actions通过commit操作mutations
 */

export default shopStore;
