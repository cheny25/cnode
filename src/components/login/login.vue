<template>
  <div class="login-wrap">
	<img src="../../assets/logo2.png" style="width:100px;height:100px;margin:60px 0 30px 0;">
    <input type="text" placeholder="请输入手机号码" v-model="usertel">
    <input type="password" placeholder="请输入密码" v-model="password">
    <button class="login" v-on:click="login">登录</button></br>
    <button class="register" v-on:click="ToRegiser">注册</button>
    <p>忘记密码？</p>
  </div>
</template>

<script>
import md5 from 'js-md5';
import store from '@/vuex/store';

export default {
  name: 'login',
  data () {
    return {
      usertel: '',
      password: '' 
    }
  },
  methods:{
  	login(){
  		if(this.usertel == "" || this.password == ""){
            alert("请输入用户名或密码")
        } else {
          
        	var url = "http://hb9.api.okayapi.com/?s=App.User.Login&app_key=E0A52635859871C072A9B440A8352D61" + "&username=" + this.usertel + "&password=" + md5(this.password);

          this.$jsonp(url,null).then(jsonp=>{
              // console.log(jsonp);
            if (jsonp.ret==200) {
              if (jsonp.data.err_code==0) {
                alert("登录成功");
                this.$store.commit('getUserName',this.usertel);
                this.$store.commit('getUserUuid',jsonp.data.uuid);
                this.$store.commit('getUserToken',jsonp.data.token);
                // console.log(this.$store.state.userName);
                // console.log(this.$store.state.userUuid);
                // console.log(this.$store.state.userToken);
                this.$router.push('/');
              } else{
                alert(jsonp.data.err_msg);
              }
            }
          })
        }
  
  	},
  	ToRegiser(){
      this.$router.push('/login/register');
  	},
    store
  }
}
</script>

<style scoped>
.login-wrap{
	background: url(../../assets/background.jpg);
	background-repeat:no-repeat;
	background-size: cover;
	text-align:center;
	min-height:100vh;
	width: 100%;
	margin: 0;
	padding: 0;
}
input{
	display: flex; 
	width:250px; 
	height:40px; 
	line-height:40px; 
	margin: 10px auto;
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
.login{
	margin-top: 30px;
}
.register{
	margin: 30px 0;
	background-color: transparent;
}
.register:hover{
	background-color: #41b883;
}
button{
	width:250px; 
	height:40px; 
	line-height: 40px; 
	margin:0 auto; 
	border: 1px solid #41B883; 
	color:#fff; 
	background-color:#41b883; 
	font-size:16px; 
}
p{
	color: #BDBDBD;
}
</style>
