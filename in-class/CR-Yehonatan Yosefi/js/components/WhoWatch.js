export default {
    template: `
        <section class="whos-watching" v-if="isOnList">
            <h2>Who's watching?</h2>
            <ul class="flex">
                <li class="person" v-for="user in users" v-bind:key="user.id" @click="selectUser(user.id)">
                    <WhoWatchPreview v-bind:user="user"/>
                    <button @click.stop="removeUser(user.id)">X</button>
                    <button @click.stop="updateUser(user.id)">Update</button>
                </li>
            </ul>
            <button @click="addUser">Add</button>
        </section>
        <section class="whos-watching center" v-else>
            <!-- <WhoWatchPreview v-bind:user="currUser"/> -->
            <!-- <br> -->
            <WhoWatchListPreview v-bind:list="list" v-bind:user="currUser" @changeShow="changeShow"/>
            <button @click="switchUser">Switch User</button>
        </section>
    `,
    data() {
        return {
            users: [
                { id: 'p101', name: 'Brian', tvShows: ['Familly Guy', 'The Simpsons', 'Southpark'], },
                { id: 'p102', name: 'Groovy User', tvShows: ['Survivor', 'The Witcher', 'To Be With Her 4'], },
                { id: 'p103', name: 'Parents', tvShows: ['1 vs 100', 'Game of Thrones', 'You'], },
                { id: 'p104', name: 'Walter Jr.', tvShows: ['Family Guy', 'Rick and Morty', 'The Good Place'], },
                { id: 'p105', name: 'For the Wife', tvShows: ['Dora the Explorer', 'Cocomelon', 'Happy Tree Friends'], },
            ],
            isOnList: true,
            list: 'placeholder',
            currUser: null,
        }
    },
    methods: {
        removeUser(userId) {
            const idx = this.users.findIndex(user => user.id === userId)
            this.users.splice(idx, 1)
        },
        addUser() {
            const id = Date.now() % 1000
            const newUser = {
                id: `p${id}`,
                name: `User - ${id}`,
                tvShows: [
                    this.addTvShow('Dora the Explorer', 'Cocomelon'), 
                    this.addTvShow('Happy Tree Friends','Family Guy'),
                    this.addTvShow('Game of Thrones','Survivor')
                ]            }
            this.users.push(newUser)
        },
        addTvShow(tv1,tv2){
            let randomNum = Math.ceil(Math.random() * 10)
            return randomNum % 2 === 0 ? tv1 : tv2
        },
        updateUser(userId) {
            const user = this.users.find(user => user.id === userId)
            const name = prompt('Name?')
            user.name = name
        },
        selectUser(userId) {
            const user = this.users.find(user => user.id === userId)
            this.list = user.tvShows
            this.currUser = user
            this.switchUser()
        },
        switchUser() {
            this.isOnList = !this.isOnList
        },
        changeShow({id,idx}){
            const user = this.users.find(user => user.id === id)
            const name = prompt('what the show name')
            user.tvShows[idx] = name
        }
    },
}