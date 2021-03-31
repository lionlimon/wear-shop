<template>
  <section
    class="banner"
    :style="{ backgroundImage: `url(${image})` }"
    :class="{'banner--dark': dark}"
  >
    <div
      class="container banner__container"
      :class="classes"
    >
      <div class="banner__content">
        <h2 v-if="title" class="banner__title">{{ title }}</h2>
        <p v-if="text" class="banner__text">{{ text }}</p>
        <router-link v-if="btnText && btnLink" :to="btnLink" class="banner__btn btn btn--transparent">
          {{ btnText }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    positionX: {
      type: String,
      default: 'left'
    },
    positionY: {
      type: String,
      default: 'top'
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    },
    btnLink: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return [
        `banner__container--${this.positionX}`,
        `banner__container--${this.positionY}`
      ]
    }
  }
}
</script>

<style lang="scss" src="./banner.scss"></style>