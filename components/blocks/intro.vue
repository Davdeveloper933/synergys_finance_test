<template>
  <div class="section-intro">
    <div class="">
      <h1 class="section-intro__title">
        <span class="section-intro__subtitle">WELCOME TO </span>
        <section-title>
          Capella
          <template #stroked-text>
            Finance
          </template>
        </section-title>
      </h1>
      <div class="section-intro__browser">
        <picture>
          <source media="(max-width: 375px)" srcset="img/neon_small.png">
          <img class="neon-img" src="img/neon.png" alt="">
        </picture>

        <img class="spline-left" src="img/spline_left.png" alt="">
        <img class="spline-right" src="img/spline_right.png" alt="">
        <div class="section-intro__browser__inner">
          <div class="section-intro__browser-header">
            <div class="section-intro__browser-header-wrapper">
              <div>
                <img src="img/traffic_lights.png" alt="">
              </div>
              <div class="section-intro__browser-searchbar">
              <span class="section-intro__browser-searchbar__text">
                <img src="svg/lock.svg" alt="">
                synergys.finance
              </span>
                <img class="refresh-img" src="svg/refresh.svg" alt="">
              </div>
              <img src="svg/toolbar.svg" alt="">
            </div>
          </div>
          <img class="ethereum-logo" src="img/ethereum_logo.png" alt="">
          <img class="bitcoin-logo" src="img/bitcoin_logo.png" alt="">
<!--          <div class="section-intro__browser__inner-img">-->
            <ui-down-btn />
<!--          </div>-->
          <div class="section-intro__browser__content">
            <div class="section-intro__browser__content__intro">
              <img src="svg/globe.svg" alt="">
              <h3 class="section-intro__browser__content__title">
                Synergys Finance is multichain yield optimization platform for Liquidity Providers.
                Full decentralisation ensures <span class="profit100">100% of profits</span> are given back to СAPE stakers
              </h3>
            </div>
            <div class="section-intro__browser__content__timer">
              <h3 class="section-intro__browser__content__timer-title">
                Turn on our auto-pilot, relax,
                and prepare for the Private round!
              </h3>
              <h3 class="timer-starts-in">Starts in</h3>
              <div class="timer-block">
                <div class="timer-block__wrapper">
                  <div class="timer-block-item">
                    <p class="timer-block-item__value">12
                    </p>
                    <p class="timer-block-item__time">day</p>
                  </div>
                  <img class="timer-dot" src="img/dot-white.png" alt="">
                  <div class="timer-block-item">
                    <p class="timer-block-item__value">8
                    </p>
                    <p class="timer-block-item__time">hour</p>
                  </div>
                  <img class="timer-dot" src="img/dot-white.png" alt="">
                  <div class="timer-block-item">
                    <p class="timer-block-item__value">24
                    </p>
                    <p class="timer-block-item__time">min</p>
                  </div>
                  <img class="timer-dot" src="img/dot-pink.png" alt="">
                  <div class="timer-block-item">
                    <p class="timer-block-item__value">
                      37
                    </p>
                    <p class="timer-block-item__time">sec</p>
                  </div>
                </div>
              </div>
              <div class="section-intro__browser__content__timer-buttons">
                <input class="ui-input" type="text" placeholder="Your e-mail">
                <ui-button>Join Whitelist</ui-button>
                <div class="contact-link">
                  <a href="#">contact@synergys.finance</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "~/components/ui/ui-section-title.global";
import UiDownBtn from "~/components/ui/ui-down-btn.global";
import UiButton from "~/components/ui/ui-button.global";
export default {
  name: "IntroSection",
  components: {UiButton, UiDownBtn, SectionTitle}
};
</script>

<style lang="scss" scoped>

.section-intro {
  padding-top: 56px;
  @media screen and (max-width: 425px) {
    padding-top: 0;
  }
  &__title {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    .section-title {
      max-width: 100%;
      @media screen and (max-width: 1280px) {
        font-size: 85px;
      }
      @media screen and (max-width: 1199px) {
        font-size: 80px;
      }
      @media screen and (max-width: 1020px) {
        font-size: 70px;
      }
      @media screen and (max-width: 991px) {
        font-size: 65px;
      }
      @media screen and (max-width: 850px) {
        font-size: 62px;
      }
      @media screen and (max-width: 607px) {
        font-size: 54px;
      }
      @media screen and (max-width: 530px) {
        font-size: 50px;
      }
      @media screen and (max-width: 500px) {
        font-size: 48px;
        display: flex;
        flex-direction: column;
        line-height: 55px;
        align-items: center;
      }
    }
  }
  &__subtitle {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    position: absolute;
    left: -14%;
    @media screen and (max-width: 1280px) {
      font-size: 15px;
    }
    @media screen and (max-width: 1199px) {
      font-size: 15px;
    }
    @media screen and (max-width: 1020px) {
      font-size: 14px;
      left: -16%;
    }
    @media screen and (max-width: 991px) {
      font-size: 14px;
      left: -17%;
    }
    @media screen and (max-width: 850px) {
      position: unset;
      display: block;
      text-align: center;
      margin-bottom: 8px;
    }
  }
  &__browser {
    display: flex;
    justify-content: center;
    position: relative;
    margin: 40px auto 0 auto;
    .neon-img {
      left: 50%;
      transform: translate(-50%,0);
      position: absolute;
      top: -4vh;
    }
    &-searchbar {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 6px;
      margin: 12px 0;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 144px;
      padding-right: 6px;
      @media screen and (max-width: 991px) {
        padding-left: 100px;
      }
      @media screen and (max-width: 767px) {
        margin: 7px 0;
        padding-left: 60px;
      }
      @media screen and (max-width: 425px) {
        background: transparent;
        padding: 6px 0;
        margin: 5px 0;
        .refresh-img {
          display: none;
        }
      }
      &__text {
        margin-right: 126px;
        font-weight: 400;
        font-size: 13px;
        letter-spacing: -0.02em;
        color: #9288B1;
        @media screen and (max-width: 991px) {
          margin-right: 95px;
        }
        @media screen and (max-width: 767px) {
          margin-right: 60px;
        }
        @media screen and (max-width: 425px) {
          margin-right: 0;
        }
      }
    }
    &-header {
      background: rgba(16, 20, 44, 0.7);
      padding:0 20px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      position: relative;
      &__timer {
        border: 1px solid rgba(255, 255, 255, 0.08);
        background-image: linear-gradient(226.76deg, rgba(255, 162, 223, 0.08) -4.53%, rgba(105, 159, 255, 0.08) 46.5%),
        linear-gradient(0deg, rgba(119, 126, 139, 0.14), rgba(119, 126, 139, 0.14));
        border-radius: 12px;
        min-width: 386px;
        max-width: 386px;
        padding: 24px 0 40px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 100px;
        position: relative;
        z-index: 4;
        @media screen and (max-width: 500px) {
          //min-width: 365px;
          min-width: 77vw;
        }
        @media screen and (max-width: 425px) {
          margin-bottom: 60px;
          margin-top: 17px;
          padding: 24px 0 60px 0;
        }
        &-buttons {
          margin-top: 20px;
          .ui-button {
            &::v-deep {
              padding: 18px 82px;
            }
          }
          .contact-link {
            font-weight: 400;
            font-size: 14px;
            text-decoration-line: underline;
            color: #FFFFFF;
            opacity: 0.56;
            text-align: center;
            margin-top: 22px;
            @media screen and (max-width: 425px) {
              font-size: 16px;
              margin-top: 32px;
            }
          }
        }
        &-title {
          font-weight: 400;
          font-size: 18px;
          line-height: 25px;
          text-align: center;
          max-width: 280px;
          @media screen and (max-width: 767px) {
            font-size: 15px;
            width: 70vw;
          }
        }
        .timer-starts-in {
          text-transform: uppercase;
          font-weight: 500;
          font-size: 12px;
          text-align: center;
          letter-spacing: 0.04em;
          color: #FF7A82;
          margin-top: 8px;
        }
        .timer {
          &-block {
            margin-top: 16px;
            &__wrapper {
              display: flex;
              align-items: baseline;
            }
            &-item {
              &__value {
                font-weight: 500;
                font-size: 24px;
                letter-spacing: -0.01em;
                text-align: center;
              }
              &__time {
                text-align: center;
                font-weight: 100;
                font-size: 14px;
                letter-spacing: -0.01em;
                color: #FFFFFF;
                opacity: 0.32;
              }
            }
          }
          &-dot {
            margin: 0 12px;
          }
        }
      }
      &__intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        img {
          margin-bottom: 24px;
        }
      }
      &__title {
        text-align: center;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        max-width: 900px;
        width: 61vw;
        //@media screen and (max-width: 1280px) {
        //  font-size: 85px;
        //}
        @media screen and (max-width: 1199px) {
          font-size: 20px;
        }
        @media screen and (max-width: 991px) {
          font-size: 18px;
        }
        @media screen and (max-width: 850px) {
          width: 70vw;
        }
        @media screen and (max-width: 767px) {
          font-size: 18px;
          width: 65vw;
        }
        @media screen and (max-width: 425px) {
          font-size: 16px;
          width: 90vw;
        }
      }
      .profit100 {
        position: relative;
        display: inline-block;
        &:after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 8px;
          background-image: url("./static/img/profit-line.png");
          background-repeat: no-repeat;
          background-size: 100%;
        }
      }
    }
    .spline-left {
      position: absolute;
      left: 0;
      top: 24%;
      z-index: 2;
      width: 19vw;
      @media screen and (max-width: 850px) {
        width: 13vw;
        top: 50vh;
      }
      @media screen and (max-width: 767px) {
        //top: 60vh;
        //left: -4vw;
        display: none;
      }
      @media screen and (max-width: 425px) {
        display: none;
      }
    }
    .spline-right {
      position: absolute;
      right: 0;
      top: -20vh;
      z-index: 2;
      width: 19vw;
      @media screen and (max-width: 1199px) {
        top: -11vh;
      }
      @media screen and (max-width: 850px) {
        width: 15vw;
        top: 6vh;
      }
      @media screen and (max-width: 767px) {
        //top: 8vh;
        //right: -4vw;
        display: none;
      }
      @media screen and (max-width: 425px) {
        display: none;
      }
    }
    .ellipse {
      position: absolute;
      left: 50%;
      bottom: -100px;
      transform: translate(-50%, 0);
      @media screen and (max-width: 425px) {
        display: none;
      }
    }
    .ui-down-btn {
      position: absolute;
      left: 50%;
      z-index: 20;
      bottom: -14px;
      transform: translate(-50%, 0);
      @media screen and (max-width: 425px) {
        bottom: 39px;
      }
    }
    &__inner {
      position: relative;
      width: 69vw;
      border-radius: 12px;
      background-image: url(img/browser_bg.jpg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      @media screen and (max-width: 1200px) {
        width: 78vw;
      }
      @media screen and (max-width: 850px) {
        width: 83vw;
      }
      @media screen and (max-width: 767px) {
        width: 89vw;
        background-image: url("./static/img/browser_bg-mobile.jpg");
      }
      @media screen and (max-width: 425px) {
        width: 100%;
      }
      .ethereum-logo {
        position: absolute;
        top: 30%;
        left: -4%;
        z-index: 20;
        @media screen and (max-width: 500px) {
          width: 70px;
          top: 50%;
          left: 1%;
        }
      }
      .bitcoin-logo {
        position: absolute;
        top: 70%;
        right: -4%;
        z-index: 20;
        @media screen and (max-width: 500px) {
          width: 70px;
          right: 0%;
          top: 40%;
        }
      }
    }
  }
}

.ui-input {
  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 40px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: #565A68;
  padding: 18px 24px;
  width: 100%;
  display: block;
  margin-bottom: 16px;
}

</style>
