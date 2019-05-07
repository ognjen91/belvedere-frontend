
//state
export const state = () => ({
  mainSlider : [],
  otherFacilitySliders : []
})

//getters
export const getters = {
  getMainSlider : (state) => state.mainSlider,
  getOtherFacilitySlider : (state) => (theId) => {
            let theSlider = state.otherFacilitySliders.find(slider => slider.id == theId)
            return theSlider.data
          },
}

//mutations
export const mutations = {
  SET_MAIN_SLIDER : function(state, payload){
    state.mainSlider = payload
  },

  SET_OTHER_FACILITY_SLIDER : function(state, payload){
    state.otherFacilitySliders.push(payload)
  },
}


export const actions = {

}
