<template>
  <div class="section-funds">
    <ui-button class="section-funds__button">Join Whitelist</ui-button>
    <div class="container">
      <div class="section-funds__intro">
        <h2 class="section-funds__title">
          <span class="section-title-subtitle">Dont know where to</span>
          <section-title class="small">
            put your
            <template #stroked-text>
              funds ?
            </template>
          </section-title>
        </h2>
        <div class="section-funds__question">
          <div class="gradient-line"></div>
          <h3 class="section-funds__text">
            Did you ever wonder where to get the best returns for your funds? Dont wonder anymore, just use CAPE
          </h3>
        </div>
      </div>
      <div class="section-funds__steps">
        <div class="section-funds__steps-wrapper">
          <div class="section-funds__steps-item">
            <h3 class="section-funds__steps-item__number">
              <img :src="require(`~/assets/img/01.png`)" alt="">
            </h3>
            <h4 class="section-funds__steps-item__title">Discover the best vaults</h4>
            <p class="section-funds__steps-item__desc">
              Capella Finance indexes every vault in the market and brings you the top results for the best assets in our multichain hybrid pools
            </p>
          </div>
          <div class="section-funds__steps-item">
            <h3 class="section-funds__steps-item__number">
              <img :src="require(`~/assets/img/02.png`)" alt="">
            </h3>
            <h4 class="section-funds__steps-item__title">
              CAPE holders receive 80% of the platform’s commission
            </h4>
            <p class="section-funds__steps-item__desc">
              СAPE also acts as governance token, where holders get to vote on how best to distribute the remaining 20%. Become one of us now!
            </p>
          </div>
          <div class="section-funds__steps-item">
            <h3 class="section-funds__steps-item__number">
              <img :src="require(`~/assets/img/03.png`)" alt="">
            </h3>
            <h4 class="section-funds__steps-item__title">
              Deposit your funds
            </h4>
            <p class="section-funds__steps-item__desc">
              Deposit your funds in the #1 vaults, maximize your APY and start earning immediately with no lock up period or minimum deposits.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "~/components/ui/ui-section-title.global";
import UiButton from "~/components/ui/ui-button.global";
export default {
  name: "FundsSection",
  components: {UiButton, SectionTitle}
};
</script>

<style lang="scss" scoped>
@import "assets/scss/vars";

.section-funds {
  position: relative;
  padding-top: 96px;
  @media screen and (max-width: 767px) {
    padding-top: 47px;
  }
  &__title {
    @media screen and (max-width: 992px) {
      margin-bottom: 40px;
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 32px;
    }
    @media screen and (max-width: 375px) {
      margin-bottom: 25px;
    }
  }
  &__intro {
    display: flex;
    align-items: flex-start;
    position: relative;
    flex-wrap: wrap;
    @media screen and (max-width: 992px) {

    }
  }
  &__text {
    font-weight: 100;
    font-size: 22px;
    line-height: 120%;
    padding-top: 24px;
    width: 40vw;
    line-break: auto;
    @media screen and (max-width: 1286px) {
      font-size: 20px;
    }
    @media screen and (max-width: 992px) {
      width: 100%;
    }
    @media screen and (max-width: 767px) {
      font-size: 18px;
    }
    @media screen and (max-width: 375px) {
      font-size: 16px;
      padding-top: 16px;
    }
  }
  &__question {
    //margin-left: 100px;
    @media screen and (max-width: 1286px) {
      //margin-left: 60px;
    }
    @media screen and (max-width: 992px) {
      width: 73%;
      margin-left: 0;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  &__button {
    padding: 15px 40px;
    position: absolute;
    right: 20px;
    top: 37px;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &__steps {
    margin-top: 60px;
    &-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 2em 0;
      max-width: 90%;
      @media screen and (max-width: 992px) {
        max-width: 100%;
      }
    }
    &-item {
      width: 19vw;
      @media screen and (max-width: 992px) {
        width: 26vw;
      }
      @media screen and (max-width: 575px) {
        width: 45%;
      }
      @media screen and (max-width: 450px) {
        width: 100%;
      }
      &:nth-child(1) {
        --translation: calc(var(--skew-padding) * 0.5);
        @media screen and (max-width: 450px) {
          margin-bottom: 32px;
        }
      }
      &:nth-child(2) {
        --translation: calc(var(--skew-padding) * 1);
        margin-top: var(--translation);
        @media screen and (max-width: 767px) {
          margin-top: 0;
        }
        @media screen and (max-width: 450px) {
          margin-bottom: 32px;
        }
      }
      &:nth-child(3) {
        --translation: calc(var(--skew-padding) * 1.5);
        margin-top: var(--translation);
        @media screen and (max-width: 767px) {
          margin-top: 0;
        }
      }
      &__number {
        //font-family: 'Geometria',sans-serif;
        //font-style: normal;
        //font-weight: 500;
        //font-size: 72px;
        //text-transform: uppercase;
        //background:radial-gradient(rgba(48, 111, 224, 1),rgba(255, 141, 162, 1),rgba(47, 64, 113, 0.38), rgba(255, 85, 244, 1));
        //-webkit-background-clip: text;
        //-webkit-text-stroke: 6px transparent;
        //color: #18191F;
        margin-bottom: 24px;
        @media screen and (max-width: 767px) {
          width: 53px;
        }
      }
      &__title {
        font-family: 'Geometria',sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 120%;
        letter-spacing: -0.02em;
        margin-bottom: 16px;
        @media screen and (max-width: 992px) {
          width: 100%;
        }
        @media screen and (max-width: 767px) {
          font-size: 18px;
        }
      }
      &__desc {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
      }
    }
  }
}

</style>
