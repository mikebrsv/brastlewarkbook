<template lang="pug">
.friends-item
  router-link.friend-link.d-flex.flex-column.align-items-center(
    :to="`/profile/${friend.id}`"
  )
    div
      img.friend-image.rounded-circle(
        :src="friend.thumbnail",
        :alt="friend.name"
      )
    .friend-name.text-center {{ friend.name }}
</template>

<script>
export default {
  props: {
    friend: Object,
  },
};
</script>

<style lang="sass" scoped>
.friends-item
  padding-left: 10px
  padding-right: 10px
  width: 110px

.friend-link
  text-decoration: none
  color: #212529
  font-size: 14px
  line-height: 18px

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