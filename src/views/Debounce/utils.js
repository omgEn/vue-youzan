const utils = {
  // 防抖：在事件被触发n秒后在执行回调，若在这n秒内又被触发，则重新计时
  debounce: function(fn, delay) {
    let timer = null;
    return function(...args) {
      let context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    };
  },
  // 节流:规定在一个单位时间内，只能触发一次函数。若这个单位时间内触发多次，则只有一次生效。
  throttle: function(fn, delay) {
    let flag = true,
      timer = null;
    return function(...args) {
      let context = this;
      if (!flag) return;
      flag = false;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
        flag = true;
      }, delay);
    };
  },
};

export default utils;
