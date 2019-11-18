import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    collectlist:[]
}

const mutations = {
    addFn(state,obj){
        state.collectlist.push(obj)
        console.log(state.collectlist)
    },
    reduceFn(state,index){
        console.log(1)
        state.collectlist.splice(index,1);
    }
}

export default new Vuex.Store({
    state,
    mutations
})
