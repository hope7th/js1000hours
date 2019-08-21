<template>
    <div>
        <span>{{count}}</span>
        <button @click="handleclick">count++</button>
    </div>
</template>

<script>
    export default {
        name: "counter",
        data(){
            return {
                count:0
            }
        },
        methods:{
            handleclick(){
                this.count++;
                this.$emit("change",this.count)
            }
        }
    }
</script>

<style scoped>

</style>