<template lang="pug">
.main-center.col-xl-6.col-md-8.order-1.order-md-2(v-if="currentProfile")
  profile-info(:profile="currentProfile", :mode="0")
  friend-list(:name="currentProfile.name", :friends="currentProfile.friends")
</template>

<script>
import { mapState, mapActions } from "vuex";

import ProfileInfo from "@/components/ProfileInfo.vue";
import FriendList from "@/components/FriendList.vue";

export default {
  components: {
    ProfileInfo,
    FriendList,
  },

  props: {
    profile: Object,
  },

  computed: {
    ...mapState(["currentProfile"]),
  },

  mounted() {
    this.setCurrentProfileById(parseInt(this.$route.params.id));
  },

  methods: {
    ...mapActions(["setCurrentProfileById"]),
  },
};
</script>

<style lang="sass" scoped>
@media (max-width: 767.98px)
  .main-center
    position: fixed
    top: 48px
    left: 0
    width: 100%
    height: calc(100vh - 48px)
    z-index: 9
    background-color: #edeef0
    padding-top: 12px
    padding-bottom: 12px
    overflow: auto
</style>