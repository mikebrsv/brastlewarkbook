<template lang="pug">
div(
  @click="setCurrentProfileHandler(gnomeProfile)",
  :class="`${currentProfile ? 'col-12' : 'col-lg-6'}`",
  style="padding-top: 12px; padding-bottom: 12px"
)
  .card
    .card-body.d-flex
      div
        img.rounded-circle(
          :src="gnomeProfile.thumbnail",
          :alt="gnomeProfile.name",
          :class="`${currentProfile ? 'smaller' : ''}`"
        )
      .ps-3.d-flex.flex-column.justify-content-between.flex-grow-1
        div
          h5.mb-0 {{ gnomeProfile.name }}
          div {{ gnomeProfile.professions.join(', ') }}
        .row(style="font-size: 14px")
          .col-8
            div Age: {{ gnomeProfile.age }}
            div Height: {{ gnomeProfile.height }} Weight: {{ gnomeProfile.weight }}
          .col-4.text-center
            div Hair color:
            div {{ gnomeProfile.hair_color }}
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    gnomeProfile: Object,
  },

  computed: {
    ...mapState(["currentProfile"]),
  },

  methods: {
    ...mapActions(["setCurrentProfile"]),

    async setCurrentProfileHandler(profile) {
      await this.setCurrentProfile(profile);

      if (profile.id.toString() !== this.$route.params.id.toString())
        await this.$router.push(`/profile/${profile.id}`);
    },
  },
};
</script>

<style lang="sass" scoped>
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