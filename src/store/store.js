import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        counter : 0
    },
    // Can Only Read state and returns newly formed value. Does not modifies state.
    getters :{
        doubleCounter : state =>{
            return state.counter * 2;
        },
        stringCounter : state =>{
            return state.counter + 'Click';
        } 
    },
    
   // Does modifies state and perfect mechanism to also mutate it
   mutations :{
       increment : (state, payload) =>{
           state.counter += payload;
       },
       decrement : (state,payload)=>{
           state.counter -= payload;
       }
   },
    
    // Acts as an helper function but ultimately it's mutations method that does end result
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
