export default {
    props: {
        level: {
            type: Number,
            default: 1
        }
    },
    render: function (h) {
        window.console.log(this.$slots)
        const Tag = `h${this.level}`
        return <Tag>{this.$slots.default}</Tag>;
    }
}