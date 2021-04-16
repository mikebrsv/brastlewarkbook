<template lang="pug">
.d-flex.align-items-center.justify-content-center
  .spinner
</template>

<style lang="sass" scoped>
.spinner
  border: 10px solid #e1e1e1
  border-radius: 50%
  border-top: 10px solid #198754
  width: 75px
  height: 75px
  margin: 25px
  animation: spin 1s ease-in-out infinite

/* Safari */
@-webkit-keyframes spin
  0%
    -webkit-transform: rotate(0deg)
  100%
    -webkit-transform: rotate(360deg)

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>