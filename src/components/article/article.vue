<template>
  <div class="article">
    <div class="content1">
      <div class="title">
        <span :class="(info.top || info.good) ? 'put_top' : 'close'">{{this.title_tag}}</span>
        <a><h3>{{this.info.title}}</h3></a>
        <p class="changes">
          <span>发布于一个月前</span>
          <span>作者{{this.info.author.loginname}}</span>
          <span>{{this.info.visit_count}}次浏览</span>
          <span>来自{{this.tab_type}}</span>
        </p>
      </div>
      <div class="inner_content">
        <div v-html="this.info.content"></div>
      </div>
      <div class="reply">
        <div class="header">
          <span @click="replyOn" id="replycount">{{this.info.reply_count}}回复</span>
          <form id="formhh">
            <input type="text" name="text">
            <button>回复</button>
            <button @click="replyOff">取消</button>
          </form>
        </div>
        <div class="cell" v-for="(reply,num) of replies">
          <img :src="reply.author.avatar_url">
          <div class="userInfo">
            <a href="#">{{reply.author.loginname}}</a>
            <a href="#" id="time">{{replies.length - num}}楼·{{getTime(reply.create_at)}}</a>
            <div class="up">
              <span>{{reply.ups.length}}</span>
              <img src="../../assets/give-a-like.png" @click="getLike">
            </div>
             
          </div>
          <div class="userAction">
            <div class="text">
              <p v-html="reply.content"></p>
            </div>
          </div>
        </div>
      </div>
        

    </div>
    <div class="content2">
      
    </div>
    

  </div> 
</template>

<script>
import axios from 'axios';
export default {
  name: 'article',
  data() {
    return {
      id: this.$route.params.id,
      info:{},
      title_tag:'',
      tab_type:'',
      replies:[]
    }
  },
  created: function(){
    axios.get('https://cnodejs.org/api/v1/topic/'+this.id)
    .then(response=>{
      
      this.info = response.data.data;
      console.log(this.info);
      this.replies = this.info.replies.reverse();
      if (this.info.top) {
        this.title_tag = '置顶';
      }
      if (this.info.good) {
        this.title_tag = '精华';
      }
      switch(this.info.tab){
          case 'share' : this.tab_type = "分享";break;
          case 'good' :this.tab_type = "精华";break;
          case 'ask' :this.tab_type = "问答";break;
          case 'job' :this.tab_type = "招聘";break;
      }

      
    })
    .catch(error=>{
      //console.log(error);
    })
  },
  methods: {
    replyOn(){
      document.getElementById('replycount').style.display='none';
      document.getElementById('formhh').style.display='block';
    },
    replyOff(){
      document.getElementById('replycount').style.display='block';
      document.getElementById('formhh').style.display='none';
    },
    getLike(){
      axios.get('https://cnodejs.org/api/v1/topic/'+this.id)
    .then(response=>{
      this.info = response.data.data;
      this.replies = this.info.replies.reverse();
      // this.replies.ups.length++;
      
    })
    .catch(error=>{
      //console.log(error);
    })
    }
  }
}
</script>

<style>
.content1{
  width: 99%;
  
}
.title{
  margin-top: 10px;
  height: 100px;
  width: 100%;
  position: relative;
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
  left: 5px;
}
.up{
  display: block;
}
.close{
  display: none;
}
.title a{
  position: absolute;
  top: -20px;
  left: 45px;
  text-decoration: none;
  width: 85%;
  text-align: left;
  word-wrap:break-word;
}
.changes{
  position: absolute;
  bottom: 0px;
  font-size: 12px;
  color: #838383;
  width: 100%;
  text-align: left;
}
.changes span{
  margin: 0 5px;
}
.changes span:before{
  content: '·';
  font-size: 15px;
  font-weight: bolder;
  margin: 0 3px 0 0;
}
.inner_content{
  height: auto;
  width: 100%;
  border: 1px solid #E1E1E1;
  border-left: 0;
  border-right: 0;
  text-align: left;
}

.markdown-text p img{
  height: auto;
  width: 98%;
  vertical-align: middle;
  border: 0;
}


.reply{
  width: 100%;
  height: auto;
  background-color: #EDEDED;
}
.header{
  height: 25px;
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  text-align: left;
  position: relative;
}
.header span{
  color: #444;
}
.header form{
  display: none;
  position: absolute;
  left: 80px;
  top: 9px;
}
.cell{
  position: relative;
  padding: 10px 0 10px 10px;
  font-size: 15px;
  border-top: 1px solid #444;
  text-align: left;
  background-color: white;
}
.cell img{
  width:35px; 
  height:35px;
}
.userInfo {
  position: absolute;
  left: 60px;
  top: 18px;
  width: 80%;
}
.userInfo a{
  color: #666666;
  text-decoration: none;
  font-weight: bolder;
  font-size: 17px;
  margin: 0 5px 0 0; 
}
#time{
  color: #5FA9D3;
  font-weight: normal;
  font-size: 15px;
}
.userInfo a:hover{
  text-decoration: underline;
}
.up span{
  position: absolute;
  right: 0px;
  top: -1px;
}
.userInfo img{
  position: absolute;
  right: 15px;
  top: -5px;
  width: 20px;
  height: 20px;
}
.text p{
  font-size: 17px;
}
</style>
