<template lang="pug">
div(
  @click="setCurrentProfileHandler(gnomeProfile)",
  :class="`${currentProfile ? 'col-12' : 'col-lg-6'}`",
  style="padding-top: 12px; padding-bottom: 12px"
)
  .card
    profile-info.card-body(
      :profile="gnomeProfile",
      :name-tag="nameTag",
      :image-class="imageClass"
    )
</template>

<script>
import { mapActions, mapState } from "vuex";

import ProfileInfo from "@/components/ProfileInfo.vue";

export default {
  components: {
    ProfileInfo,
  },

  props: {
    gnomeProfile: Object,
  },

  data() {
    return {
      nameTag: 'h3'
    }
  },

  computed: {
    ...mapState(["currentProfile"]),

    imageClass() {
      return this.currentProfile ? "smaller" : "thumbnail";
    },
  },

  methods: {
    ...mapActions(["setCurrentProfile"]),

    async setCurrentProfileHandler(profile) {
      await this.setCurrentProfile(profile);

      let routeId = this.$route.params.id;

      if (!routeId || profile.id.toString() !== routeId.toString())
        await this.$router.push(`/profile/${profile.id}`);
    },
  },
};
</script>

<style lang="sass" scoped>
.card
  cursor: pointer

img
  object-fit: cover
  object-position: center
  height: 150px
  width: 150px
  transition: height .15s, width .15s

  &.smaller
    height: 100px
    width: 100px
</style>