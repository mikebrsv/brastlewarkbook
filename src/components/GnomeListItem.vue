<template lang="pug">
.gnome-list-item(
  @click="setCurrentProfileHandler(gnomeProfile)",
  :class="`${currentProfile ? 'col-12' : 'col-lg-6'}`"
)
  profile-info(:profile="gnomeProfile", :mode="1")
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

  computed: {
    ...mapState(["currentProfile"]),
  },

  methods: {
    ...mapActions(["setCurrentProfileById"]),

    setCurrentProfileHandler(profile) {
      this.setCurrentProfileById(profile.id);

      let routeId = this.$route.params.id;

      if (!routeId || profile.id.toString() !== routeId.toString())
        this.$router.push(`/profile/${profile.id}`);
    },
  },
};
</script>

<style lang="sass" scoped>
.gnome-list-item
  .card
    transition: background-color .15s, box-shadow .15s
    cursor: pointer

    &:hover
      background-color: #f9f9f9
      box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1)

.col-lg-6,
.col-12
  padding-top: 6px
  padding-bottom: 6px

.col-12
  &:nth-child(1)
    padding-top: 0

  &:last-child
    padding-bottom: 0

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