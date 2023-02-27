export default {
    props: ['book'],
    template: `
        <article class="book-preview">
            <h3>{{ book.title }}</h3>
            <img :src="book.thumbnail" alt="">

        </article>
    `,
}