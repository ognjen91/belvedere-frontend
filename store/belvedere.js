// since this module isn't namespaced, state referes to this namespace and commit root is alo this module


//state
export const state = () => ({
    facility : {},
    rooms : [],
    apartments : [],
    owner : {}
})

//getters
export const getters = {
    getFacility : (state) => state.facility,
    getRooms : (state) => state.rooms,
    getApartments : (state) => state.apartments,
    getTheRoom : (state) => (theId) => {return state.rooms.find(room => room.id == theId)},
    getTheApartment : (state) => (theId) => {return state.apartments.find(room => room.id == theId)},
    // theRoom : (state)=>{return state.rooms.find(room => room.id == 1)},

    getRandomApartment(state){
      if(!state.apartments.length) return false;
      let index = Math.floor(Math.random() * (state.apartments.length-1))
      return state.apartments[index];
    },

    getRandomRoom(state){
      if(!state.rooms.length) return false;
      let index = Math.floor(Math.random() * (state.rooms.length-1))
      return state.rooms[index];
    },

    getSeveralRandomRooms : (state) => (numberOfRooms) => {
      if(!state.rooms.length) return false;
      if(numberOfRooms > state.rooms.length) numberOfRooms = state.rooms.length;
      let rooms = [];
      let rands = [];
      while(rands.length < numberOfRooms){
        let rand =  Math.floor(Math.random() * state.rooms.length);
        if(!rands.includes(rand)) rands.push(rand)
      }
      for(let i in rands){
        rooms.push(state.rooms[rands[i]]);
      }
      return rooms;
    },

    getSeveralRandomApartments : (state) => (numberOfApartments) => {
      if(!state.apartments.length) return false;
      if(numberOfApartments > state.apartments.length) numberOfApartments = state.apartments.length;
      let apartments = [];
      let rands = [];
      while(rands.length < numberOfApartments){
        let rand =  Math.floor(Math.random() * state.apartments.length);
        if(!rands.includes(rand)) rands.push(rand)
      }
      for(let i in rands){
        apartments.push(state.apartments[rands[i]]);
      }
      return apartments;
    },

    getOtherApartments : (state) => (theId) => {
        return state.apartments.filter(apartment => apartment.id != theId)
    },

    getOtherRooms : (state) => (theId) => {
        return state.rooms.filter(room => room.id != theId)
    }
}

//mutations
export const mutations = {
  SET_BELVEDERE : function(state, payload){
    state.facility = payload.facility.data
    state.rooms = payload.facility.rooms
    state.apartments =  payload.facility.apartments
    state.owner = payload.facility.owner

    for (var i in state.rooms) {
      state.rooms[i]['fullyLoaded'] = false;
    }

    for (var i in state.apartments) {
      state.apartments[i]['fullyLoaded'] = false;
    }
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

  async setBelvedere({commit}, payload){
    try {
      let facility = await this.$axios.$get('facilities/1')
      commit('SET_BELVEDERE', {facility : facility})
    } catch (error) {
      console.log(error);
    }
  }
}
