<template>
    <div>
        <ChildrenA_a/>
    </div>
</template>

<script>
  import ChildrenA from './ChildrenA'
  import ChildrenA_a from './ChildrenA_a'
  export default {
    name: 'index',
    components: {ChildrenA_a}
  }
</script>

<style>
    .border,
    .border1,
    .border2 {
        border: 1px solid #000;
        padding: 10px 0;
        margin: 10px 10px 0;
    }
    .border1 {
        border-color: #ccc;
    }
    .border2 {
        border-color: #eee;
    }

</style>