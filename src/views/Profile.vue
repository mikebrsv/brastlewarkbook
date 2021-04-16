<template lang="pug">
.main-right.col-8(v-if="currentProfile")
  profile-info(:profile="currentProfile", :name-tag="nameTag")
  friend-list(
    :name="currentProfile.name",
    :friends="currentProfile.friends"
  )
</template>

<script>
import { mapState } from "vuex";

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

  data() {
    return {
      nameTag: "h1",
    };
  },

  computed: mapState(["currentProfile"]),
};
</script>

<style lang="sass" scoped>
</style>