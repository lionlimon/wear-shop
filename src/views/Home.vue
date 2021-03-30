<template>
  <div class="home">
    <banner
      :image="mainBanner.image"
      :title="mainBanner.title"
      :text="mainBanner.text"
      :btn-text="mainBanner.btnText"
      :btn-link="mainBanner.btnLink"
    />
  </div>
</template>

<script>
import Banner from "@/components/banner/banner"
import bannerImage from '@/assets/images/banner1.jpg'

export default {
  name: 'Home',
  components: {Banner},

  data() {
    return {
      mainBanner: {
        image: bannerImage,
        title: 'New collection',
        text: 'Our easiest chuck-on-and-go staples come with a serious style heritage that’s liberating, sexy, comfy and supremely cool.',
        btnText: 'Shop new arrivals',
        btnLink: '/new'
      }
    }
  }
}
</script>
