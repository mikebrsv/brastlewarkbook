<template lang="pug">
.main-filters-age-inputs
  .row.gx-2
    .col-6(v-for="(age, i) in ageFilter")
      input.form-control.text-center(
        type="text",
        v-model="ageFilter[i]",
        @input="validateAgeInput($event, i)"
      )
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["ageFilter"]),
  },

  methods: {
    ...mapActions(["copeAgeFilter"]),

    validateAgeInput(e, i) {
      let char = String.fromCharCode(e.keyCode);
      this.copeAgeFilter(i);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },
  },
};
</script>

<style lang="sass" scoped>
.main-filters-age-inputs.col-12
  order: 4

@media (max-width: 767.98px)
  .main-filters-age-inputs.col-md-6
    order: 4
</style>