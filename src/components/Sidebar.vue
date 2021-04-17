<template lang="pug">
.main-left.order-2.order-md-1(
  :class="`${currentProfile ? 'col-lg-4 col-md-5' : 'col-12'}`"
)
  filter-all
  gnome-list
</template>

<script>
import { mapState } from "vuex";
import FilterAll from "@/components/FilterAll.vue";
import GnomeList from "@/components/GnomeList.vue";

export default {
  components: {
    GnomeList,
    FilterAll,
  },

  computed: {
    ...mapState(["currentProfile"]),
  },
};
</script>