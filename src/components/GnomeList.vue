<template lang="pug">
.row
  gnome-list-item(
    v-for="gnomeProfile in gnomeData",
    :key="gnomeProfile.id",
    :gnome-profile="gnomeProfile"
  )
  .col-12.mt-3.mb-5.d-grid
    button.btn.btn-lg.btn-block.btn-primary(@click="loadMore") Load More
</template>

<script>
import { mapActions } from "vuex";

import GnomeListItem from "@/components/GnomeListItem.vue";

export default {
  components: {
    GnomeListItem,
  },

  props: {
    gnomeData: Array,
  },

  methods: {
    ...mapActions(["loadMore"]),
  }
};
</script>

<style lang="sass" scoped>
</style>