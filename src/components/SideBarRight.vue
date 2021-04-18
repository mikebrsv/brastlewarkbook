<template lang="pug">
.main-right(
  :class="`${currentProfile ? 'col-lg-3 col-md-5 order-md-3 slidable' : 'col-12 order-1'} ${showSidebar ? 'active' : ''}`"
)
  .filters-button.d-xl-none.d-md-flex.d-none.align-items-center.justify-content-center(
    @click="toggleSidebar"
  )
    font-awesome-icon(:icon="['fas', 'filter']")
  filter-all
</template>

<script>
import { mapState } from "vuex";

import FilterAll from "@/components/FilterAll.vue";

export default {
  components: {
    FilterAll,
  },

  data() {
    return {
      showSidebar: false,
    };
  },

  computed: {
    ...mapState(["currentProfile"]),
  },

  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<style lang="sass" scoped>
@media (max-width: 1199.98px) and (min-width: 768px)
  .main-right
    &.slidable
      position: fixed
      width: 350px
      right: -350px
      padding: 0
      transition: right .15s
      top: 48px
      height: calc(100vh - 48px)

      &.active
        right: -1px
        box-shadow: -5px 40px 5px 0 rgba(5,5,5,.16)

      .row
        height: 100%

  .filters-button
    position: absolute
    z-index: 9
    top: 0
    left: -39px
    width: 40px
    height: 40px
    background-color: #fff
    border: 1px solid rgba(0,0,0,.125)
    border-right-color: #fff
    cursor: pointer
    box-shadow: -3px 3px 5px 0 rgba(5,5,5,.16)
</style>