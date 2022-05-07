import { createStore } from 'vuex'
import {auth} from '../components/firebase/firebaseConfig.js'
import {createUserWithEmailAndPassword ,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";


const store=createStore({
  state: {
    user:null,
    isAuthenticated:false
  },
  mutations: {
    setUser(state,payload){
      state.user=payload
    },
    setAuthentication(state,payload){
      state.isAuthenticated=payload
    }
  },
  actions: {
    async signUp(context,{email,password}){
      console.log("Sign up state")
      const res= await  createUserWithEmailAndPassword(auth,email,password)
      if(res){
        context.commit('setUser',res.user)
      }else{
        throw new Error((err)=>err.message)
      }

    },
    async signIn(context,{email,password}){
      console.log("login state")
      const res = await signInWithEmailAndPassword(auth,{email,password})
      if(res){
        context.commit('setUser',res.user)
      }else{
        throw new Error((err)=>err.message)
      }

    },
    async logout(context){
      console.log("logout state")
        await signOut(auth)
       context.commit('setUser',null)
    }
  },
  modules: {
  }
})
const unSub = onAuthStateChanged(auth,(user)=>{
  store.commit('setAuthentication',true)
  store.commit('setUser',user)
  unSub()

})

export default store