<template lang="pug">
.row
  ProfileItem(v-for="gnomeProfile in gnomeData", :key="gnomeProfile.id", :gnomeProfile="gnomeProfile")
</template>

<script>
import ProfileItem from "@/components/ProfileItem.vue";

export default {
  name: "ProfileList",

  props: {
    gnomeData: Array,
  },

  components: {
    ProfileItem,
  },
};
</script>

<style lang="sass" scoped>
.row
  margin-top: -12px
  margin-bottom: -12px
</style>