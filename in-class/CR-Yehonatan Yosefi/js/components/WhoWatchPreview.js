export default {
    props: ['user'],
    template: `
        <img src="img/avatar.png">
        <br>
        {{user.name}}
    `,
}