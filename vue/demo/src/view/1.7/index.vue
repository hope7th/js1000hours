<template>
    <a-tabs>
        <a-tab-pane key="Directives" tab="内部指令">
            <Directives/>
        </a-tab-pane>
        <a-tab-pane key="CustomerDirectives" tab="自定义指令">
            <CustomerDirectives/>
        </a-tab-pane>
    </a-tabs>
</template>

<script>
  import Directives from "./Directives";
  import CustomerDirectives from "./CustomerDirectives";
  export default {
    name: 'index',
    components:{
      Directives,
      CustomerDirectives
    }
  }
</script>

<style scoped>

</style>