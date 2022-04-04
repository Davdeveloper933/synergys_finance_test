<template>
  <div class="section-how-it-works section-padding-bottom section-padding-top">
    <div class="container">
      <div class="section-how-it-works__wrapper">
        <div class="section-how-it-works__title">
          <span class="section-how-it-works__subtitle section-title-subtitle">
            lets look
          </span>
          <section-title class="small">
            how
            <template #stroked-text> it works </template>
          </section-title>
        </div>
        <div class="section-how-it-works__column">
          <div class="section-how-it-works__column-user">
            <img src="img/steps/user.png" alt="" />
          </div>
          <div class="section-how-it-works__column-arrow">
            <img src="img/steps/arrow.png" alt="" />
          </div>
          <div class="section-how-it-works__column-item">
            <div class="section-how-it-works__column-item__img">
              <img src="img/steps/dollar.png" alt="" />
            </div>
            <h3 class="section-how-it-works__column-item__title">
              You buy Syn Token
            </h3>
            <p class="section-how-it-works__column-item__desc">
              To start getting the crypto passive income from your assets,
            </p>
          </div>
          <div class="section-how-it-works__column-arrow">
            <img src="img/steps/arrow.png" alt="" />
          </div>
          <div class="section-how-it-works__column-item">
            <div class="section-how-it-works__column-item__img">
              <img src="img/steps/dollar.png" alt="" />
            </div>
            <h3 class="section-how-it-works__column-item__title">
              Сlient stake token on the Platform
            </h3>
            <p class="section-how-it-works__column-item__desc">
              To start getting the crypto passive income from your assets,
            </p>
          </div>
          <div class="section-how-it-works__column-arrow">
            <img src="img/steps/arrow.png" alt="" />
          </div>
          <div class="section-how-it-works__column-item">
            <div class="section-how-it-works__column-item__img">
              <img src="img/steps/dollar.png" alt="" />
            </div>
            <h3 class="section-how-it-works__column-item__title">
              Web 3.0 and Pools
            </h3>
            <p class="section-how-it-works__column-item__desc">
              К web3.0 подключены наши 3 инвест предложения. Платформа с каждого
              пула получает 25% комиссию от прибыли
            </p>
            <div class="section-how-it-works__column-item__buttons">
              <button class="section-how-it-works__column-item__buttons-item">
                Stable pool
              </button>
              <button class="section-how-it-works__column-item__buttons-item">
                Coin pool
              </button>
              <button class="section-how-it-works__column-item__buttons-item">
                Dex pool
              </button>
            </div>
          </div>
          <div class="section-how-it-works__column-arrow">
            <img src="img/steps/arrow.png" alt="" />
          </div>
          <div class="section-how-it-works__column-item">
            <div class="section-how-it-works__column-item__img">
              <img src="img/steps/dollar.png" alt="" />
            </div>
            <h3 class="section-how-it-works__column-item__title">
              80% profit goes to ...
            </h3>
            <p class="section-how-it-works__column-item__desc">
              80% of commission is distributed in LP tokens of each pool
            </p>
          </div>
          <div class="section-how-it-works__column-arrow">
            <img src="img/steps/arrow.png" alt="" />
          </div>
          <div class="section-how-it-works__column-item">
            <div class="section-how-it-works__column-item__img">
              <img src="img/steps/dollar.png" alt="" />
            </div>
            <h3 class="section-how-it-works__column-item__title">
              80% profit goes to ...
            </h3>
            <p class="section-how-it-works__column-item__desc">
              80% of commission is distributed in LP tokens of each pool
            </p>
          </div>
        </div>
        <div class="section-how-it-works__absolute-img">
          <div class="section-how-it-works__absolute-img__text">
            <h3>80% profit goes to ...</h3>
            <p>80% of commission is distributed in LP tokens of each pool</p>
          </div>
          <img class="" src="img/all.png" alt="" />
        </div>
        <div class="section-how-it-works__buttons-box">
          <button class="section-how-it-works__buttons-box__skip-btn">
            Skip process
          </button>
          <div class="section-how-it-works__buttons-box__scroll-down">
            <ui-btn>
              <img src="svg/down.svg" alt="" />
            </ui-btn>
            <span class="section-how-it-works__buttons-box__scroll-down__text"
              >Scroll down</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiBtn from "../ui/ui-btn.global";
import SectionTitle from "~/components/ui/ui-section-title.global";
export default {
  name: "HowItWorksSection",
  components: { UiBtn, SectionTitle },
};
</script>

<style lang="scss" scoped>
.section-how-it-works {
  background: linear-gradient(
      0deg,
      rgba(17, 18, 26, 0.56),
      rgba(17, 18, 26, 0.56)
    ),
    radial-gradient(
        129.38% 129.38% at 58.4% -47.28%,
        rgba(202, 121, 253, 0.78) 0%,
        rgba(15, 15, 55, 0.46) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 24px;
  @media screen and (max-width: 425px) {
    background: rgba(17, 18, 26, 0.56);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 24px;
  }
  &__column {
    display: none;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
    @media screen and (max-width: 425px) {
      display: flex;
    }
    &-arrow {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 24px 0;
    }
    &-user {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-item {
      background: linear-gradient(
        270deg,
        rgba(255, 162, 223, 0.14) -4.07%,
        rgba(105, 159, 255, 0.14) 47.91%
      );
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &__buttons {
        margin-top: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        &-item {
          background: linear-gradient(
            270deg,
            rgba(255, 162, 179, 0.12) -4.07%,
            rgba(105, 159, 255, 0.12) 47.91%
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 320px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #ffffff;
          padding: 8px 20px;
          margin-top: 8px;
          &:last-child {
            margin-left: auto;
            margin-right: auto;
            display: block;
          }
        }
      }
      &__title {
        margin-top: 24px;
        margin-bottom: 12px;
        font-family: 'Geometria', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 19px;
        line-height: 160%;
        text-align: center;
        letter-spacing: -0.02em;
      }
      &__img {
      }
      &__desc {
        font-weight: 100;
        font-size: 15px;
        line-height: 130%;
        text-align: center;
        opacity: 0.64;
      }
    }
  }
  &__absolute-img {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 425px) {
      display: none;
    }
    &__text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      h3 {
        font-family: 'Geometria', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
        text-align: center;
        letter-spacing: -0.02em;
        margin-bottom: 16px;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        text-align: center;
      }
    }
  }
  &__buttons-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 425px) {
      display: none;
    }
    &__skip-btn {
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: -0.02em;
      background: linear-gradient(
        270deg,
        rgba(255, 162, 179, 0.22) -4.07%,
        rgba(105, 159, 255, 0.22) 47.91%
      );
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 320px;
      padding: 16px 24px;
    }
    &__scroll-down {
      display: flex;
      align-items: center;
      &__text {
        font-weight: 500;
        font-size: 12px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        margin-left: 8px;
      }
    }
  }
}
</style>
