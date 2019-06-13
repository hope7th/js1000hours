<template>
    <div class="border1">
        <h2>D 结点</h2>
        <ChildrenG />
        <ChildrenH />
        <ChildrenI />
    </div>
</template>

<script>
  import ChildrenG from "./ChildrenG";
  import ChildrenH from "./ChildrenH";
  import ChildrenI from "./ChildrenI";
  export default {
    name: 'ChildrenD',
    components: {
      ChildrenG,
      ChildrenH,
      ChildrenI
    }
  }
</script>

<style scoped>

</style>