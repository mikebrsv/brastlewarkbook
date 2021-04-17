<template lang="pug">
.main-filters-sort.col-12.d-flex.justify-content-center.flex-column.flex-md-row
  .fw-bolder Sort:
  .form-check(v-for="(option, index) in sortOptions")
    input.form-check-input(
      type="radio",
      name="filterSort",
      :id="`filterSort-${index}`",
      :value="index"
      v-model="sort"
    )
    label.form-check-label(:for="`filterSort-${index}`") {{ option }}
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["sortOptions"]),

    sort: {
      get() {
        return this.$store.state.sort;
      },
      set(value) {
        this.$store.commit("UPDATE_SORT", value);
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.main-filters-sort
  order: 5
  margin-top: 12px

.form-check
  margin-left: 12px
  margin-right: 12px
</style>