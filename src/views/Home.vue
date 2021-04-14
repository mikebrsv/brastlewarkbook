<template lang="pug">
.container
  .row.flex-nowrap 
    side-bar
    router-view(name="profile")
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
};
</script>