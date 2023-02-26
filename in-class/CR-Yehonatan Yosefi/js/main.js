const { createApp } = Vue

import ShowTime from './components/ShowTime.js'
import CountDown from './components/CountDown.js'
import WhoWatch from './components/WhoWatch.js'
import WhoWatchPreview from './components/WhoWatchPreview.js'
import WhoWatchListPreview from './components/WhoWatchListPreview.js'
import ShowCoords from './components/ShowCoords.js'

const options = {
    template: `
    <section class="main" @mousemove="mouseMove">
        <header>
            <button v-on:click="changeRoute('show-time')">ShowTime</button>
            <button v-on:click="changeRoute('count-down')">CountDown</button>
            <button v-on:click="changeRoute('who-watch')">WhoWatch</button>
        </header>
        <section class="main-content">
            <section class="show-time" v-if="isRouteOn('show-time')">
                <ShowTime />
            </section>
            
            <section class="show-time" v-if="isRouteOn('count-down')">
                <CountDown v-bind:time="Date.now() + 1000 * 13" />
            </section>  

            <section class="who-watch" v-if="isRouteOn('who-watch')">
                <WhoWatch />
            </section>

            <section class="show-coords">
                <ShowCoords v-bind:x="x" v-bind:y="y"/>
            </section>
        </section>
    </section>
    `,
    data() {
        return {
            route: 'who-watch',
            y: 1,
            x: 1,
        }
    },
    methods: {
        changeRoute(newRoute){
            this.route = newRoute
        },
        isRouteOn(currRoute){
            return this.route === currRoute
        },
        mouseMove(ev) {
            this.x = ev.clientX
            this.y = ev.clientY
        }
    },
    computed: {
    },
}
const app = createApp(options)

app.component('ShowTime', ShowTime)
app.component('CountDown', CountDown)
app.component('WhoWatch', WhoWatch)
app.component('WhoWatchPreview', WhoWatchPreview)
app.component('WhoWatchListPreview', WhoWatchListPreview)
app.component('ShowCoords', ShowCoords)

app.mount('#app')
