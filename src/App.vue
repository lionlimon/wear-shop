<template>
  <div id="app">
    <main-header />

    <router-view/>
  </div>
</template>

<script>
import MainHeader from "@/components/main-header/main-header";

export default {
  components: {MainHeader}
}
</script>

<style lang="scss" src="./assets/scss/style.scss"></style>