<template>
    <div class="border2">
        <h3 v-ant-ref="c=>setChildrenRef('ChildrenE',c)">E 节点</h3>
    </div>
</template>

<script>
    export default {
        components: {},
        inject:{
            setChildrenRef: {
                default: () => {}
            }
        }
    }
</script>

<style>

</style>