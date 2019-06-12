<template>
    <div>
        <p>props.info:{{ info }}</p>
        <p>props.name:{{ name }}</p>
        <p>props.list:{{ list }}</p>
        <p>data.a {{ a }}</p>
        <button @click="handleBChange"> change b</button>
    </div>
</template>

<script>
  export default {
    name: 'PropsAndData',
    props:{
      info:Object,
      name:String,
      list:Array
    },
    data(){
      return {
        a:'hello',
        b:'world'
      };
    },
    updated(){
      console.log("触发 PropsAndData updated");
    },
    methods:{
      handleBChange(){
        this.b = "vue" + Date.now();
        console.log("data.b 发生变化，但没有触发updated")
      }
    }
  }
</script>

<style scoped>

</style>