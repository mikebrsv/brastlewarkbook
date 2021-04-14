<template lang="pug">
div
  h3 {{ name }}'s Friends

  .friends-list.d-flex.flex-wrap
    profile-friends-item(
      v-for="friend in getFriends(friends)",
      :friend="friend",
      :key="friend.id"
    )

  div(v-if="getFriends(friends).length === 0") {{ name }} hasn't added any friends 
    span.fw-bold yet
    | ...
</template>

<script>
import { mapGetters } from "vuex";

import ProfileFriendsItem from "./ProfileFriendsItem";

export default {
  components: {
    ProfileFriendsItem,
  },

  props: {
    name: String,
    friends: Array,
  },

  computed: {
    ...mapGetters(["getFriends"]),
  },
};
</script>

<style lang="sass" scoped>
.friends-list
  margin-left: -10px
  margin-right: -10px
</style>