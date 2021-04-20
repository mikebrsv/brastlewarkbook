<template lang="pug">
nav.navbar.fixed-top.navbar-expand-lg.navbar-dark.bg-primary
  .container.position-relative
    a.navbar-brand(href="/") Brastlewarkbook
    .close(v-if="currentProfile", @click="removeCurrentProfileHandler") 
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentProfile"]),
  },

  methods: {
    ...mapActions(["removeCurrentProfile"]),

    removeCurrentProfileHandler() {
      this.removeCurrentProfile();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="sass">
.navbar
  padding-top: 4px
  padding-bottom: 4px

.navbar-brand
  font-size: 16px
  padding-top: 8px
  padding-bottom: 8px
  transition: opacity .15s

  &:hover
    opacity: .6

.close
  position: absolute
  right: 12px
  top: 50%
  transform: translateY(-50%)
  width: 32px
  height: 32px
  opacity: 1
  transition: opacity .15s
  cursor: pointer

  &:hover
    opacity: .6

  &:before, &:after
    position: absolute
    left: 15px
    content: ' '
    height: 33px
    width: 4px
    background-color: #333

  &:before
    transform: rotate(45deg)

  &:after
    transform: rotate(-45deg)
</style>