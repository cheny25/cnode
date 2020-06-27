<template>
  <div id="app">
    <!-- <homehead></homehead> -->
    <!-- <tabheader></tabheader> -->
    <!-- <login></login> -->

    <router-view/>
  </div>
</template>

<script>
import homehead from '@/components/common/homehead.vue'
import tabheader from '@/components/common/tabheader.vue'


export default {
  name: 'App',
  components:{
    homehead,
    tabheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
