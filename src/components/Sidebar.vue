<template lang="pug">
.main-left.order-2.order-md-1(:class="`${currentProfile ? 'col-lg-4 col-md-5' : 'col-12'}`")
  .row.justify-content-center.mb-4
    .main-filters(
      :class="`${currentProfile ? 'col-12' : 'col-lg-10 col-xl-8'}`"
    )
      .card
        .card-body
          .row
            .main-filters-name(:class="`${currentProfile ? 'col-12' : 'col-md-6'}`")
              input.form-control(type="text", placeholder="Search by name..." v-model="filterByName")

            .main-filters-age-range(:class="`${currentProfile ? 'col-12' : 'col-md-6'}`")
              label.form-label Age
              .age-range-wrapper.position-relative
                input.age-range.form-range.position-absolute(
                  v-for="(age, i) in getAgeRange",
                  type="range",
                  :min="ageSpectrum[0]",
                  :max="ageSpectrum[1]",
                  v-model="getAgeRange[i]",
                  @input="copeAgeRange(i)"
                )

            .main-filters-professions(:class="`${currentProfile ? 'col-12' : 'col-md-6'}`")
              multiselect(
                v-model="selected",
                :multiple="true",
                :options="professions",
                placeholder="Profession"
              )

            .main-filters-age-inputs(:class="`${currentProfile ? 'col-12' : 'col-md-6'}`")
              .row.gx-2
                .col-6(v-for="(age, i) in getAgeRange")
                  input.form-control.text-center(
                    type="text",
                    v-model="getAgeRange[i]",
                    @input="validateAgeInput($event, i)"
                  )

  .gnome-list-wrapper(:class="`${currentProfile ? 'scrollable' : ''}`")
    gnome-list(
      :gnome-data="getGnomeDataFilterByName",
      :class="`${currentProfile ? 'mx-0' : ''}`"
    )
</template>

<script>
import { mapGetters, mapState } from "vuex";
import GnomeList from "@/components/GnomeList.vue";
import Multiselect from "vue-multiselect";

export default {
  components: {
    GnomeList,
    Multiselect,
  },

  data() {
    return {
      selected: null,
    };
  },

  computed: {
    ...mapState(["professions", "ageSpectrum", "currentProfile"]),
    ...mapGetters(["getAgeRange", "getGnomeDataFilterByName"]),

    filterByName: {
    get () {
      return this.$store.state.liveSearch
    },
    set (value) {
      this.$store.commit('UPDATE_LIVE_SEARCH', value)
    }
  }
  },

  methods: {
    copeAgeRange(i) {
      if (parseInt(this.getAgeRange[0]) > parseInt(this.getAgeRange[1])) {
        this.$store.commit("COPE_AGE_RANGE", {
          i: i,
          payload: i === 0 ? this.getAgeRange[1] : this.getAgeRange[0],
        });
      }
    },

    validateAgeInput(e, i) {
      let char = String.fromCharCode(e.keyCode);
      this.copeAgeRange(i);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },
  },
};
</script>

<style lang="sass" scoped>
.main-filters
  transition: width .15s

.main-filters-name.col-12
  order: 1
  margin-bottom: 12px

.main-filters-age-range.col-12
  order: 3

.main-filters-professions.col-12
  order: 2
  margin-bottom: 12px

.main-filters-age-inputs.col-12
  order: 4

.age-range-wrapper
  margin-bottom: 36px

.age-range
  -webkit-appearance: none
  width: 100%
  position: absolute

  &:focus
    outline: none

  &::-webkit-slider-runnable-track
    width: 100%
    height: 5px
    cursor: pointer
    animate: 0.2s
    border-radius: 1px
    box-shadow: none
    border: 0

  &::-webkit-slider-thumb
    z-index: 2
    position: relative
    height: 18px
    width: 18px
    border-radius: 25px
    cursor: pointer
    -webkit-appearance: none
    margin-top: -7px
    transition: background-color .15s

    &:hover
      background-color: #0b5ed7

.gnome-list-wrapper
  margin-top: -6px

  &.scrollable
    height: 100vh
    overflow-y: auto
    margin-top: 0px

    &::-webkit-scrollbar
      width: 10px

    &::-webkit-scrollbar-track
      background: #e1e1e1

    &::-webkit-scrollbar-thumb
      background-color: #a0a0a0

      &:hover
        background-color: #555

@media (max-width: 767.98px)
  .main-filters-name.col-md-6
    order: 1
    margin-bottom: 12px

  .main-filters-age-range.col-md-6
    order: 3

  .main-filters-professions.col-md-6
    order: 2
    margin-bottom: 12px

  .main-filters-age-inputs.col-md-6
    order: 4
</style>