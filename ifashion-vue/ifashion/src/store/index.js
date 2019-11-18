import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


const state = {
    shopcarlist: []
}

const mutations = {
    addFn(state,obj){
        if (state.shopcarlist.some(item => item.id === obj.id)) {//判断购物车列表中有没有这一项
            state.shopcarlist.find(item => item.id === obj.id).count++ //有就count++
        } else{
            Vue.set(obj, "count", 1)
            state.shopcarlist.push(obj)  //没有就是新加入的  先合并对象给对象一个count,然后存新的对象
        }
    },
    addcountFn(state, obj) {
        state.shopcarlist.find(item => item.id === obj.id).count<5 ?
            state.shopcarlist.find(item => item.id === obj.id).count++ //count++
            :
            null
    },
    subcountFn(state, obj) {
        state.shopcarlist.find(item => item.id === obj.id).count > 1 ?
        state.shopcarlist.find(item => item.id === obj.id).count-- //count--
        :
        null
    }
}


export default new Vuex.Store({
    state,
    mutations
})