<template lang="pug">
.profile-friends.card
  .card-body
    h3.friends-list-title {{ name }}'s Friends

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
.profile-friends
  margin-top: 12px

.friends-list-title
  border-bottom: 1px solid rgba(0,0,0,.125)
  padding-bottom: 6px
  margin-bottom: 15px

.friends-list
  margin-left: -10px
  margin-right: -10px
</style>