<template>
    <div>
        <p>Reversed message1:"{{ reversedMessage1 }}"</p>
        <p>Reversed message2:"{{ reversedMessage2() }}"</p>
        <p> {{ now }}</p>
        <button @click="()=> this.$forceUpdate()">forceUpdate</button>
        <br/>
        <input v-model="message"/>
    </div>
</template>

<script>
  export default {
    name: 'Computed',
    data(){
      return {
        message:"hello vue"
      }
    },
    computed:{
      reversedMessage1:function(){
        return this.message.split("").reverse().join("")
      },
      now:function () {
        return Date.now()
      }
    },
    methods:{
      reversedMessage2:function () {
        console.log("执行reversedMessage2");
        return this.message.split("").reverse().join("")
      }
    }
  }
</script>

<style scoped>

</style>