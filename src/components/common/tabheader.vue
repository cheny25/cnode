<template>
  <div class="home">
    
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <div></div>
      </el-tab-pane>
      <el-tab-pane label="精华" name="second">精华</el-tab-pane>
      <el-tab-pane label="分享" name="third">分享</el-tab-pane>
      <el-tab-pane label="问答" name="fourth">问答</el-tab-pane>
      <el-tab-pane label="招聘" name="fifth">招聘</el-tab-pane>
      <el-tab-pane label="客户端测试" name="sixth">客户端测试</el-tab-pane>
    </el-tabs>
     
  </div>
</template>

<script scoped>
import axios from 'axios';
export default {
  name:'tabheader',
    data() {
      
      return {
        activeName: 'first'
      };
    },
    computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


.el-tabs{
  width: 100%;
  margin-top: 15px;
}
.el-tabs__header{
  background-color: #F6F6F6 !important;
}
.el-tabs__active-bar{
  background-color: #80BD01 !important;
}
.el-tabs__item.is-active{
  color: #80BD01 !important;
}
.el-tabs__item:hover{
  color: #80BD01 !important;
}
</style>
