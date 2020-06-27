<template>
  <div  class="info-wrap">
	<el-container>
		<el-header>
			<h1>修改个人信息</h1>
		</el-header>
		<el-main>
			<el-input placeholder="请输入年龄" v-model="input.age">
		    	<template slot="prepend">年龄</template>
		    </el-input>
		    <el-input placeholder="请输入所在地" v-model="input.location">
		    	<template slot="prepend">所在地</template>
		    </el-input>
		    <el-input placeholder="请输入邮箱" v-model="input.email">
		    	<template slot="prepend">邮箱</template>
		    </el-input>
		    <el-input placeholder="请输入性别" v-model="input.sex">
		    	<template slot="prepend">性别</template>
		    </el-input>
		    <el-input placeholder="请输入签名" v-model="input.signature">
		    	<template slot="prepend">签名</template>
		    </el-input>
		    <el-input placeholder="请输入手机号" v-model="input.number">
		    	<template slot="prepend">手机号</template>
		    </el-input>
		    <br>
			<el-button type="success" plain v-on:click="submit">确认修改</el-button>
			<el-button type="success" plain v-on:click="myInfo">查看我的信息</el-button>
		</el-main>
	</el-container>
    
  </div>
</template>

<script>
export default {
  name: 'information',
  data () {
    return {
    	input:
		{
			age: '',
	    	location: '',
	    	email: '',
	    	sex: '',
	    	signature: '',
	    	number: ''
		}
    	
    }
  },
  methods:{
  	submit(){
  		var info = JSON.stringify(this.input);
  		var url = "http://hb9.api.okayapi.com/?s=App.User.UpdateExtInfo&app_key=E0A52635859871C072A9B440A8352D61" + "&uuid=" + this.$store.state.userUuid + "&token=" + this.$store.state.userToken + "&ext_info=" + info;
  		this.$jsonp(url,null).then(jsonp=>{
          // console.log(jsonp);
        if (jsonp.ret==200) {
          if (jsonp.data.err_code==0) {
            alert("修改信息成功");
            this.$store.commit('getUserInfo',info);
            // console.log(this.$store.state.userInfo);
            // this.$router.push('/');
          } else{
            alert(jsonp.data.err_msg);
          }
        }
      })

  	},
  	myInfo(){
  		this.$router.push('/login/userInfo');
  	}
  }
}
</script>

<style scoped>
.info-wrap{
	background: url(../../assets/background.jpg);
	background-repeat:no-repeat;
	background-size: cover;
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
.el-input{
	width: 300px;
	margin: 20px auto;
}
.el-button{
	margin-top: 20px;
}

</style>








