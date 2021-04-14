export default {
    props:{
        level:{
            type:Number,
            default:1
        }
    },
    render:function(creatElement){
        window.console.log(this.$slots)
        return creatElement(
            "h"+this.level,
            this.$slots.default
        );
    }
}