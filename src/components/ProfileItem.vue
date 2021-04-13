<template lang="pug">
.col-lg-6
  .card
    .card-body.d-flex
      div
        img.rounded-circle(:src="gnomeProfile.thumbnail", alt="")
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
export default {
  name: "ProfileItem",

  props: {
    gnomeProfile: Object,
  },
};
</script>

<style lang="sass" scoped>
.col-lg-6
  padding-top: 12px
  padding-bottom: 12px

img
  object-fit: cover
  object-position: center
  height: 150px
  width: 150px
</style>