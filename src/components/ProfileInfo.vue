<template lang="pug">
.card(:class="mode === 1 ? 'h-100' : 'border-bottom-md-none'")
  .card-body(:class="mode === 1 ? 'd-flex flex-column' : ''")
    h4.d-block.d-sm-none(v-if="mode === 1 && !currentProfile") {{ profile.name }}
    h5(v-else-if="mode === 1 && currentProfile") {{ profile.name }}

    .d-flex(:class="mode === 0 ? 'flex-column flex-lg-row' : ''")
      div(:class="mode === 0 ? 'text-center text-lg-start mb-3 mb-lg-0' : ''")
        img.profile-image.rounded-circle(
          :src="profile.thumbnail.replace('http://', 'https://')",
          :alt="profile.name",
          :class="mode === 1 ? (currentProfile ? 'thumbnail smaller' : 'thumbnail') : 'profile-image-main'"
        )

      .d-flex.flex-column.justify-content-between.flex-grow-1(
        :class="mode === 0 ? 'ps-lg-3' : 'ps-3'"
      )
        div
          h1.text-lg-start.text-center(v-if="mode === 0") {{ profile.name }}
          h4.mb-0.d-none.d-sm-block(v-if="mode === 1 && !currentProfile") {{ profile.name }}
          .professions.mb-3(v-if="mode === 1") {{ profile.professions.join(', ') }}
          .mb-3(v-if="mode === 0")
            template(v-for="(profession, index) in profile.professions")
              span.profession(
                title="Add to filter",
                :key="index",
                @click="pushProfessionFilter(profession)"
              ) {{ profession.trim() }}
              | {{ commaSeparate(profile.professions, index) }}
        .additional-info.row
          .col-8
            div 
              span.additional-info-title.d-inline-block Age:
              span.additional-info-badge.badge.bg-success {{ profile.age }}
            div(
              :class="`${mode === 1 ? 'd-none d-md-block' : ''}`",
              v-if="showAdditionalInfo"
            ) 
              span.additional-info-title.d-inline-block Height:
              span.additional-info-badge.show-help.badge.bg-secondary(
                :title="profile.height"
              ) {{ profile.height.toFixed(2) }}
            div(
              :class="`${mode === 1 ? 'd-none d-md-block' : ''}`",
              v-if="showAdditionalInfo"
            ) 
              span.additional-info-title.d-inline-block Weight:
              span.additional-info-badge.show-help.badge.bg-secondary(
                :title="profile.weight"
              ) {{ profile.weight.toFixed(2) }}
          .col-4.flex-column.align-items-center.justify-content-end(
            :class="`${mode === 1 ? 'd-none d-md-flex' : 'd-flex'}`",
            v-if="showAdditionalInfo"
          )
            div Hair color:
            .badge.d-block.w-100(
              :style="{ backgroundColor: profile.hair_color.toLowerCase() }"
            ) {{ profile.hair_color }}
</template>

<script>
import { mapActions, mapState } from "vuex";

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

    showAdditionalInfo2() {
      return this.mode === 0 || (this.mode === 1 && !this.currentProfile)
        ? true
        : false;
    },
  },

  methods: {
    ...mapActions(["pushProfessionFilter"]),

    commaSeparate(arr, index) {
      if (index !== arr.length - 1) {
        return ", ";
      } else {
        return "";
      }
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

.profession
  cursor: pointer

  &:hover
    color: #0d6efd

.additional-info
  font-size: 14px
  transition: color .15s

.show-help
  cursor: help

@media (min-width: 768px)
  .profile-image
    &.smaller
      height: 100px
      width: 100px

@media (max-width: 767.98px)
  .border-bottom-md-none
    border-bottom-color: #fff

@media (max-width: 575.98px)
  .profile-image
    &.thumbnail
      height: 90px
      width: 90px

  .profile-image-main
    width: 200px
    height: 200px

  .professions
    font-size: 14px
</style>