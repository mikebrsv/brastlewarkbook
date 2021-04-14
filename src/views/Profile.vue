<template lang="pug">
.main-right.col-8(v-if="currentProfile")
  profile-info(:profile="currentProfile", :name-tag="nameTag")
  profile-friends(
    :name="currentProfile.name",
    :friends="currentProfile.friends"
  )
</template>

<script>
import { mapState } from "vuex";

import ProfileInfo from "@/components/ProfileInfo.vue";
import ProfileFriends from "@/components/ProfileFriends.vue";

export default {
  components: {
    ProfileInfo,
    ProfileFriends,
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