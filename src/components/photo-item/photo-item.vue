<template>
  <div class="photo-item" :class="{ 'photo-item--zoom': zoom }">
    <img
      :src="src"
      alt=""
      class="photo-item__img"
      :class="{ 'photo-item__img--zoom': zoom }"
    >
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    zoom: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" src="./photo-item.scss"></style>