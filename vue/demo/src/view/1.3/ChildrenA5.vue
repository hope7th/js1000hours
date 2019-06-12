<template>
    <div class="border">
        <h1>A节点</h1>
        <button @click="init=!init">移动(有key)</button>
        <div v-if="init">
            <ChildrenB key="1" :number="1" />
            <ChildrenB key="2" :number="2">
                <ChildrenE />
                <ChildrenF />
            </ChildrenB>
            <ChildrenB key="3" :number="3" />
        </div>
        <div v-else>
            <ChildrenB key="2" :number="2">
                <ChildrenE />
                <ChildrenF />
            </ChildrenB>
            <ChildrenB key="1" :number="1" />
            <ChildrenB key="3" :number="3" />
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
    name: 'ChildrenA5',
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
    }
  }
</script>

<style scoped>

</style>