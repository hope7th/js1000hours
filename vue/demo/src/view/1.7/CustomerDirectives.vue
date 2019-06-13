<template>
    <div>
        <button @click="show=!show">销毁</button>
        <button v-if="show" v-change-background-color="myBgColor" v-append-text="`hello ${number}`" @click="number++;myBgColor='#'+Math.floor(Math.random()*0xffffff).toString(16)">
            按钮
        </button>
    </div>
</template>
<script>
  export default {
    name: 'CustomerDirectives',
    directives:{
      appendText:{
        bind(el,binding){
          console.log("bind")
        },
        inserted(el,binding){
         el.appendChild(document.createTextNode(binding.value)) ;
          console.log("inserted", el, binding);
        },
        update(){
          console.log("update");
        },
        componentUpdated(el,binding){
          console.info(el.childNodes);
          el.removeChild(el.childNodes[el.childNodes.length-1])
          el.appendChild(document.createTextNode(binding.value))
          console.log("componentUpdated");
        },
        unbind(){
          console.log("unbind")
        }
      },
      changeBackgroundColor:{
        bind(el,binding){
          alert("bind")
        },
        inserted(el,binding){
          el.style.backgroundColor = binding.value;
          console.log("inserted", el, binding);
        },
        update(el,binding){
          console.log("update");
        },
        componentUpdated(el,binding){
          el.style.backgroundColor = binding.value;
          console.info(el.childNodes);
          console.log("componentUpdated");
        },
        unbind(){
          console.log("unbind")
        }
      }
    },
    data(){
      return {
        number:'1',
        show:true,
        myBgColor:"#ff0000"
      }
    }
  }
</script>

<style scoped>

</style>