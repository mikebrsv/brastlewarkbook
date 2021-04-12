<template lang="pug">
#app
  Navbar
  .container
    .row
      .col-md-3
        Sidebar
      .col-md-9
        router-view
</template>

<script>
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Sidebar,
    Navbar,
  },

  created() {
    axios({
      method: "GET",
      url: `https://bitbucket.org/fenix-group-international/frontend-test/raw/80d1664d5db3a516537a3bbbb4f3fca968d18b2e/data.json`,
    })
      .then((response) => {
        console.log("response", response.data.Brastlewark);
      })
      .catch((error) => {
        console.error(error.response);
      })
      .finally(() => {});
  },
};
</script>

<style lang="sass">
body
  padding-top: 58px
</style>
