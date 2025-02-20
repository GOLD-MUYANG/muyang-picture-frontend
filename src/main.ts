
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
const app = createApp(App)
import '@/access'
import VueCropper from 'vue-cropper';
import 'vue-cropper/dist/index.css'




app.use(createPinia())
app.use(VueCropper)
app.use(router)
app.use(Antd)
app.mount('#app')

