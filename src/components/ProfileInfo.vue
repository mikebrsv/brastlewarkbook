<template lang="pug">
.card
  .card-body.d-flex
    div
      img.profile-image.rounded-circle(
        :src="profile.thumbnail",
        :alt="profile.name",
        :class="imageClass"
      )

    .ps-3.d-flex.flex-column.justify-content-between.flex-grow-1
      div
        component(:is="nameTag") {{ profile.name }}
        div {{ profile.professions.join(', ') }}
      .row(style="font-size: 14px")
        .col-8
          div Age: {{ profile.age }}
          div Height: {{ profile.height }} Weight: {{ profile.weight }}
        .col-4.text-center
          div Hair color:
          div {{ profile.hair_color }}
</template>

<script>
export default {
  props: {
    profile: Object,
    nameTag: String,
    imageClass: String,
  },
};
</script>

<style lang="sass" scoped>
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
</style>