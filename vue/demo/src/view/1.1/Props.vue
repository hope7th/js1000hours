<template>
    <div>
        name:{{ name }}
        <br/>
        type:{{type}}
        <br/>
        list:{{list}}
        <br/>
        isVisible:{{ isVisible }}
        <button @click="handleClick">change type</button>
    </div>
</template>

<script>
  export default {
    name: 'PropsDemos',
    // inheritAttrs: false, 允许组件的未注册属性渲染到根节点上
    props:{
      name:String,
      type:{
        validator:function (value) {
          return ["success","warning","danger"].includes(value)
        }
      },
      list:{
        type:Array,
        default:()=>[]
      },
      isVisible:{
        type:Boolean,
        default:false
      },
      onChange:{
        type:Function,
        default:()=>{}
      }
    },
    created(){
      alert("sss")
      console.info(this.$attrs);
    },
    methods:{
      handleClick() {
        // 不要这么做、不要这么做、不要这么做
        // this.type = "warning";

        // 可以，还可以更好
         this.onChange(this.type === "success" ? "warning" : "success");
      }
    }
  }
</script>

<style scoped>

</style>