<template>
    <div class="border">
        <h1>A节点</h1>
        <button @click="orderAsc=!orderAsc">移动</button>
        <div v-if="orderAsc">
            <ChildrenB/>
            <ChildrenC></ChildrenC>
            <ChildrenD/>
        </div>
        <div v-else>
            <ChildrenC></ChildrenC>
            <ChildrenB/>
            <ChildrenD/>
        </div>
    </div>
</template>

<script>
  import ChildrenB from './ChildrenB'
  import ChildrenC from './ChildrenC'
  import ChildrenD from './ChildrenD'
  export default {
    name: 'ChildrenA1',
    components: {ChildrenD, ChildrenC, ChildrenB},
    data(){
      return {
        orderAsc:true
      }
    }
  }
</script>

<style scoped>
</style>