<template lang="pug">
.row
  profile-list-item(
    v-for="gnomeProfile in gnomeData",
    :key="gnomeProfile.id",
    :gnome-profile="gnomeProfile"
  )
</template>

<script>
import ProfileListItem from "@/components/ProfileListItem.vue";

export default {
  components: {
    ProfileListItem,
  },

  props: {
    gnomeData: Array,
  },
};
</script>

<style lang="sass" scoped>
.row
  margin-top: -12px
  margin-bottom: -12px
</style>