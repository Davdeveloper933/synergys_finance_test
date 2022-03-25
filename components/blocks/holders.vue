<template>
  <div class="section-holders section-padding-top">
    <div class="section-holders__absolute-img">
      <img class="ellipse" :src="require(`~/assets/img/holders_ellipse.png`)" alt="">
<!--      <img class="ball" :src="require(`~/assets/img/yields_ellipse.png`)" alt="">-->
    </div>
    <div class="container">
      <div class="section-holders__flex-box">
        <div class="section-holders__text-wrapper">
          <div class="section-holders__title">
            <span class="section-holders__subtitle section-title-subtitle">
              Driving liquidity across Dexs
            </span>
            <section-title class="small">
              best-in-class yields <br>
              <template #stroked-text>
                for our holders
              </template>
            </section-title>
          </div>
          <div class="section-holders__img">
            <img :src="require(`~/assets/img/yields_img.png`)" alt="">
          </div>
          <div class="section-holders__question">
            <div class="gradient-line"></div>
            <h3 class="section-holders__question-text">
              Synergys.finance is the first web 3.0 protocol that introduce the practice of paying crypto dividends to those who buy and hold the SYN tokens.
            </h3>
          </div>
          <div class="section-holders__info section-padding-bottom">
            <div class="section-holders__info-item">
              <div class="section-holders__info-item__img">
                <img :src="require(`~/assets/img/holders_1.png`)" alt="">
              </div>
              <p class="section-holders__info-item__text">
                Capella shares 100% of transaction fees with its token holders. The more liquidity the protocol provides the higher the crypto dividends are.
              </p>
            </div>
            <div class="section-holders__info-item">
              <div class="section-holders__info-item__img">
                <img :src="require(`~/assets/img/holders_2.png`)" alt="">
              </div>
              <p class="section-holders__info-item__text">
                To start receiving passive income from your crypto assets, simply buy SYN and stake it on our platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "~/components/ui/ui-section-title.global";
export default {
  name: "HoldersSection",
  components: {SectionTitle}
};
</script>

<style lang="scss" scoped>

.section-holders {
  position: relative;
  //background: radial-gradient(40px 40px at 40px 40px, rgba(207,141,224,0.78) 0%, rgba(0,0,0,1) 55%);
  background: linear-gradient(0deg, rgba(17, 18, 26, 0.56), rgba(17, 18, 26, 0.56)), radial-gradient(35.38% 92.38% at 68.4% 98.28%, #A36DB6 0%, rgba(15, 15, 55, 0.46) 100%);
  @media screen and (max-width: 767px) {
    background: linear-gradient(0deg, rgba(17, 18, 26, 0.56), rgba(17, 18, 26, 0.56)), radial-gradient(230.38% 55.38% at 9.4% 50.28%, #D16497 0%, rgba(15, 15, 55, 0.46) 100%);
  }
  &__line {
    position: absolute;
    background-image: linear-gradient(to right,rgba(255, 136, 214, 1),rgba(128, 85, 251, 0.7106),rgba(99, 138, 189, 0.82));
  }
  &__absolute-img {
    position: relative;
    .ellipse {
      position: absolute;
      right: 0;
      top: -90vh;
    }
    .ball {
      position: absolute;
      right: 17vw;
      top: -22vh;
    }
  }
  .section-title {
    max-width: unset;
    @media screen and (max-width: 992px) {
      max-width: 100%;
    }
  }
  &__flex-box {
    position: relative;
    overflow: hidden;
    //display: flex;
    //align-items: flex-end;
    @media screen and (max-width: 991px) {
      //flex-direction: column;
      //align-items: normal;
    }
  }
  &__img {
    width: 70%;
    position: absolute;
    right: 0;
    @media screen and (max-width: 1200px) {
      width: 70%;
    }
    @media screen and (max-width: 992px) {
      width: 70%;
      bottom: 0;
    }
    @media screen and (max-width: 767px) {
      position: unset;
      display: flex;
      justify-content: center;
      width: 70%;
      margin-top: 60px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
  &__text {
    &-wrapper {
      //width: 56%;
      @media screen and (max-width: 1200px) {
        //width: 40%;
      }
      @media screen and (max-width: 991px) {
        width: 100%;
      }
    }
  }
  .gradient-line {
    margin-top: 32px;
    margin-bottom: 24px;
  }
  &__question {
    width: 40vw;
    @media screen and (max-width: 991px) {
      width: 60vw;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    &-text {
      font-weight: 400;
      font-size: 22px;
      line-height: 120%;
      line-break:auto;
      @media screen and (max-width: 1286px) {
        font-size: 20px;
      }
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
      @media screen and (max-width: 375px) {
        font-size: 16px;
      }
    }
  }
  &__info {
    margin-top: 64px;
    width: 30vw;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    &-item {
      &:first-child {
        margin-bottom: 40px;
      }
      &__text {
        margin-top: 16px;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
      }
    }
  }
}

</style>
