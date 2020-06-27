<template>
  <div class="homehead">
    <el-container>
      <el-header>
        <h1 style="color:#fff;">C N o d e</h1> 
        <div class="buttons">
          <el-button type="success" plain v-on:click="homeLogin">登录</el-button>
          <el-button type="success" plain v-on:click="homeReg">注册</el-button>
          <el-button type="success" plain v-on:click="homeInfo" class="right">个人中心</el-button>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script scoped>
import axios from 'axios';
export default {
    name: 'homehead',
    
    methods: {
     
      homeLogin(){
        this.$router.push('/login/login');
      },
      homeReg(){
        this.$router.push('/login/register');
      },
      homeInfo(){
        this.$router.push('/login/information');
      }
    }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-header{
  background: url(../../assets/header1.jpg);
  background-repeat:no-repeat;
  background-size: cover;
  position: relative;
}
.buttons{
  position: absolute;
  top: 20px;
  left: 2px;
}
.el-button{
  padding: 5px;
  margin: 0px;
  font-size: 13px;
}

</style>
