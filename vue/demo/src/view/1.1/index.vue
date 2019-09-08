<template>
    <div>
        <a-tabs>
            <a-tab-pane key="props" tab="属性">
                <Props name="hello Vue!" :type="type" :is-visible="false" :on-change="handlePropChange" title="sdsds"
                    class="test1" :class="['test2']" :style="{marginTop:'20px'}" style="margin-top: 10px" />

            </a-tab-pane>
            <a-tab-pane key="event" tab="事件">
                <Event :name="name" @change="handleEventChange"></Event>
            </a-tab-pane>
            <a-tab-pane key="slot" tab="插槽">
                <p>作用域插槽，接受子组件的数据</p>
                <Slot>
                    <p>default slot</p>
                    <template v-slot:title>
                        <p>title</p>
                        <p>title2</p>
                    </template>
                    <template v-slot:item="props">
                        <p>item slot-scope {{ props.value }}</p>
                    </template>
                </Slot>
                <Slot>
                    <p>default slot</p>
                    <p slot="title">title</p>
                    <p slot="title">title2</p>
                    <p slot="item" slot-scope="ss">hello {{ ss.value }}</p>
                </Slot>
            </a-tab-pane>
            <a-tab-pane key="bigProps" tab="大属性">
                <BigProps :name="bigPropsName" :on-change="handleBigPropChange" :slot-default="getDefault()"
                    :slot-title="getTitle()" :slot-scope-item="getItem">

                </BigProps>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>
<script>
import index from "./index.js"
    import Props from "./Props"
    import Event from "./Event"
    import Slot from "./Slot"
    import BigProps from "./BigProps";
    export default {
        name: 'index',
        mixins:[index],
        components: {
            BigProps,
            Props,
            Event,
            Slot,
        },
        data: () => {
            return {
                name: "",
                type: "success",
                bigPropsName: "Hello world!",
                msg:"cover mixin" 
                //命名冲突时，覆盖混入
            }
        },
        mounted(){
            this.testMessage()
        },
        methods: {
            handlePropChange(val) {
                alert(val)
                this.type = val;
            },
            handleEventChange(val) {
                this.name = val
            },
            handleBigPropChange(val) {
                this.bigPropsName = val;
            },
            getTitle() {
                return [this.$createElement("p", "default slot")]
            },
            getDefault() {
                return [
                    this.$createElement("p", "title slot1"),
                    this.$createElement("p", "title slot2"),
                    //相同名称的插槽是合并，不是替换
                ]
            },
            getItem(props) {
                return [
                    this.$createElement("p", `item slot-scope ${JSON.stringify(props)}`),
                ]
            }
        }
    }
</script>

<style scoped>

</style>