<template>
    <div class="border">
         <h3>F 结点</h3>
        <button @click="getARef">获取A Ref</button>
        <button @click="getHRef">获取H Ref</button>
    </div>
</template>

<script>
    export default {
        components:{},
        inject:{
            getParentRef:{
                from:"getRef",
                default:()=>{}
            },
            getParentChildrenRef:{
                from:"getChildrenRef",
                default:()=>{}
            }, 
        },
        methods:{
            getARef(){
                window.console.log(this.getParentRef())
            },
            getHRef(){
                window.console.log(this.getParentChildrenRef("childrenH"))
            }
        }
    }
</script>

<style>

</style>