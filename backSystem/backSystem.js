import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import.meta.env.VITE_API_URL 取到当前环境的值
// 我们传入 createApp 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。

createApp(App).mount('#app')
