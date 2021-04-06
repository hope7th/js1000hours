<template>
    <div>
        <h1>A 节点</h1>
        <button @click="()=> changeColor()">改变color</button>
        <ChildrenB/>
        <ChildrenC/>
        <ChildrenD/>
    </div>
</template>

<script>
  import ChildrenB from './ChildrenB'
  import ChildrenC from './ChildrenC'
  import ChildrenD from './ChildrenD'
  export default {
    name: 'ChildrenA_a',
    components: {ChildrenC, ChildrenB,ChildrenD},
    // provide(){
    //   return {
    //     theme:{
    //       color:this.color
    //     }
    //   }
    // },
    provide(){
      return {
        theme:this
      }
    },
    data(){
      return {
        color:"blue"
      }
    },
    methods:{
      changeColor(color){
        if (color){
          this.color = color;
        } else {
          this.color = this.color==="blue"?"red":"blue"
        }
      }
    }
  }
</script>

<style scoped>

</style>