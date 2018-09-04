<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper"> <!--使得ajax请求完成以后再显示，这样默认显示轮播图第一张-->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img"
                     :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    heigth: 37.5%
    padding-bottom: 0
    background: #eee
    .swiper-img
      width: 100%
</style>
