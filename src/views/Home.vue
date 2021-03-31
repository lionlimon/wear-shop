<template>
  <div class="home">
    <banner
      :image="mainBanner.image"
      :title="mainBanner.title"
      :text="mainBanner.text"
      :btn-text="mainBanner.btnText"
      :btn-link="mainBanner.btnLink"
      :vertical="mainBanner.vertical"
    />

    <banner
      :image="secondBanner.image"
      :title="secondBanner.title"
      :text="secondBanner.text"
      :btn-text="secondBanner.btnText"
      :btn-link="secondBanner.btnLink"
    />

    <gallery :images="galleryItems" fullscreen />

    <banner
      :image="thirdBanner.image"
      :title="thirdBanner.title"
      :text="thirdBanner.text"
      :btn-text="thirdBanner.btnText"
      :btn-link="thirdBanner.btnLink"
    />
  </div>
</template>

<script>
import Banner from "@/components/banner/banner"
import bannerImage from '@/assets/images/banner1.jpg'
import secondBannerImage from '@/assets/images/banner2.jpg'
import thirdBannerImage from '@/assets/images/banner3.jpg'
import image1 from '@/assets/images/img1.jpg'
import image2 from '@/assets/images/img2.jpg'
import image3 from '@/assets/images/img3.jpg'
import Gallery from "@/components/gallery/gallery";

export default {
  name: 'Home',
  components: {Gallery, Banner},

  data() {
    return {
      mainBanner: {
        image: bannerImage,
        title: 'New collection',
        text: 'Our easiest chuck-on-and-go staples come with a serious style heritage that’s liberating, sexy, comfy and supremely cool.',
        btnText: 'Shop new arrivals',
        btnLink: '/new',
        vertical: 'bottom'
      },
      secondBanner: {
        image: secondBannerImage,
        title: 'Vintage inspired',
        text: 'Inspired by the 70’s and 80’s, we know that if you sift through our vintage inspired collection you’re gonna rock the perfect silhouette.',
        btnText: 'Shop now',
        btnLink: '/shop'
      },
      galleryItems: [
        {
          src: image1,
          link: '#'
        },
        {
          src: image2,
          link: '#'
        },
        {
          src: image3,
          link: '#'
        },
      ],
      thirdBanner: {
        image: thirdBannerImage,
        title: 'Sustainable denim',
        text: 'What started as a true ‘80s vintage pair of jeans,  finished as a re-energised, wider leg vintage jean with versatile detailing.',
        btnText: 'Shop denim',
        btnLink: '/shop'
      },
    }
  }
}
</script>
