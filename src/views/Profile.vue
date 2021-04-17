<template lang="pug">
.main-right.col-lg-8.col-md-7.order-1.order-md-2(v-if="currentProfile")
  profile-info(:profile="currentProfile", :mode="0")
  friend-list(:name="currentProfile.name", :friends="currentProfile.friends")
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

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
    ...mapGetters(["getProfileById"]),
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