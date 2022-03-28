<template>
  <div class="index">
    <div class="section-bg-container">
      <picture>
        <source media="(max-width: 767px)" srcset="img/section-bg_mobile.jpg">
        <img src="img/section-bg_1.jpg" alt="">
      </picture>
      <site-header />
      <intro-section />
      <funds-section />
      <watch-video-section />
    </div>
    <the-market-section />
    <div class="section-bg-container">
    <holders-section />
    <how-it-works-section />
    <liquidity-section />
    <top-blockchains-section />
    </div>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "~/components/header";
import SiteFooter from "~/components/footer";
import IntroSection from "~/components/blocks/intro";
import FundsSection from "~/components/blocks/funds";
import WatchVideoSection from "~/components/blocks/video";
import TheMarketSection from "~/components/blocks/market";
import HoldersSection from "~/components/blocks/holders";
import HowItWorksSection from "~/components/blocks/howItWorks";
import LiquiditySection from "~/components/blocks/liquidity";
import TopBlockchainsSection from "~/components/blocks/topBlockchains";
export default {
  name: "IndexPage",
  components: {
    TopBlockchainsSection,
    LiquiditySection,
    HowItWorksSection,
    HoldersSection, TheMarketSection, WatchVideoSection, FundsSection, IntroSection, SiteFooter, SiteHeader},
  layout: "DefaultLayout",
};
</script>

<style scoped lang="scss">

.index {

}

.section-bg-container {
  position: relative;
  img {
    position: absolute;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
  }
}
</style>
