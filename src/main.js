// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import VueJsonp from 'vue-jsonp'
import md5 from 'js-md5'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueJsonp);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import moment from 'moment';
Vue.prototype.moment = moment;
Vue.prototype.getTime = time => moment(time)
.startOf('minute')
.fromNow()
.replace(/hours?/, '小时')
.replace('ago', '前')
.replace(/days?/, '天')
.replace(/minutes?/, '分钟')
.replace(/\ban?/, '1')
.replace(/months?/, '个月')
.replace(/\byears?/, '年')
.replace(/\s/g, '')
.replace('fewseconds','分钟');

