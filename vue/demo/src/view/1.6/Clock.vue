<template>
    <div>
        {{ log(render)}}
        {{now}}
        <button @click="start=!start">{{ start?"停止":"开始"}}</button>
    </div>
</template>

<script>
    import moment from "moment"
    export default {
        name: "Clock",
        data(){
            console.log(data)
            return {
                now:moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                start:false
            }
        }
    }
</script>

<style scoped>

</style>