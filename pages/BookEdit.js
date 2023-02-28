import { bookService } from "../services/book.service.js"
import { eventBusService } from "../services/event-bus.service.js"

export default {
    template: `
        <section class="book-edit">
            <h2>{{(book.id) ? 'Edit' : 'Add'}} a book</h2>
            <form @submit.prevent="save">
                <input type="text" v-model="book.title" placeholder="Book Name">
                <input type="number" v-model.number="book.listPrice.amount">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            book: bookService.getEmptyBook()
        }
    },
    created(){
        console.log('BookEditCreated',this.$route.params)
        const {bookId} = this.$route.params
        if (!bookId) return
        bookService.get(bookId).then(book => this.book=book)
    },
    methods: {
        save() {
            bookService.save(this.book)
                .then(savedBook => {
                    console.log('book saved',savedBook)
                    eventBusService.emit('show-msg', { txt: 'Book Saved', type: 'success' })
                   this.$router.push('/books')
                }).catch(err =>{
                    eventBusService.emit('show-msg', {txt: 'Book Save Failed', type: 'error'})
                })
        }
    }
}