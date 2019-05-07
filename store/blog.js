
//state
export const state = () => ({
  blogs : []
})

//getters
export const getters = {
  getBlogs : state => state.blogs,
  getLinks : state => state.links,
  getMeta : state => state.meta,

  getNumberOfBlogs : (state) => (number) =>{
    let toReturn = [];
    for (var i = 0; i < number; i++) {
      // console.log(i, state.blogs[i]);
      if(state.blogs[i]) toReturn.push(state.blogs[i])
    }
    return toReturn;
  }
}

//mutations
export const mutations = {
  SET_INITIAL_BLOGS : function(state, payload){
    state.blogs = payload.data
    state.links = payload.links
    state.meta =  payload.meta
  },

  ADD_NEW_BLOGS : function(state, payload){
    state.blogs = [...state.blogs, ...payload.data]
    state.links = payload.links
    state.meta = payload.meta
  }


}


export const actions = {
  async setInitialBlogs({commit}, payload){
    try {
      let blogs = await this.$axios.$get('blogs/belvedere')
      commit('SET_INITIAL_BLOGS', blogs)
    } catch (error) {
      console.log(error);
    }
  }
}
