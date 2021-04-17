<template lang="pug">
.main-right(
  :class="`${currentProfile ? 'col-lg-3 col-md-5 order-3' : 'col-12 order-1'}`"
)
  filter-all
</template>

<script>
import { mapState } from "vuex";
import FilterAll from "@/components/FilterAll.vue";

export default {
  components: {
    FilterAll,
  },

  computed: {
    ...mapState(["currentProfile"]),
  },
};
</script>