<template>
    <div class="border2">
        <h3>
            E 结点
        </h3>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'ChildrenE',
    mounted() {
      console.log("E mounted");
    },
    updated() {
      console.log("E updated");
    },
    destroyed() {
      console.log("E destroyed");
    }
  }
</script>

<style scoped>

</style>