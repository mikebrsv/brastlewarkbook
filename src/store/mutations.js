const SET_GNOME_DATA = (state, data) => {
  state.gnomeData = data
}

const SET_PROFESSIONS = (state, data) => {
  data.forEach(function (profession, index) {
    this[index] = profession.trim();
  }, data);
  data.sort()
  state.professions = data
}

const SET_AGE_SPECTRUM = (state, data) => {
  state.ageSpectrum = data
}

const SET_CURRENT_PROFILE_BY_ID = (state, id) => {
  let profile = state.gnomeData.find(profile => profile.id === id)
  state.currentProfile = profile
}

const REMOVE_CURRENT_PROFILE = (state) => {
  state.currentProfile = null
}

const UPDATE_NAME_FILTER = (state, data) => {
  state.nameFilter = data
}

const UPDATE_PROFESSION_FILTER = (state, data) => {
  state.professionFilter = data
}

const UPDATE_SORT = (state, data) => {
  state.sort = data
}

const SET_AGE_FILTER = (state, data) => {
  state.ageFilter = data
}

const COPE_AGE_FILTER = (state, { i, payload }) => {
  state.ageFilter[i] = payload
}

const LOAD_MORE = (state) => {
  state.gnomesToShow += 16
}

export default {
  SET_GNOME_DATA,
  SET_PROFESSIONS,
  SET_AGE_SPECTRUM,
  SET_CURRENT_PROFILE_BY_ID,
  REMOVE_CURRENT_PROFILE,
  UPDATE_NAME_FILTER,
  UPDATE_PROFESSION_FILTER,
  UPDATE_SORT,
  SET_AGE_FILTER,
  COPE_AGE_FILTER,
  LOAD_MORE
}