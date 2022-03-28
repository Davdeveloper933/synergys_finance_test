<template>
  <div class="section-video">
    <div class="container">
      <div class="section-video__wrapper">
        <div class="section-video__title">
          <picture>
            <source media="(max-width:425px)" srcset="img/ellipse_mobile.png">
            <img class="section-video__ellipse" src="img/ellipse_desktop.png" alt="">
          </picture>
          <section-title class="small">
            watch video about
            <template #stroked-text>
              our invest strategy
            </template>
          </section-title>
        </div>
        <div class="section-video__video-block">
          <iframe src="https://www.youtube.com/embed/oSzRI5y6tK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="section-video__video-block__dark-img">
            <img src="img/dark.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "~/components/ui/ui-section-title.global";
export default {
  name: "WatchVideoSection",
  components: {SectionTitle}
};
</script>

<style lang="scss" scoped>

.section-video {
  padding-top: 73px;
  padding-bottom: 96px;
  overflow: hidden;
  &__title {
    position: relative;
    @media screen and (max-width: 992px) {
      width: 100%;
    }
    .section-title {
      @media screen and (max-width: 992px) {
        width: 67vw;
      }
      @media screen and (max-width: 767px) {
        width: 75vw;
      }
      @media screen and (max-width: 425px) {
        width: 100%;
      }
    }
  }
  &__ellipse {
    position: absolute;
    z-index: -1;
    top: 19vh;
    left: -4vw;
    @media screen and (max-width: 425px) {
      left: -6vw;
    }
  }
  &__wrapper {
    display: flex;
    @media screen and (max-width: 992px) {
      flex-direction: column;
      width: fit-content;
      margin: 0 auto;
    }
    @media screen and (max-width: 575px) {
      width: 100%;
    }
  }
  &__video-block {
    margin-top: 115px;
    position: relative;
    width: 100%;
    iframe {
      border-radius: 16px;
      width: 590px;
      height: 411px;
      @media screen and (max-width: 767px) {
        //width: 530px;
        width: 100%;
      }
      @media screen and (max-width: 575px) {
        height: 300px;
      }
    }
    @media screen and (max-width: 992px) {
      width: 100%;
      margin-top: 50px;
      //display: flex;
      //justify-content: center;
    }
    &__dark-img {
      position: absolute;
      top: 49%;
      right: -9vw;
      z-index: -1;
      @media screen and (max-width: 1200px) {
        //right: -13vw;
      }
      @media screen and (max-width: 425px) {
        top: 49%;
        right: -26vw;
      }
    }
  }
}

</style>
