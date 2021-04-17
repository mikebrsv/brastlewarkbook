<template lang="pug">
.main-center.col-lg-6.col-md-7.order-1.order-md-2(v-if="currentProfile")
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
</style>