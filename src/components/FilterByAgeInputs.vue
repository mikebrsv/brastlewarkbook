<template lang="pug">
.main-filters-age-inputs
  .row.gx-2
    .col-6(v-for="(age, i) in getAgeRange")
      input.form-control.text-center(
        type="text",
        v-model="getAgeRange[i]",
        @input="validateAgeInput($event, i)"
      )
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAgeRange"]),
  },

  methods: {
    ...mapActions(["copeAgeRange"]),

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
.main-filters-age-inputs.col-12
  order: 4

@media (max-width: 767.98px)
  .main-filters-age-inputs.col-md-6
    order: 4
</style>