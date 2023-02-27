const { createApp } = Vue

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'


import MissBook from './pages/MissBook.js'
import AboutPage from './pages/AboutPage.js'
import HomePage from './pages/HomePage.js'



const options = {
    template: `
    
        <section class="main-container main-layout">
            <AppHeader @setRoute="route = $event"/>
            <main class="router-view">
                <HomePage v-if="route === 'HomePage'"/>
                <MissBook v-else-if="route === 'MissBook'"/>
                <AboutPage v-else-if="route === 'AboutPage'"/>
            </main>
            <AppFooter />
        </section>
    `,
    data() {
        return {
            route: 'MissBook',
        }
    },
    components: {
        MissBook,
        AppHeader,
        AppFooter,
        AboutPage,
        HomePage,
        
    }
}
const app = createApp(options)
app.mount('#app')
