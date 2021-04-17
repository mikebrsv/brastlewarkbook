<template lang="pug">
.main-filters-name
  input.form-control(
    type="text",
    placeholder="Search by name...",
    v-model="filterByName"
  )
</template>

<script>
export default {
  computed: {
    filterByName: {
      get() {
        return this.$store.state.nameFilter;
      },
      set(value) {
        this.$store.commit("UPDATE_NAME_FILTER", value);
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.main-filters-name.col-12
  order: 1
  margin-bottom: 12px

@media (max-width: 767.98px)
  .main-filters-name.col-md-6
    order: 1
    margin-bottom: 12px
</style>