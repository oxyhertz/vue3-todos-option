import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'

import { clickOutside } from './directives'
import { svgPlugin } from './plugins/svg.plugin'
const app = createApp(App)
app.directive('click-outside', clickOutside)
app.use(svgPlugin)
app.use(router)
app.use(store)
app.mount('#app')
