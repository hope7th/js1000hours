<template>
    <div>
        {{ fullname }}
        <div>firstName:<input v-model="firstName"/></div>
        <div>lastName:<input v-model="lastName"/></div>
    </div>
</template>

<script>
  export default {
    name: 'Computed1',
    data(){
      return {
        firstName:"Foo",
        lastName:"Bar"
      }
    },
    computed:{
      fullname:function () {
        return this.firstName + " " + this.lastName
      }
    },
    watch:{
      fullName:function (val,oldVal) {
        console.log("new:%s,old:%s",val,oldVal)
      }
    }
  }
</script>

<style scoped>

</style>