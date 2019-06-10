<template>
    <div>
        <a-tabs>
            <a-tab-pane key="props" tab="属性">
                <Props
                        name = "hello Vue!"
                        :type="type"
                        :is-visible="false"
                        :on-change="handlePropChange"
                        title="sdsds"
                        class="test1"
                        :class="['test2']"
                        :style="{marginTop:'20px'}"
                        style="margin-top: 10px"
                />

            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
  import Props from "./Props"
  export default {
    name: 'index',
    components: {
      Props
    },
    data: () => {
      return {
        name: "",
        type: "success",
        bigPropsName: "Hello world!"
      }
    },
    methods: {
      handlePropChange(val){
        alert(val)
        this.type = val;
      }
    }
  }
</script>

<style scoped>

</style>