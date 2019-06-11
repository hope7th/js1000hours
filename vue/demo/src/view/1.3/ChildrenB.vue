<template>
    <div class="border1">
        <h2>B节点 {{number}}</h2>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'ChildrenB',
    components: {},
    props:{
      number:Number
    },
    mounted(){
      console.log(`B${this.number||""} mounted`)
    },
    updated(){
      console.log(`B${this.number||""} mounted`)
    },
    destroyed(){
      console.log(`B${this.number||""} destoryed`)
    }

  }
</script>

<style scoped>

</style>