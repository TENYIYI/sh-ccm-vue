const state ={
    loadingState:false,
    fontbig:false
}

const mutations={
    Show_Loading:state =>{
        state.loadingState = true;
    },
    Close_Loading:state =>{
        state.loadingState = false;
    },
    Big_Font:state=>{
        state.fontbig=true
    },
    Small_Font:state=>{
        state.fontbig=false
    }

}

const actions = {
    showLoading({ commit }) {
      commit('Show_Loading')
    },
    closeLoading({commit}){
        commit('Close_Loading')
    },
    bigFont({commit}){
        commit('Big_Font')
    },
    smallFont({commit}){
        commit('Small_Font')
    }
  }

export default{
    namespaced:true,
    state,
    mutations,
    actions
}
