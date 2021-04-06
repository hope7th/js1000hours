<template>
    <div>
        <li>
            <slot name="pre-icon" :value="value"></slot>
            <span class="red" v-if="!del">{{title}}</span>
            <span v-else style="text-decoration: line-through;">{{title}}</span>
            <slot name="suf-icon">😊</slot>
            <button v-show="del" @click="handleClick">删除</button>
        </li>
    </div>
</template>

<script>
    export default {
        data() {
                return {
                    value: Math.random()
                }
            },
        methods: {
            handleClick() {
                console.log("点击删除事件");
                this.$emit("delete", this.title)
            }
        },
        props: {
            title: String,
            del: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style scoped>
.red {
    color: red;
}
</style>