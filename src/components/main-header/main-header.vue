<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <navbar />

        <main-logo />

        <tools />
      </div>
    </div>
  </header>
</template>

<script>
import MainLogo from "@/components/main-logo/main-logo";
import Navbar from "@/components/main-header/navbar/navbar";
import Tools from "@/components/main-header/tools/tools";

export default {
  components: {Tools, Navbar, MainLogo}
}
</script>

<style lang="scss" src="./main-header.scss"></style>