import AboutPage from './pages/AboutPage.js'
import HomePage from './pages/HomePage.js'
import MissBook from './pages/MissBook.js'
import BookEdit from './pages/BookEdit.js'
import BookDetails from './pages/BookDetails.js'

const { createRouter, createWebHashHistory } = VueRouter
const options = {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/books',
            component: MissBook
        },
        {
            path: '/about',
            component: AboutPage
        },
        {
            path: '/books/:bookId',
            component: BookDetails
        },
        {
            path: '/books/edit/:bookId?',
            component: BookEdit
        },
        {
            path: '/:cathAll(.*)',
            component: MissBook
        },
    ]
}

export const router = createRouter(options)