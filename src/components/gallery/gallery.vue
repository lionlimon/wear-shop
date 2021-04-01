<template>
  <div class="gallery">
    <div class="container" :class="containerClasses">
      <h2 v-if="title && small" class="gallery__title">{{ title }}</h2>

      <div class="gallery__items" :class="listClasses">
        <router-link
          v-for="(image, key) in images"
          :key="key"
          :to="image.link"
          class="gallery__link"
        >
          <photo-item class="gallery__item" :src="image.src" zoom />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoItem from "@/components/photo-item/photo-item";

export default {
  components: { PhotoItem },

  props: {
    images: {
      type: Array,
      default: null
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fourItems: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      containerClasses: {
        'container--no-padding': this.fullscreen,
        'container--big-padding': this.small,
        'gallery__container--small': this.small
      },
      listClasses: {
        'gallery__items--four': this.fourItems
      },
      itemClasses: {
        'full-screen': !this.small
      }
    }
  }
}
</script>

<style lang="scss" src="./gallery.scss"></style>