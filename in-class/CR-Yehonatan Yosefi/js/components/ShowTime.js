export default {
    template: `
            <div v-bind:class="bgColor"  v-on:click="changeBg">
                <img v-bind:src="seasonImg">
                <br>
                <h2>{{ time.toLocaleTimeString() }}</h2>
            </div>
    `,
    data() {
        return {
            time: new Date(Date.now()),
            bgColor: 'light-bg',
            txt:'Working',
            intervalId:null
        }
    },
    methods: {
        changeBg() {
            this.bgColor = (this.bgColor === 'light-bg') ? 'dark-bg' : 'light-bg'
        }
    },
    computed: {
        seasonImg() {
            const month = new Date(Date.now()).getMonth()
            if (3 <= month && month <= 5) {
                return '../../img/spring.png';
            }
            if (6 <= month && month <= 8) {
                return '../../img/summer.png';
            }
            if (9 <= month && month <= 11) {
                return '../../img/autumn.png';
            }
            return '../../img/winter.png';
        },
    },
    created() {
        this.intervalId = setInterval(() => {
            console.log(this.txt);
            this.time = new Date(Date.now())
        }, 1000)
    },
    unmounted(){
        this.txt = 'Wasting Resources'
        clearInterval(this.intervalId) 
    }
}
