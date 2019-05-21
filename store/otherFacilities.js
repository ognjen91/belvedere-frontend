
//state
export const state = () => ({
    facilities : [],
    rooms : [],
    apartments : [],
    owners : [],
})

//getters
export const getters = {
    getFacilities : state => state.facilities,
    getTheFacility : (state) => (theId) => {return state.facilities.find(facility => facility.id == theId)},
    getTheFacilityRooms : (state) => (theId) => {return state.rooms.filter(room => room.facility_id == theId)},
    getTheFacilityApartments : (state) => (theId) => {return state.apartments.filter(apartment => apartment.facility_id == theId)},
    getTheOwner : (state) => (theOwnerId) => {return state.owners.find(owner => owner.id == theOwnerId)},
    getTheRoom : (state) => (theId) => {return state.rooms.find(room => room.id == theId)},
    getTheApartment : (state) => (theId) => {return state.apartments.find(room => room.id == theId)},
    getRandomFacility(state){
      if(!state.facilities.length) return false;
      let index = Math.floor(Math.random() * (state.facilities.length-1))
      return state.facilities[index];
    },
    getKumbor : state => state.facilities.find(facility => facility.id == 2)
}

//mutations
export const mutations = {
  SET_FACILITIES : function(state, payload){
    state.facilities = payload.facilities
    for (var i in state.facilities) {
      state.facilities[i]['fullyLoaded'] = false;
    }
  },


  SET_FULL_FACILITY : function(state, payload){
    payload.facility.data['fullyLoaded'] = true;
    let facility = state.facilities.find(facility => facility.id == payload.facility.data.id);

    for (var i in payload.rooms) {
      payload.rooms[i]['fullyLoaded'] = false;
    }
    for (var i in payload.apartments) {
      payload.apartments[i]['fullyLoaded'] = false;
    }
    state.rooms = [...state.rooms, ...payload.facility.rooms]
    state.apartments =  [...state.apartments, ...payload.facility.apartments]
    state.owners = [...state.owners, payload.facility.owner]


    Object.assign(facility, payload.facility.data);


  },

  SET_FULL_ROOM : function(state, payload){
    let room = state.rooms.find(room => room.id == payload.id);
    payload['fullyLoaded'] = true;
    Object.assign(room, payload); //!!!
  },

  SET_FULL_APARTMENT : function(state, payload){
    let apartment = state.apartments.find(apartment => apartment.id == payload.id);
    payload['fullyLoaded'] = true;
    Object.assign(apartment, payload); //!!!
  }
}


export const actions = {
  async setOtherFacilities({commit}, payload){
    try {
      let facilities = await this.$axios.$get('facilities')
      commit('SET_FACILITIES', {facilities : facilities.data})
    } catch (error) {
      // error({ statusCode: 404, message: 'Post not found' })
      console.log(error);
    }
  }
}
