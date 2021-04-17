<template lang="pug">
.gnome-list-wrapper.row(:class="`${currentProfile ? 'scrollable' : ''}`")
  gnome-list-item(
    v-for="gnomeProfile in getGnomeDataFilteredSliced",
    :key="gnomeProfile.id",
    :gnome-profile="gnomeProfile"
  )
  .col-12.text-center(v-if="getGnomeDataFilteredSliced.length === 0")
    .fs-4 No gnomes found
    div Maybe try another village?..
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
    ...mapGetters(["getGnomeDataFilteredSliced"]),
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
    height: calc(100vh - 144px)
    overflow-y: auto
    margin-top: 0px
    margin-bottom: 0px
    --bs-gutter-x: 0

    &::-webkit-scrollbar
      width: 10px

    &::-webkit-scrollbar-track
      background: #e1e1e1

    &::-webkit-scrollbar-thumb
      background-color: #a0a0a0

      &:hover
        background-color: #555
</style>