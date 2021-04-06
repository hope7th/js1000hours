<template>
    <div class="border1">
        <h2>C 节点</h2>
        <ChildrenE />
        <ChildrenF />
    </div>
</template>
<script>
  import ChildrenE from './ChildrenE'
  import ChildrenF from './ChildrenF'
  export default {
    name: 'ChildrenC',
    components:{
      ChildrenE,
      ChildrenF
    },
    provide(){
      return {
        theme:{
          color:"green"
        }
      }
    }

  }
</script>

<style scoped>

</style>