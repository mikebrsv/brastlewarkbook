<template lang="pug">
.row.justify-content-center.mb-4
  .main-filters(:class="`${currentProfile ? 'col-12' : 'col-lg-10 col-xl-8'}`")
    .card
      .card-body
        .row
          filter-by-name(v-if="!currentProfile", :class="filterClass")
          filter-by-age-range(:class="filterClass")
          filter-by-profession(:class="filterClass")
          filter-by-age-inputs.main-filters-age-inputs(:class="filterClass")
          filter-sort
      .card-footer
        .row
          filter-counter
</template>

<script>
import { mapState } from "vuex";

import FilterByName from "@/components/FilterByName.vue";
import FilterByAgeRange from "@/components/FilterByAgeRange.vue";
import FilterByProfession from "@/components/FilterByProfession.vue";
import FilterByAgeInputs from "@/components/FilterByAgeInputs.vue";
import FilterSort from "@/components/FilterSort.vue";
import FilterCounter from "@/components/FilterCounter.vue";

export default {
  components: {
    FilterByName,
    FilterByAgeRange,
    FilterByProfession,
    FilterByAgeInputs,
    FilterSort,
    FilterCounter,
  },

  computed: {
    ...mapState(["currentProfile"]),

    filterClass() {
      return this.currentProfile ? "col-12" : "col-md-6";
    },
  },
};
</script>

<style lang="sass" scoped>
.main-filters
  transition: width .15s

@media (max-width: 1199.98px)
  .card
    height: 100%
</style>