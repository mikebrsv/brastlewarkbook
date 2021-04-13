<template lang="pug">
#app
  Navbar
  .container
    .row.flex-nowrap.main-row
      //- .col-md-3
      .col-12
        Sidebar
      //- .col-md-9
      .col-0
        router-view
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style lang="sass">
body
  padding-top: 58px
  overflow-x: hidden

.main-row
  overflow: hidden

.col-0
  flex: 0 0 auto
  width: 0
</style>
