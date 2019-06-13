<template functional>
    <div class="border2">
        <!--<h3 :style="{color:injections.theme.color}"> I 节点</h3>-->
        <h3 :style="{ color:injections.theme.color }"> I 节点</h3>
    </div>
</template>

<script>
  export default {
    name: 'ChildrenI',
    inject:{
      theme:{
        default:()=>({})
      }
    }
  }
</script>

<style scoped>

</style>