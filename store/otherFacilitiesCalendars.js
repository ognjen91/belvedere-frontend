
//state
export const state = () => ({
  calendarsForDisplay : [],
  alreadySetForFacilities : []

})

//getters
export const getters = {

  getCalendar : (state) => (theId, theType) => {
    console.log(theType);
    let theCalendarData = state.calendarsForDisplay.find((calendar)=>{
      return calendar.type == theType && calendar.calendarable.id == theId
    })
    return theCalendarData.dates;
  }

}

//mutations
export const mutations = {

  SET_CALENDARS : function(state, payload){
    // console.log(payload.calendars);
    // making state.displayCalendars format available for displaying in vuetify calendars
    payload.calendars.forEach(function(calendar){
      calendar.dates = calendar.dates.split(",")
      calendar.dates.forEach(function(date, index){
        if(!date) calendar.dates.splice(index, 1)
          //if date format is valid, create date object
      })
    })

    console.log(payload.calendars);
    console.log(payload.facility_id);
    state.calendarsForDisplay = [...state.calendarsForDisplay, ...payload.calendars] //for displaying on pages
    state.alreadySetForFacilities.push(payload.facility_id)
  },

}


export const actions = {
  async setFacilityCalendars({commit}, payload){
    // console.log(payload);
    try {
      let calendars = await this.$axios.$get('facilities/'+ payload.facility_id + '/calendars');
      // console.log(calendars);
      // commit('SET_CALENDARS', calendars)
      commit('SET_CALENDARS', {calendars : calendars.data, facility_id : payload.facility_id})
    } catch (error) {
      console.log(error);
    }
  }
}
