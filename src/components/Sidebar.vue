<template lang="pug">
div
  .row.justify-content-center
    .col-lg-10.col-xl-8.pt-1.pb-5
      input(type='text').form-control

  ProfileList(:gnomeData="gnomeData")
    
</template>

<script>
import ProfileList from "@/components/ProfileList.vue";

export default {
  components: {
    ProfileList
  },

  computed: {
    gnomeData() {
      // console.log(this.$store.state.gnomeData)
      return this.$store.state.gnomeData;
    },
  },

  created() {
    this.$store.dispatch("getGnomeData");
  },
}
</script>