export default {
    template: `
        <section class="book-filter">
            <input 
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search"
                type="text" />
            <input 
                v-model="filterBy.maxPrice"
                @input="filter" 
                placeholder="Max Price"
                type="number" />
        </section>
    `,
    data() {
        return {
            filterBy: { title: '', maxPrice: 250 },
        }
    },
    methods: {
        filter(){
            this.$emit('filter', this.filterBy)
        }
    }
}