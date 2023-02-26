export default {
    props: ['time'],
    template: `
        <h5>COUNTDOWN</h5>
        <h5>{{ minutes }}
            :
            <span v-bind:class="colorSeconds">{{ seconds }}</span></h5>
    `,
    data() {
        return {
            count: this.time,
            target: Date.now(),
            gInterval:null
        }
    },
    created() {
        this.gInterval = setInterval(() => {
            this.count -= 1000
            if (this.count <= this.target) {
                // this.playSound()
                console.log('done')
                clearInterval(this.gInterval)
                this.$emit('due')
            }
        }, 1000)
    },
    unmounted(){
        clearInterval(this.gInterval)
    },
    methods: {
        playSound() {
            let audio = new Audio(`audio/counter-end.mp3`)
            audio.volume = 0.1
            audio.play()
        },
        due() {
            console.log(`hi`)
        },
    },
    computed: {
        minutes() {
            if (this.count < this.target) return '00'
            const minutes = new Date(Math.round(this.count - this.target)).getMinutes()
            return (''+minutes).padStart(2,'0')
        },
        seconds() {
            if (this.count < this.target) return '00'
            const seconds = new Date(Math.round(this.count - this.target)).getSeconds()
            return (''+seconds).padStart(2,'0')
        },
        colorSeconds() {
            if (this.seconds < 10 && this.minutes === '00') return 'red'
            return ''
        },
    },
}