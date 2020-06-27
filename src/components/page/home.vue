<template>
  <div class="home">
    <el-container>
      <el-header>
        <h1 style="color:#fff;">C N o d e</h1> 
        <div class="buttons">
          <el-button type="success" plain v-on:click="homeLogin">登录</el-button>
          <el-button type="success" plain v-on:click="homeReg">注册</el-button>
          <el-button type="success" plain v-on:click="homeInfo">个人中心</el-button>
        </div>
      </el-header>
      <el-main class="main">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first">
            <div class="item" v-for="datas in tabData">
              <img :src="datas.author.avatar_url">
              <div class="title">
                <span :class="(datas.top || datas.good) ? 'put_top' : 'tag'">{{datas.tab}}</span>
                <router-link :to="{name: 'article', params: {id: datas.id}}">{{datas.title}}</router-link>
                <p class="view">
                  <span class="viewed">{{datas.reply_count}}/{{datas.visit_count}}</span>
                  <span class="date">{{getTime(datas.last_reply_at)}}</span>
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="精华" name="second">
            <div class="item" v-for="gooddatas in goodData">
              <img :src="gooddatas.author.avatar_url">
              <div class="title">
                <span :class="(gooddatas.top || gooddatas.good) ? 'put_top' : 'tag'">{{gooddatas.tab}}</span>
                <router-link :to="{name: 'article', params: {id: gooddatas.id}}">{{gooddatas.title}}</router-link>
                <p class="view">
                  <span class="viewed">{{gooddatas.reply_count}}/{{gooddatas.visit_count}}</span>
                  <span class="date">{{getTime(gooddatas.last_reply_at)}}</span>
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="分享" name="third">
            <div class="item" v-for="sharedatas in shareData">
              <img :src="sharedatas.author.avatar_url">
              <div class="title">
                <span :class="(sharedatas.top || sharedatas.good) ? 'put_top' : 'tag'">{{sharedatas.tab}}</span>
                <router-link :to="{name: 'article', params: {id: sharedatas.id}}">{{sharedatas.title}}</router-link>
                <p class="view">
                  <span class="viewed">{{sharedatas.reply_count}}/{{sharedatas.visit_count}}</span>
                  <span class="date">{{getTime(sharedatas.last_reply_at)}}</span>
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="问答" name="fourth">
            <div class="item" v-for="askdatas in askData">
              <img :src="askdatas.author.avatar_url">
              <div class="title">
                <span :class="(askdatas.top || askdatas.good) ? 'put_top' : 'tag'">{{askdatas.tab}}</span>
                <router-link :to="{name: 'article', params: {id: askdatas.id}}">{{askdatas.title}}</router-link>
                <p class="view">
                  <span class="viewed">{{askdatas.reply_count}}/{{askdatas.visit_count}}</span>
                  <span class="date">{{getTime(askdatas.last_reply_at)}}</span>
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="招聘" name="fifth">
            <div class="item" v-for="jobdatas in jobData">
              <img :src="jobdatas.author.avatar_url">
              <div class="title">
                <span :class="(jobdatas.top || jobdatas.good) ? 'put_top' : 'tag'">{{jobdatas.tab}}</span>
                <router-link :to="{name: 'article', params: {id: jobdatas.id}}">{{jobdatas.title}}</router-link>
                <p class="view">
                  <span class="viewed">{{jobdatas.reply_count}}/{{jobdatas.visit_count}}</span>
                  <span class="date">{{getTime(jobdatas.last_reply_at)}}</span>
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="客户端测试" name="sixth">客户端测试</el-tab-pane>
        </el-tabs>

      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script scoped>
import axios from 'axios';

export default {
  data() {
    return {
      activeName: 'first',
      tabData:[],
      goodData:[],
      shareData:[],
      askData:[],
      jobData:[]
    }
  },
  computed:{
    activeIndex(){
      return this.$route.path.replace('/','')
    }
  },
  created: function(){
    axios.get('https://cnodejs.org/api/v1/topics')
    .then(response=>{
      // console.log(response.data);
      var arr = response.data.data;
      this.tabData = arr; //获取数据
      var a = 0;
      var b=0;
      var c=0;
      var d=0;

      for (var i = 0; i <= arr.length; i++) {
        switch(arr[i].tab){
          case 'share' : 
                         this.tabData[i].tab = "分享";
                         this.shareData[a] = arr[i];
                         a++;
                         break;
          case 'good' : 
                        this.tabData[i].tab = "精华";
                        this.goodData[b] = arr[i];
                        b++;
                        break;
          case 'ask' : 
                       this.tabData[i].tab = "问答";
                       this.askData[c] = arr[i];
                       c++;
                       break;
          case 'job' : 
                       this.tabData[i].tab = "招聘";
                       this.jobData[d] = arr[i];
                       d++;
                       break;
        }
        if (arr[i].top == true) {
          this.tabData[i].tab = "置顶";
        }
        if (arr[i].good == true) {
          this.tabData[i].tab = "精华";
          this.goodData[b] = arr[i];
          b++;
        }

      }


      // console.log(this.tabData);
      // console.log(response.data);
    })
    .catch(error=>{
      //console.log(error);
    })
  },
  methods:{
    handleClick(tab, event) {
      // console.log(tab, event);
    },
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
.home{
  background-color: #E1E1E1;
}
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

.main{
  display: flex;
  margin: 0;
  padding: 0;
}

.el-tabs{
  width: 100%;
/*  margin-top: 15px;*/
}
.el-tabs__header{
  background-color: #F6F6F6 !important;
  margin-bottom: 0px;
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
.el-tabs__content .item{
  width: 100%;
  height: 53px;
  position: relative;
  padding-right: 10px;
  background-color: #fff;
  border-bottom: 1px solid #9e83cc;
}
.el-tabs__content .item img{
  position: absolute;
  left: 5px;
  top: 8px;
  width:35px; 
  height:35px;
}
.title{
  width: 95%;
  height: 100%;
  position: absolute;
  left: 50px;
  
}
.title a:hover{
  color: #8EB43A;
}
.put_top{
  background-color: #80bd01;
  color: #fff;
  font-size: 12px;
  padding: 0 5px;
  border-radius: 3px;
  margin: 0 5px 0 0;
  position: absolute;
  top: 8px;
  left: 0px;
}
.tag{
  background-color: #E5E5E5;
  color: #444444;
  font-size: 12px;
  padding: 0 5px;
  border-radius: 3px;
  margin: 0 5px 0 0;
  position: absolute;
  top: 8px;
  left: 0px;
}
.title a{
  position: absolute;
  top: 8px;
  left: 42px;
  text-decoration: none;
  color: #444444;
  width: 80%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.view{
  width: 100%;
  overflow: hidden;
  margin-top: 30px;
  color: #9e83cc;
}
.viewed{
  position: absolute;
  left: 40px;
}
.date{
  position: absolute;
  right: 40px;
}
</style>
