<template>
    <div>
        {{ fullName }}
        <div> firstName:<input v-model="firstName"/></div>
        <div> lastName:<input v-model="lastName"/></div>
    </div>

</template>

<script>
    export default {
        name: 'Watch1_pro',
        data:()=>{
            return {
                firstName:'Foo',
                lastName:"Bar",
                fullName:"Foo Bar"
            };
        },
        watch:{
            firstName:function (val) {
                //settimeout返回队列里的参数
                console.log("this.firstTimeout="+this.firstTimeout);
                clearTimeout(this.firstTimeout);
                this.firstTimeout = setTimeout(()=>{
                    this.fullName = val+" " +this.lastName;
                },500)

            },
            lastName:function (val) {
                clearTimeout(this.lastTimeout);
                this.lastTimeout = setTimeout(()=>{
                    this.fullName = this.firstName+" " +val;
                },500)

            },
        }
    }
</script>

<style scoped>

</style>