<template>
    <div>
        <slot></slot>
        <slot name="title"></slot>
        <slot name="item" v-bind="username"></slot>
        <div @click="changeName">kssssk</div>
    </div>
</template>

<script>
    export default {
        name: "Slot",
        data:()=>{
            return {
                username:{"value":'ssss'}
            }
        },
        methods:{
            changeName(){
                this.username = { value:"kk" }
            }
        }
    }
</script>

<style scoped>

</style>