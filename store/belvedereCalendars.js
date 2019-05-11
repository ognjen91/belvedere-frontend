
//state
export const state = () => ({
  calendarsSet : false,
  showResults : false,
  arrivalDate : new Date().toISOString().substr(0, 10),
  departureDate : null,
  nights : 7,
  freeRoomsAndApartments : [],
})

//getters
export const getters = {
  // calendarsSet : state => state.carlendarsSet
  checkDates: (state) => (data) => {
  },

  getArrivalDate : (state) => state.arrivalDate,
  getDepartureDate : (state) => state.departurelDate,
  getNights : (state) => state.nights,
  getResults : (state) => state.freeRoomsAndApartments,
  showResults : (state) => state.showResults,
  getCalendar : (state) => (data) => {
    // console.log(data)
    let theCalendarData = state.calendarsForDisplay.find((calendar)=>{
      return calendar.type == data.type && calendar.calendarable.id == data.id
    })
    return theCalendarData.dates;
  }
}

//mutations
export const mutations = {
  SET_CALENDARS : function(state, payload){
    state.calendarsForSearch = payload.data; //for search
    state.calendarsForDisplay = payload.data //for displaying on pages

    //making state.calendars format available for easy search
    state.calendarsForSearch.forEach(function(calendar){
       if(calendar.dates){
        calendar.dates = calendar.dates.split(",")
        calendar.dates.forEach(function(date, index){
        date? date = new Date(date) : calendar.dates.splice(index, 1)
      })
      }
    })

    // console.log(state.calendarsForDisplay);

    // making state.displayCalendars format available for displaying in vuetify calendars
    state.calendarsForDisplay.forEach(function(calendar){
  
      //cleaning from empty strings
      if(calendar.dates) calendar.dates.forEach(function(date, index){
        if(!date) calendar.dates.splice(index, 1)
          //if date format is valid, creates a date object
      })
    })

    state.calendarsSet = true;

  },


  DO_SEARCH(state,payload){
    let arrivalDate = new Date(state.arrivalDate);
    let departureDate = new Date;
    departureDate.setDate(arrivalDate.getDate() + state.nights)

    //iterate through every calendar and set state.freeRoomsAndApartments to those who are free in the period
    let frees = state.calendarsForSearch.filter(calendar=>{
      if(calendar.dates){
          return calendar.dates.every(function(date){
            date = new Date(date);
            return !(arrivalDate <= date && departureDate >= date)
          })
      } else {
            return true
    }
    })

    state.freeRoomsAndApartments = frees.map(calendar => { return {type: calendar.type, calendarable : calendar.calendarable}})
    state.departureDate = departureDate;
    state.showResults = true

  },

  SET_ARRIVAL_DATE(state,payload){
    state.arrivalDate = payload
  },

  SET_NIGHTS(state,payload){
    state.nights = payload
  },

  CLOSE_RESULTS(state,payload){
    state.showResults = false
  }
}


export const actions = {
  async setCalendars({commit}, payload){
    try {
      let calendars = await this.$axios.$get('facilities/1/calendars')
      commit('SET_CALENDARS', calendars)
    } catch (error) {
      console.log(error);
    }
  }
}
