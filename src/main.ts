import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import MyComponent from './components/MyComponent.vue'
import MyComponent2 from './components/MyComponent2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path:'/', component: MyComponent},
    {path:'/asd', component: MyComponent2},
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
