import BookPreview from './BookPreview.js'

export default {
    props:['books'],
    template: `
        <section class="book-list">
            <ul class="clean-list">
                <li v-for="book in books" :key="book.id">
                    <BookPreview :book="book"/>
                    <RouterLink :to="'/books/edit/' + book.id">Edit</RouterLink> |
                    <RouterLink :to="'/books/' + book.id">Details</RouterLink> 
                    <button @click="remove(book.id)">x</button>
        

                </li>
            </ul>
        </section>
    `,
    methods: {
        remove(bookId) {
        this.$emit('remove',bookId)},
        showDetails(bookId){
            this.$emit('show-details',bookId)
        },
    },
    components: {
        BookPreview,
    }
}