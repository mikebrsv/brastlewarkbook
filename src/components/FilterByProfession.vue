<template lang="pug">
.main-filters-professions
  multiselect(
    v-model="professionFilter",
    :multiple="true",
    :options="professions",
    placeholder="Profession"
  )
</template>

<script>
import { mapState } from "vuex";

import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },

  computed: {
    ...mapState(["professions"]),

    professionFilter: {
      get() {
        return this.$store.state.professionFilter;
      },
      set(value) {
        this.$store.commit("UPDATE_PROFESSION_FILTER", value);
      },
    },
  },
};
</script>

<style lang="sass" scoped>
.main-filters-professions.col-12
  order: 2
  margin-bottom: 12px

@media (max-width: 767.98px)
  .main-filters-professions.col-md-6
    order: 2
    margin-bottom: 12px
</style>