<template>
  <div id="app">
    <input v-model="message" />
    <input :value="message1" @input="handlechange" />
    <p>v-model 只是value和input的语法糖<p/>
     {{message}} {{message+message1}}
    <todo-list>
            <todo-item @delete="handleDelete"  v-for="item in list" :key="item.title" :title="item.title" :del="item.del">
                <template v-slot:pre-icon="{value}">
                    <span>前置图标{{value}}</span>
                </template>
                //作用域插槽，本质是返回组件的函数，可带参数
                <!-- <template v-slot:suf-icon>
                    <span>后置图标</span>
                </template> -->
                <!-- <span slot="pre-icon">前置图标</span>、
                <span slot="suf-icon">后置图标</span> -->
            </todo-item>
        </todo-list>
  </div>
</template>

<script>
  import TodoList from './components/TodoList.vue'
  import TodoItem from './components/TodoItem.vue'
  export default {
    name: 'App',
    components: {
      TodoList,
      TodoItem
    },
    data() {
      return {
        message: "hello world ",
        message1: "hello-world",
        list: [{
            title: "课程1",
            del: false
          },
          {
            title: "课程2",
            del: true
          }
        ]
      }
    },
    methods: {
      handlechange(e){
        this.message1 = e.target.value;
      },
      handleDelete(val) {
        console.log("handleDelete", val);
      }
    }
  }
</script>

<style>
 
</style>