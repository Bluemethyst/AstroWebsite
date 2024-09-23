<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
    <div class="about">
        <h1>About</h1>
        <p>We are a non profit organisation that loves everything space!</p>
    </div>
    <div class="main-box">
        <h1>Upcoming Events</h1>
        <p>Upcoming events are shown below on the calendar</p>
    </div>
    <button id="showIframe">Calendar ▼</button>
    <iframe
        id="calendar-iframe"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23424242&ctz=Pacific%2FAuckland&showTabs=1&src=bW9odWFvYnNlcnZhdG9yeUBnbWFpbC5jb20&src=ZW4ubmV3X3plYWxhbmQjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
        style="border: solid 1px #424242; display: none; opacity: 0; transition: opacity 1s"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
    ></iframe>
    <footer>
        <p>Author: Petr | Creator: Caleb | Contact: mohuaobservatory@gmail.com</p>
        <a href="https://github.com/Bluemethyst/MohuaObservatory" target="_blank">Website Source</a>
    </footer>
</template>
