<template>
  <div id="app">
    {{count}}
    {{$store.getters.doubleCount}}
    <button @click="$store.commit('increment')">ssssss</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed:{
    count(){
      return this.$store.state.count
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
