<template lang="pug">
#app
  navigation-bar
  loading-spinner(v-if="loading") Loading...
  router-view(v-else)
</template>

<script>
import { mapActions } from "vuex";

import NavigationBar from "@/components/NavigationBar.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  components: {
    NavigationBar,
    LoadingSpinner,
  },

  data() {
    return {
      loading: true,
    };
  },

  async created() {
    await this.setInitialData();
    this.loading = false;
  },

  methods: {
    ...mapActions(["setInitialData"]),
  },
};
</script>

<style lang="sass">
body
  padding-top: 60px
  background-color: #edeef0
  overflow-x: hidden

  &.profile-active
    @media (max-width: 767.98px)
      overflow: hidden

.container-fluid
  max-width: 3000px

.form-control,
.card,
.btn,
.form-select,
.multiselect__tags,
.multiselect__tag,
.multiselect__content-wrapper,
.multiselect__tag-icon
  border-radius: 0

.badge
  font-size: 11px

.multiselect
  min-height: 0

.multiselect__tags
  min-height: 38px
  padding: 0 40px 0 12px
  border: 1px solid #ced4da
  display: flex
  flex-flow: column

.multiselect__tag-icon
  display: flex
  align-items: center
  justify-content: center

  &::after
    margin-top: -3px

.multiselect__tag
  margin-right: 5px
  padding: 5px 26px 5px 10px

.multiselect__tags-wrap
  display: flex
  flex-wrap: wrap
  margin-bottom: -5px
  margin-right: -5px
  padding: 6px 0

.multiselect__content-wrapper
  border: 1px solid #ced4da

.multiselect__placeholder
  margin: 0
  padding: 6px 0
  font-size: 16px
  color: #6c757d

.multiselect__input
  margin: 0
  margin-top: 1.5px
  padding-left: 0
  padding-top: 6px
  padding-bottom: 6px

.multiselect__select
  padding-top: 0
  padding-bottom: 0

.main-left,
.main-center,
.main-right
  transition: width .15s

@media (max-width: 991.98px)
  .container
    max-width: none
</style>
