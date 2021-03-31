<template>
  <div class="home">
    <banner
      :image="mainBanner.image"
      :title="mainBanner.title"
      :text="mainBanner.text"
      :btn-text="mainBanner.btnText"
      :btn-link="mainBanner.btnLink"
      :position-y="mainBanner.positionY"
    />

    <banner
      :image="secondBanner.image"
      :title="secondBanner.title"
      :text="secondBanner.text"
      :btn-text="secondBanner.btnText"
      :btn-link="secondBanner.btnLink"
    />
  </div>
</template>

<script>
import Banner from "@/components/banner/banner"
import bannerImage from '@/assets/images/banner1.jpg'
import secondBannerImage from '@/assets/images/banner2.jpg'

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
        btnLink: '/new',
        positionY: 'bottom'
      },
      secondBanner: {
        image: secondBannerImage,
        title: 'Vintage inspired',
        text: 'Inspired by the ‘70s and 80’s, we know that if you sift through our vintage inspired collection you’re gonna rock the perfect silhouette. ',
        btnText: 'Shop now',
        btnLink: '/shop'
      }
    }
  }
}
</script>
