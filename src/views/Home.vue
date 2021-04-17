<template lang="pug">
.container-fluid
  .row(:class="`${currentProfile ? 'flex-md-nowrap' : ''}`")
    side-bar-left
    router-view(name="profile")
    side-bar-right
</template>

<script>
import SideBarLeft from "@/components/SideBarLeft.vue";
import SideBarRight from "@/components/SideBarRight.vue";
import { mapState } from 'vuex';

export default {
  components: {
    SideBarLeft,
    SideBarRight
  },

  computed: {
    ...mapState(["currentProfile"])
  }
};
</script>