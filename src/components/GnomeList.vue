<template lang="pug">
.row
  gnome-list-item(
    v-for="gnomeProfile in gnomeData",
    :key="gnomeProfile.id",
    :gnome-profile="gnomeProfile"
  )
</template>

<script>
import GnomeListItem from "@/components/GnomeListItem.vue";

export default {
  components: {
    GnomeListItem,
  },

  props: {
    gnomeData: Array,
  },
};
</script>

<style lang="sass" scoped>
</style>