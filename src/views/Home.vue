<template lang="pug">
.row.flex-nowrap  
  side-bar.main-left(:class="`${currentProfile ? 'col-4' : 'col-12'}`")

  .main-right.col-8(v-if="currentProfile")
    router-view(name="profile")
</template>

<script>
import { mapState } from "vuex";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    SideBar,
  },

  computed: mapState(["currentProfile"]),
};
</script>

<style lang="sass" scoped>
.main-left,
.main-right
  transition: width .15s
</style>