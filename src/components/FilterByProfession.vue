<template lang="pug">
.main-filters-professions
  multiselect(
    v-model="selected",
    :multiple="true",
    :options="professions",
    placeholder="Profession",
    @input="updateProfessionFilter"
  )
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Multiselect,
  },

  data() {
    return {
      selected: null,
    };
  },

  computed: {
    ...mapState(["professions", "professionFilter"]),
  },

  methods: {
    ...mapActions(["updateProfessionFilter"]),
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