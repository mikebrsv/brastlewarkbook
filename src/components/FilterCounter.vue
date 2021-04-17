<template lang="pug">
.main-filters-counter.col-12.text-center Found: 
  |
  span.fw-bolder {{ getGnomeDataFiltered.length }} 
  | ouf of 
  span.fw-bolder {{ getGnomeData.length }} 
  | in total
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getGnomeDataFilterByAge", "getGnomeDataFilterByProfession", "getGnomeDataFiltered", "getGnomeData"]),
  },
};
</script>

<style lang="sass" scoped>
.main-filters-counter
  order: 5
  margin-top: 12px
</style>