<template>
    <div class="border">
        <h1>A节点</h1>
        <button @click="init=!init">更新删除新建</button>
        <div v-if="init">
            <ChildrenB :number="1"/>
            <ChildrenB :number="2">
                <ChildrenE/>
                <ChildrenF/>
            </ChildrenB>
            <ChildrenB :number="3"></ChildrenB>
        </div>
        <div v-else>
            <ChildrenB :number="2">
                <ChildrenE/>
                <ChildrenF/>
            </ChildrenB>
            <ChildrenB :number="1"></ChildrenB>
            <ChildrenB :number="3"></ChildrenB>
        </div>
    </div>
</template>

<script>
  import ChildrenB from "./ChildrenB";
  import ChildrenC from "./ChildrenC";
  import ChildrenD from "./ChildrenD";
  import ChildrenE from "./ChildrenE";
  import ChildrenF from "./ChildrenF";
  import ChildrenG from "./ChildrenG";
  export default {
    name: 'ChildrenA4',
    data(){
      return {
        init:false
      }
    },
    components:{
      ChildrenB,
      ChildrenC,
      ChildrenD,
      ChildrenE,
      ChildrenF,
      ChildrenG
    },
    data(){
      return {
        init:true
      }
    }
  }
</script>

<style scoped>

</style>