import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
	isShowInfo:false,
	isShowLoginInfo:false,
	isShowLogin:true,
	isShowOut:false,
	userInfo:{},
	userName:'',
	userUuid:'',
	userToken:''

}

const mutations={
	getUserName(state,username){
		state.userName = username;
	},
	getUserUuid(state,useruuid){
		state.userUuid = useruuid;
	},
	getUserToken(state,usertoken){
		state.userToken = usertoken;
	},
	getUserInfo(state,flag){
	  sessionStorage.setItem("userInfo", JSON.stringify(flag));
	  state.userInfo = flag;
	},
	showLogin(state,flag){
		state.isShowLogin = flag;
	},
	ShowLoginInfo(state,flag){
		state.isShowLoginInfo = flag;
	},
	showOut(state,flag){
		state.isShowOut = flag;
	}

}

export default new Vuex.Store({
    state,mutations
});