<template>
    <div class="border2">
        <h3 :style="{color:theme1.color}">F节点</h3>
    </div>
</template>

<script>
  export default {
    name: 'ChildrenF',
    inject:{
      theme1:{
        from:"theme",
        default:()=>({})
      }
    }
  }
</script>

<style scoped>

</style>