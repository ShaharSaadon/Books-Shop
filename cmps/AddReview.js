import { bookService } from "../services/book.service.js"
import { eventBusService } from "../services/event-bus.service.js"

export default {
    name: 'AddReview',
    emits: ['add-review'],
    template: `
            <button @click="toShow=true">Add Review</button>
            <div class="add-review" v-if="toShow">
            <p>what do you think about this book?</p>
            <input type="text" v-model="review.fullName">
            1<input type="range" v-model="review.rating" min="0" max="5">5
            <input type="date" v-model="review.readAt">
            <button @click="onAddReview">Post Review</button>
            {{review}}
        </div>
    `,
    data() {
        return {
            review: {
                fullName: '',
                rating: 0,
                readAt: null,
            },
            toShow: false,
        }
    },
    methods: {
        onAddReview() {
            this.$emit('add-review',{...this.review})
            eventBusService.emit('show-msg', { txt: 'Review Sent Successfully', type: 'success' })
            this.toShow=false
        }
    },
}