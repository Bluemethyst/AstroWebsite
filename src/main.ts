import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

/*document.getElementById('showIframe').addEventListener('click', function () {
    var iframe = document.getElementById('calendar-iframe')
    var button = document.getElementById('showIframe')
    if (iframe.style.opacity === '1') {
        iframe.style.opacity = '0'
        setTimeout(function () {
            iframe.style.display = 'none'
        }, 1000) // Timeout is needed to ensure the transition is applied correctly
        button.innerHTML = 'Calendar ▼' // Change the arrow to point down
    } else {
        iframe.style.display = 'block'
        setTimeout(function () {
            iframe.style.opacity = '1'
        }, 100)
        button.innerHTML = 'Calendar ▲' // Change the arrow to point up
    }
})*/
