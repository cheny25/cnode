<template>
  <div  class="register-wrap" v-show="showRegister">
    <div class="registerinfo">
    	<input type="text" placeholder="请输入手机号码" v-model="newUsertel" id="newUsertel">
	    <input type="password" placeholder="请输入密码" v-model="newPassward1" id="newPassward1">
	    <input type="password" placeholder="请再次输入密码" v-model="newPassward2">
	    <input type="text" placeholder="请输入验证码" v-model="newVer">
	    <button class="verification" v-on:click="getVerification">{{code}}</button>
    </div>
    <button class="register" v-on:click="Register">注册</button>
  </div>
</template>

<script>
import md5 from 'js-md5';
export default {
  name: 'register',
  data () {
    return {
    	showRegister:true,
    	newUsertel:'',
    	newPassward1:'',
    	newPassward2:'',
    	newVer:'',
      code:'获取验证码'
    }
  },
  methods:{
    getVerification(){//获取验证码
      var ver='';
      var arr = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
      for(var i=0; i<4; i++){
        var index = Math.floor(Math.random()*36);
        ver += arr[index];
      }
      this.code = ver;
    },
  	Register(){
      //验证验证码
      if (this.newVer.length == 0) {
        alert("请输入验证码！")
      } else if (this.newVer != this.code) {
        alert("输入验证码错误！")
      } else{
        //注册
    	  if(this.newUsertel == "" || this.newPassward1 == "" || this.newPassward2 == ''){
            alert("请输入用户名或密码");
        } else if (this.newPassward1 != this.newPassward2){
        	alert("密码不一致！");
        } else{
            var url = "http://hb9.api.okayapi.com/?s=App.User.Register&app_key=E0A52635859871C072A9B440A8352D61" + "&username=" + this.newUsertel + "&password=" + md5(this.newPassward1);
            this.$jsonp(url,null).then(jsonp=>{
              //console.log(jsonp);
              if (jsonp.ret==200) {
                if (jsonp.data.err_code==0) {
                  alert("注册成功");
                  this.$router.push('/login/login');
                } else{
                  alert(jsonp.data.err_msg);
                }
              } else{
                alert(jsonp.msg);
              }
            })
        }
      }
  		
  	}
  	
  }
}
</script>

<style scoped>
.register-wrap{
	background: url(../../assets/background.jpg);
	background-repeat:no-repeat;
	background-size: cover;
	text-align:center;
	min-height:100vh;
	width: 100%;
	margin: 0;
	padding: 0;
}
.registerinfo{
	position: relative;
	top: 60px;
	height: 250px;
}
input{
	display: flex; 
	width:250px; 
	height:40px; 
	line-height:40px; 
	margin: 0 auto;
	margin-bottom: 10px; 
	outline:none; 
	border-top: 1px solid transparent;
	border-left: 1px solid transparent;
	border-right: 1px solid transparent;
	border-bottom:1px solid #41B883; 
	padding:10px; 
	box-sizing:border-box;
	background-color: transparent;
	color: white;
}
.verification{
	width: 100px; 
	height: 30px; 
	margin:0 auto; 
	border: 1px solid #41B883; 
	color:#fff; 
	background-color:#41b883; 
	font-size: 14px;
	position: relative;
	top: -40px;
	left: 75px;
}
.register{
	width:250px; 
	height:40px; 
	line-height: 40px; 
	margin:0 auto; 
	border: 1px solid #41B883; 
	color:#fff; 
	background-color:#41b883; 
	font-size:16px;
	position: relative;
	top: 70px;
}
</style>
