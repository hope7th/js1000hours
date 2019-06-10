<template>
    <div>
        {{ name }}
        <br/>
        <button @click="handleChange">change name</button>
        <br/>
        <VNodes :vnodes="slotDefault"></VNodes>
        <br/>
        <VNodes :vnodes="slotTitle"></VNodes>
        <br/>
        <VNodes :vnodes="slotScopeItem({value:'vue'})"></VNodes>
    </div>
</template>

<script>
    export default {
        name: "BigProps",
        components:{
            VNodes:{
                functional:true,
                render:(h,ctx)=>ctx.props.vnodes
                //插槽也可以通过函数式组件的方式传递
            }
        },
        props:{
            name:String,
            onChange:{
                type:Function,
                default:()=>{}
            },
            slotDefault:Array,
            slotTitle:Array,
            slotScopeItem:{
                type: Function,
                default:()=>{}
            }
        },
        methods:{
            handleChange(){
                this.onChange("Hello vue!");
            }
        }
    }
</script>

<style scoped>

</style>