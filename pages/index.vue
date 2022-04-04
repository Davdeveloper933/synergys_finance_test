<template>
  <div class="index">
    <div class="section-bg-container">
      <picture>
        <source media="(max-width: 767px)" srcset="img/section-bg_mobile.jpg" />
        <img src="img/section-bg_1.jpg" alt="" />
      </picture>
      <site-header />
      <intro-section id="home" />
      <funds-section id="funds" />
      <watch-video-section id="video" />
    </div>
    <the-market-section id="market" />
    <div class="section-bg-container">
      <holders-section id="holders" />
      <how-it-works-section id="how-it-works" />
      <liquidity-section id="liquidity" />
      <top-blockchains-section id="top-blockchains" />
      <section-road-map id="roadmap" />
      <section-ecosystem id="ecosystem" />
      <section-networks id="networks" />
    </div>
    <site-footer id="contact" />
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
import SectionRoadMap from "~/components/blocks/roadMap";
import SectionEcosystem from "~/components/blocks/ecosystem";
import SectionNetworks from "~/components/blocks/networks";
export default {
  name: "IndexPage",
  components: {
    SectionNetworks,
    SectionEcosystem,
    SectionRoadMap,
    TopBlockchainsSection,
    LiquiditySection,
    HowItWorksSection,
    HoldersSection,
    TheMarketSection,
    WatchVideoSection,
    FundsSection,
    IntroSection,
    SiteFooter,
    SiteHeader,
  },
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
