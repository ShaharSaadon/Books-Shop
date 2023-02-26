export default {
    props: ['list','user'],
    template: `
            <img src="img/avatar.png">
            <br>
            {{user.name}}
        <ul>
            <li class="tv-show" v-for="tv,idx in list" v-bind:key="tv" @click="$emit('changeShow',{id:user.id,idx:idx})">
                {{idx+1}}. {{tv}}
            </li>
        </ul>
    `,
}