import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

/*vue-plyr*/
createApp(App)
  .use(VuePlyr, {
    plyr: {}
  })

const app = createApp(App)

app.use(router)

app.mount('#app')
