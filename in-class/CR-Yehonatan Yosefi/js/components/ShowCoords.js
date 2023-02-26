export default {
    props:['x','y'],
    template: `
        <h5>X:{{x}},Y:{{y}}px</h5>
    `,
    data() {
        return {
            // y: 1,
            // x: 1,
        }
    },
    methods: {
        // mouseMove(ev) {
        //     this.x = ev.clientX
        //     this.y = ev.clientY
        // }
    },
    created() {
        // document.body.addEventListener('mousemove', this.mouseMove)
    }
}