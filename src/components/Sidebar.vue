<template lang="pug">
.main-left.order-2.order-md-1(
  :class="`${currentProfile ? 'col-lg-4 col-md-5' : 'col-12'}`"
)
  .row.justify-content-center.mb-4
    .main-filters(
      :class="`${currentProfile ? 'col-12' : 'col-lg-10 col-xl-8'}`"
    )
      .card
        .card-body
          .row
            filter-by-name(:class="filterClass")
            filter-by-age-range(:class="filterClass")
            filter-by-profession(:class="filterClass")
            filter-by-age-inputs.main-filters-age-inputs(:class="filterClass")
            filter-counter
  .gnome-list-wrapper(:class="`${currentProfile ? 'scrollable' : ''}`")
    gnome-list(
      :gnome-data="getGnomeDataFilterByAgeSliced",
      :class="`${currentProfile ? 'mx-0' : ''}`"
    )
</template>

<script>
import { mapGetters, mapState } from "vuex";
import FilterByName from "@/components/FilterByName.vue";
import FilterByAgeRange from "@/components/FilterByAgeRange.vue";
import FilterByProfession from "@/components/FilterByProfession.vue";
import FilterByAgeInputs from "@/components/FilterByAgeInputs.vue";
import FilterCounter from "@/components/FilterCounter.vue";
import GnomeList from "@/components/GnomeList.vue";

export default {
  components: {
    GnomeList,
    FilterByName,
    FilterByAgeRange,
    FilterByProfession,
    FilterByAgeInputs,
    FilterCounter,
  },

  computed: {
    ...mapState(["currentProfile"]),
    ...mapGetters(["getGnomeDataFilterByAgeSliced"]),

    filterClass() {
      return this.currentProfile ? "col-12" : "col-md-6";
    },
  },
};
</script>

<style lang="sass" scoped>
.main-filters
  transition: width .15s

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
</style>