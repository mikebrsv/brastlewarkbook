<template lang="pug">
.main-left(
  :class="`${currentProfile ? 'col-xl-3 col-md-4 order-1' : 'col-12 order-2'}`"
)
  .row(v-if="currentProfile")
    .col-12
      .card
        .card-body
          filter-by-name(:class="`${currentProfile ? 'col-12' : 'col-md-6'}`")
  gnome-list
</template>

<script>
import { mapState } from "vuex";
import FilterByName from "@/components/FilterByName.vue";
import GnomeList from "@/components/GnomeList.vue";

export default {
  components: {
    GnomeList,
    FilterByName
  },

  computed: {
    ...mapState(["currentProfile"]),
  },
};
</script>

<style lang="sass" scoped>
.row
  margin-bottom: 12px
</style>