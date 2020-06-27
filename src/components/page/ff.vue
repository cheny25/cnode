<template>
  <div class="ff">
    
  </div>
</template>

<script>
export default {
    data() {
      return {
        name: 'ff',
      }
    },
    computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(this);
        console.log(key,keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
