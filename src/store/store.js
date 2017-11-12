import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        counter : 0
    },
    getters :{
        doubleCounter : state =>{
            return state.counter * 2;
        },
        stringCounter : state =>{
            return state.counter + 'Click';
        } 
    },
   mutations :{
       increment : (state, payload) =>{
           state.counter += payload;
       },
       decrement : (state,payload)=>{
           state.counter -= payload;
       }
   },
   actions :{
       Asyncincrement : ({commit}, payload) =>{
           setTimeout( () =>{
               commit('increment', payload.by)
           } ,2000 )
       },
       Asyncdecrement : ({commit}, payload) =>{
        setTimeout( () =>{
            commit('increment', payload.by)
        } ,2000 )
    },
   }
});