<template>
  <div id="app">
   {{count}}
    <br>
    {{$store.getters.doubleCount}}
    <botton @click="$store.commit('increment')">ssss</botton>
    <botton @click="$store.dispatch('increment')">count++</botton>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
