<template lang="pug">
profile-info(:profile="currentProfile", :name-tag="nameTag")
</template>

<script>
import { mapState } from "vuex";

import ProfileInfo from "@/components/ProfileInfo.vue";

export default {
  components: {
    ProfileInfo,
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

  // @TODO
  // mounted() {}
};
</script>

<style lang="sass" scoped>
</style>