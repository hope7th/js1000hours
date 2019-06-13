<template>
    <div>
        {{$data}}
        <br/>
        <button @click="()=>(a+=1)">a+1</button>
    </div>
</template>

<script>
  export default {
    name: 'Watch',
      data(){
        return {
            a:1,
            b:{c:2,d:3},
            e:{
                f:{
                    g:4
                }
            },
            h:[]
        };
      },
      watch:{
        a:function (val,oldVal) {
            this.b.c+=1;
            console.log("new: %s, old: %s", val, oldVal);
        },
          "b.c":function (val,oldVal) {
            //监听对象的属性用这种方法，天才
             this.b.d +=1;
              console.log("new: %s, old: %s", val, oldVal);
          },
          "b.d":function (val,oldVal) {
            this.e.f.g += 1;
            console.log("new: %s, old: %s", val, oldVal);

          },
          e:{
              handler:function (val,oldVal) {
                this.h.push("ss");
                console.log("new: %s, old: %s", JSON.stringify(val), JSON.stringify(oldVal));
            },
              deep:true //对象内部的属性s监听，也叫深度监听
          },
          h:function(val,oldVal){
              console.log("new: %s, old: %s", JSON.stringify(val), JSON.stringify(oldVal));
          }
      }
  }
</script>

<style scoped>

</style>