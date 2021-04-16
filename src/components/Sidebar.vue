<template lang="pug">
.main-left(:class="`${currentProfile ? 'col-4' : 'col-12'}`")
  .row.justify-content-center.mb-4
    .main-left-search(
      :class="`${currentProfile ? 'col-12' : 'col-lg-10 col-xl-8'}`"
    )
      .card
        .card-body
          .mb-3
            input.form-control(type="text", placeholder="Search by name...")
          .row
            .col-6
              multiselect(
                v-model="selected",
                :multiple="true",
                :options="professions",
                placeholder="Profession"
              )
            .col-6
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
              .row.gx-2
                .col-6(v-for="(age, i) in getAgeRange")
                  input.form-control.text-center(
                    type="text",
                    v-model="getAgeRange[i]",
                    @input="validateAgeInput($event, i)"
                  )

  .profile-list-wrapper(:class="`${currentProfile ? 'scrollable' : ''}`")
    gnome-list(
      :gnome-data="getGnomeData",
      :class="`${currentProfile ? 'mx-0' : ''}`"
    )
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
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
    ...mapGetters(["getGnomeData", "getAgeRange"]),
  },

  created() {
    this.setInitialData();
  },

  methods: {
    ...mapActions(["setInitialData"]),

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
.main-left-search
  transition: width .15s

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

.profile-list-wrapper
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
</style>