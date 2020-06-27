<template>
  <div  class="myinfo-wrap">
	<el-container>
	  <el-header>
		<h1>我的信息</h1>
	  </el-header>
	  <el-main>
		  <el-collapse v-model="activeNames" @change="handleChange">
			  <el-collapse-item title="注册信息" name="1">
			    <ul class="ulInfo">
					<li v-model="username">账号：{{this.username}}</li>	
					<li v-model="role">用户角色：{{this.role}}</li>	
					<li v-model="time">注册时间：{{this.time}}</li>	
					<li v-model="ip">注册IP：{{this.ip}}</li>	
				</ul>
			  </el-collapse-item>
			  <el-collapse-item title="我的信息" name="2">
			    <ul class="ulInfo">
					<li v-model="age">年龄：{{this.age}}</li>	
					<li v-model="location">所在地：{{this.location}}</li>	
					<li  v-model="email">邮箱：{{this.email}}</li>	
					<li v-model="sex">性别：{{this.sex}}</li>	
					<li v-model="signature">签名：{{this.signature}}</li>	
					
				 </ul>
				 <el-button icon="el-icon-edit" circle v-on:click="changeInfo"></el-button>
			  </el-collapse-item>
			</el-collapse>
	  </el-main>
	</el-container>
    
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  data () {
    return {
      activeNames: ['1'],
      username:'',
      role:'',
      time:'',
      ip:'',
      age:'',
      location:'',
      email:'',
      sex:'',
      signature:''

    };
  },
  methods: {
    handleChange(val) {
      // console.log(val);
    },
    changeInfo(){
    	this.$router.push('/login/information');
    }
  },
  created:function(){
  	var url = "http://hb9.api.okayapi.com/?s=App.User.Profile&app_key=E0A52635859871C072A9B440A8352D61" + "&uuid=" + this.$store.state.userUuid + "&token=" + this.$store.state.userToken;
  	this.$jsonp(url,null).then(jsonp=>{
      	// console.log(jsonp);
	    if (jsonp.ret==200) {
	      if (jsonp.data.err_code==0) {
	        this.username = jsonp.data.info.username;
	        this.role = jsonp.data.info.rolename;
	        this.time = jsonp.data.info.register_time;
	        this.ip = jsonp.data.info.register_ip;
	        this.age = jsonp.data.info.ext_info.age;
	        this.location = jsonp.data.info.ext_info.location;
	        this.email = jsonp.data.info.ext_info.email;
	        this.sex = jsonp.data.info.ext_info.sex
	        ;
	        this.signature = jsonp.data.info.ext_info.signature;
	      } else{
	        alert("请登录");
	      }
	    }
  	})

  }
}
</script>

<style scoped>
.myinfo-wrap{
	/*background: url(../../assets/background.jpg);
	background-repeat:no-repeat;
	background-size: cover;*/
	text-align:center;
	min-height:100vh;
	width: 100%;
	margin: 0;
	padding: 0;
}
h1{
	color:#8FDD55;
	font-size:30px;
	margin: 0;
	line-height: 80px;
}
.ulInfo{
	text-align: left;
	list-style: none;
}
.ulInfo li{
	font-size: 17px;
} 
.el-button{

}
</style>








