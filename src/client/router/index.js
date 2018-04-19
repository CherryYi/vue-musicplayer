import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Music_header from './../components/Music_header'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { name: 'music_header', path: '/music_header', component: Music_header}
  ]
})

export default router