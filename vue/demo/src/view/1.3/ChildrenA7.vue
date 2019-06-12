<template>
    <div>
        <!--Component template should contain exactly one root element.-->
        <h1>A 结点</h1>
        <button @click="init = !init">新建(有key)</button>
        <div v-if="init">
            <ChildrenB key="1" :number="1" />
            <ChildrenB key="2" :number="2" />
            <ChildrenB key="3" :number="3" />
        </div>
        <div v-else>
            <ChildrenB key="1" :number="1" />
            <ChildrenB key="4" :number="4" />
            <ChildrenB key="2" :number="2" />
            <ChildrenB key="3" :number="3" />
        </div>
    </div>
</template>

<script>
  import ChildrenB from "./ChildrenB";
  export default {
    name: 'ChildrenA7',
    data(){
      return {
        init:true
      }
    },
    components:{
      ChildrenB,
    }
  }
</script>

<style scoped>

</style>