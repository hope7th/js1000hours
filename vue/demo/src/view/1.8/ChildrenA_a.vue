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
  import Vue from "vue";
  import ChildrenB from './ChildrenB'
  import ChildrenC from './ChildrenC'
  import ChildrenD from './ChildrenD'
  export default {
    name: 'ChildrenA_a',
    components: {ChildrenC, ChildrenB,ChildrenD},
    provide(){
      this.theme = Vue.observable(
        {
          color:"blue"
        }
      );
      return {
        theme:this.theme
      }
    },
    methods:{
      changeColor(color){
        if (color){
          this.theme.color = color;
        } else {
          this.theme.color = this.theme.color==="blue"?"red":"blue"
        }
      }
    }
  }
</script>

<style scoped>

</style>