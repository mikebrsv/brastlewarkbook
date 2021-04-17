<template lang="pug">
.main-filters-age-range
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
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["ageSpectrum"]),
    ...mapGetters(["getAgeRange"]),
  },

  methods: {
    ...mapActions(["copeAgeRange"]),
  },
};
</script>

<style lang="sass" scoped>
.age-range-wrapper
  margin-bottom: 36px

.main-filters-age-range.col-12
  order: 3

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

@media (max-width: 767.98px)
  .main-filters-age-range.col-md-6
    order: 3
</style>