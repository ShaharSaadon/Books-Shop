import { bookService } from "../services/book.service.js"

export default {
    template: `
        <section class="book-edit">
            <h2>Add a book</h2>
            <form @submit.prevent="save">
                <input type="text" v-model="book.title" placeholder="Book Name">
                <!-- <input type="number" v-model.number="car.listPrice.amount"> -->
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            book: bookService.getEmptyBook()
        }
    },
    methods: {
        save() {
            bookService.save(this.book)
                .then(savedBook => {
                    this.book =  bookService.getEmptyBook()
                    this.$emit('book-saved', savedBook)
                })
        }
    }
}