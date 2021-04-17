<template lang="pug">
.card(:class="mode === 1 ? 'h-100' : ''")
  .card-body(:class="mode === 1 ? 'd-flex flex-column' : ''")
    h4(v-if="mode === 1 && currentProfile") {{ profile.name }}

    .d-flex(:class="mode === 0 ? 'flex-column flex-lg-row' : ''")
      div(:class="mode === 0 ? 'text-center text-lg-start mb-3 mb-lg-0' : ''")
        img.profile-image.rounded-circle(
          :src="profile.thumbnail",
          :alt="profile.name",
          :class="mode === 1 && (currentProfile ? 'smaller' : 'thumbnail')"
        )

      .ps-3.d-flex.flex-column.justify-content-between.flex-grow-1
        div
          h1(v-if="mode === 0") {{ profile.name }}
          h4(v-if="mode === 1 && !currentProfile").mb-0 {{ profile.name }}
          .mb-3 {{ profile.professions.join(', ') }}
        .additional-info.row
          .col-8
            div 
              span.additional-info-title.d-inline-block Age: 
              span.additional-info-badge.badge.bg-success {{ profile.age }}
            div(v-if="showAdditionalInfo") 
              span.additional-info-title.d-inline-block Height: 
              span.additional-info-badge.show-help.badge.bg-secondary(:title="profile.height") {{ profile.height.toFixed(2) }}
            div(v-if="showAdditionalInfo") 
              span.additional-info-title.d-inline-block Weight: 
              span.additional-info-badge.show-help.badge.bg-secondary(:title="profile.weight") {{ profile.weight.toFixed(2) }}
          .col-4.d-flex.flex-column.align-items-center.justify-content-end(v-if="showAdditionalInfo")
            div Hair color:
            .badge.d-block.w-100(:style="{backgroundColor: profile.hair_color.toLowerCase()}") {{ profile.hair_color }}
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    profile: Object,
    mode: Number,
  },

  computed: {
    ...mapState(["currentProfile"]),

    showAdditionalInfo() {
      return this.mode === 0 || (this.mode === 1 && !this.currentProfile)
        ? true
        : false;
    },
  },
};
</script>

<style lang="sass" scoped>

.additional-info-title
  width: 55px

.additional-info-badge
  min-width: 55px

.profile-image
  object-fit: cover
  object-position: center
  width: 250px
  height: 250px
  transition: height .15s, width .15s

  &.thumbnail
    width: 150px
    height: 150px

  &.smaller
    height: 100px
    width: 100px

.additional-info
  font-size: 14px

.show-help
  cursor: help
</style>