
//state
export const state = () => ({

})

//getters
export const getters = {

}

//mutations
export const mutations = {

}


export const actions = {
  async nuxtServerInit({dispatch}, {$axios}){
     await  dispatch('belvedere/setBelvedere', {}, {root:true})
     await  dispatch('otherFacilities/setOtherFacilities', {}, {root:true})
     await  dispatch('belvedereCalendars/setCalendars', {}, {root:true})
     await  dispatch('blog/setInitialBlogs', {}, {root:true})
  },
}
