<template lang="pug">
#app
  navigation-bar

  .container
    router-view
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: {
    NavigationBar,
  },
};
</script>

<style lang="sass">
body
  padding-top: 58px
  overflow-x: hidden

.form-control,
.card
  border-radius: 0
</style>
