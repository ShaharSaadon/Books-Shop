import { bookService } from '../services/book.service.js'
import { eventBusService } from '../services/event-bus.service.js'

import BookFilter from '../cmps/BookFilter.js'
import BookList from '../cmps/BookList.js'

export default {
    template: `
        <section class="book-index">
        <RouterLink :to="'/books/edit/'">Edit</RouterLink>
            <BookFilter @filter="setFilterBy"/>
            <BookList :books="filteredBooks" 
                v-if="books"
                @remove="removeBook"/>


        </section>
    `,
    data() {
        return {
            books: [],
            filterBy: {maxPrice:250},
        }
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId)
                .then(() => {
                    const idx = this.books.findIndex(book => book.id === bookId)
                    this.books.splice(idx, 1)
                    eventBusService.emit('show-msg', { txt: 'Book Removed', type: 'success' })
                }).catch(err =>{
                    eventBusService.emit('show-msg', {txt: 'Book Removed Failed', type: 'error'})
                })
        },
        setFilterBy(filterBy) {
            this.filterBy=filterBy
        }
    },
    computed: {
        filteredBooks() {
            const regex = new RegExp(this.filterBy.title, 'i')
            return (this.books.filter(book => regex.test(book.title))
                .filter(book => book.listPrice.amount<this.filterBy.maxPrice))
        }
    },
    created() {
        bookService.query()
            .then(books => this.books = books)
    },
    components: {
        BookList,
        BookFilter,
    }
}