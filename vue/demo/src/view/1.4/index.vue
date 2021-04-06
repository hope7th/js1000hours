<template>
    <div>
        <div>
            <button @click="handleNameChange"> change name</button>
            <button @click="handleInfoChange"> change Info</button>
            <button @click="handleListChange"> change List</button>
        </div>
        <PropsAndData :name="name" :info="info" :list="list"></PropsAndData>
        <PropsAndData :name="name1" :info="info1" :list="list"></PropsAndData>
    </div>
</template>

<script>
  import PropsAndData from './PropsAndData'
  export default {
    name: 'index',
    components:{
      PropsAndData
    },
    data(){
      this.name = name//没有做响应式，没有触发组件更新
      return {
        name1:'',
        info1:{
          number:''
        },
        info:{},//dic里面的number没有做响应式，没有触发组件更新
        list:[]
      }
    },
    methods:{
      handleNameChange(){
        this.name = "name" + Date.now();
        console.log(this.name)
        console.log("this.name 发生了变化，但是并没有触发子组件更新");
        this.name1 = "name1" + Date.now();
        console.log(this.name1)
        console.info(this)
        //
      },
      handleInfoChange(){
        this.info.number = this.info.number==1?2:1;
        console.log("this.info 发生了变化，但是并没有触发子组件更新");
        this.info1.number = this.info1.number==1?2:1;
        console.log(this.info)
        console.log(this.info1)
        //仔细看，一个添加到Observer对象里面了，一个没有，
      },
      handleListChange(){
        this.list.push(1,2,3)
        // this.list.pop()
        // this.list.pop()
        // this.list.pop()
        console.log("this.list 发生了变化，并触发子组件更新");
      },
    }
  }
</script>

<style scoped>

</style>