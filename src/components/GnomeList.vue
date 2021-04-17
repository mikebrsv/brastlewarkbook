<template lang="pug">
.row.gnome-list-wrapper(:class="`${currentProfile ? 'scrollable' : ''}`")
  gnome-list-item(
    v-for="gnomeProfile in getGnomeDataFilterByAgeSliced",
    :key="gnomeProfile.id",
    :gnome-profile="gnomeProfile"
  )
  .col-12.mt-3.mb-5.d-grid
    button.btn.btn-lg.btn-block.btn-primary(@click="loadMore") Load More
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import GnomeListItem from "@/components/GnomeListItem.vue";

export default {
  components: {
    GnomeListItem,
  },

  computed: {
    ...mapState(["currentProfile"]),
    ...mapGetters(["getGnomeDataFilterByAgeSliced"]),
  },

  methods: {
    ...mapActions(["loadMore"]),
  },
};
</script>

<style lang="sass" scoped>
.row
  --bs-gutter-x: 12px

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