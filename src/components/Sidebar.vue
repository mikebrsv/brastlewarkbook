<template lang="pug">
.main-left(:class="`${currentProfile ? 'col-4' : 'col-12'}`")
  .row.justify-content-center
    .main-left-search.pt-1.pb-5(:class="`${currentProfile ? 'col-12' : 'col-lg-10 col-xl-8'}`")
      input.form-control(type="text")

  profile-list(:gnome-data="gnomeData")
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import ProfileList from "@/components/ProfileList.vue";

export default {
  components: {
    ProfileList,
  },

  computed: {
    ...mapGetters({
      gnomeData: "getGnomeData",
    }),

    ...mapState(["currentProfile"]),
  },

  created() {
    this.getGnomeData();
  },

  methods: {
    ...mapActions(["getGnomeData"]),
  },
};
</script>

<style lang="sass" scoped>
.main-left-search
  transition: width .15s
</style>