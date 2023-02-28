import { eventBusService } from "../services/event-bus.service.js"

export default {
    template: `
        <div class="user-msg" :class="msg.type" v-if="msg">
        <button @click="msg=null">x</button>    
        {{msg.txt}}
        </div>
    `,

    data(){
        return{
            msg:null
        }
    },
    created(){
       this.unsubscribe = eventBusService.on('show-msg', (msg) =>{
            console.log('Msg=',msg)
            this.msg=msg
            setTimeout(() => {
                this.msg=null
            }, 2500);
        })
    },
    unmounted() {
        //This code will never run because user-msg rendered all over the app. "she never goes"
        this.unsubscribe()
    },
}