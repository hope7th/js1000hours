<template>
    <div>
        name:{{ name ||"--"}}
        <br/>
        <input :value="name" @change="handleChange"></input>
        <br/>
        <br/>
        <div @click="handleDivClick">
            <button @click="handleClick">重置成功</button>
            <button @click.stop="handleClick">重置失败</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Event",
        props:{
            name:String
        },
        data:()=>{
            return {
                name:''
            }
        },
        methods:{
            handleChange(e){
                this.$emit("change",e.target.value)
                // this.name = "000"
                // alert(this.name)
                //当props和dat属性相同时，会优先使用props
            },
            handleDivClick(){
                this.$emit("change","")
            },
            handleClick(e){
            // @click.stop 阻止事件冒泡
            // @click.prevent 阻止事件的默认行为，
            // @keyup.enter 按下enter时，执行
            }
        }
    }
// 子组件中的data数据，不是通过父组件传递的是子组件私有的，是可读可写的。
// 子组件中的所有 props中的数据，都是通过父组件传递给子组件的，是只读的。
</script>


<style scoped>

</style>