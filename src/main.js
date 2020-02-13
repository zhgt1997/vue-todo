import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 插件
import './plugins/ant-design-vue.js'; // antd
import NProgress from 'nprogress'; // 顶部进度条
import 'nprogress/nprogress.css'; // 顶部进度条样式
import './utils.js';  // 公共 js
import './app.less';  // 公共 css

Vue.config.productionTip = false;

NProgress.configure({
  easing: 'ease', // 动画方式（属性同 css 一样）    
  speed: 999, // 递增进度条的速度    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3, // 初始化时的最小百分比
  showSpinner: false, // 是否显示加载ico   
});

// 路由进入前
router.beforeEach((to, from, next) => {
  // console.log(to.path); // 默认路径
  NProgress.start(); // 调用进度条

  next(); // 必须，没有 next() 页面是不会跳转的
});
// 路由进入后
router.afterEach(() => {
  NProgress.done(); // 关闭进度条
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')