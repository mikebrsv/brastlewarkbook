<template lang="pug">
.friends-item.d-flex.flex-column.align-items-center(
  @click="friendsItemClickHandler(friend.id)"
)
  img.friend-image.rounded-circle(:src="friend.thumbnail", :alt="friend.name")
  .friend-name.text-center {{ friend.name }}
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    friend: Object,
  },

  methods: {
    ...mapActions(["setCurrentProfileById"]),

    friendsItemClickHandler(id) {
      this.$router.push(`/profile/${id}`);
      this.setCurrentProfileById(id);
    },
  },
};
</script>

<style lang="sass" scoped>
.friends-item
  padding: 10px
  width: 110px
  font-size: 14px
  line-height: 18px
  cursor: pointer

.friend-image
  object-fit: cover
  object-position: center
  width: 70px
  height: 70px

.friend-name
  white-space: break-space
  width: min-content
  margin-top: 10px
</style>