<template>
    <div class="border">
        <h1>C节点</h1>
        <ChildrenE />
        <ChildrenF />
    </div>
</template>

<script>
    import ChildrenE from "./ChildrenE";
    import ChildrenF from "./ChildrenF";
    export default {
        components: {
            ChildrenE,
            ChildrenF,
        },
    }
</script>

<style>

</style>