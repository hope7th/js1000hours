<template>
    <div class="border2">
        <h3 :style="{ color:theme.color }">E节点</h3>
        <button @click="handleClick">改变color</button>
    </div>
    
</template>

<script>
  export default {
    name: 'ChildrenE',
    inject:{
      theme:{
        default:()=>({})
      }
    },
    methods:{
      handleClick(){
        if (this.theme.changeColor){
          this.theme.changeColor("green")
        }
      }
    }
  }
</script>

<style scoped>

</style>