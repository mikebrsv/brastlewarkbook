<template lang="pug">
div
  h1 {{ currentProfile && currentProfile.name }}
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    profile: Object,
  },

  computed: mapState(["currentProfile"]),

  // @TODO
  // mounted() {}
};
</script>