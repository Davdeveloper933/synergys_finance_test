<template>
  <div
class="site-header" :class="{'opened': menuIsOpen,'opened-mobile': mobileMenuIsOpen,
  'closed': !menuIsOpen}">
    <div class="site-header__wrapper">
      <div class="site-header__logo site-header-item site-header__logo-desktop">
        <a v-if="!menuIsOpen" href="/" >
          <img :src="require(`~/assets/svg/logo.svg`)" alt="">
        </a>
        <div v-else>
          <a role="button" href="/" class="contact-link contact-link-left">
            <span class="contact-link__text">Synergys Finance</span>
          </a>
      </div>
      </div>
      <div class="site-header__logo site-header__logo-mobile">
        <a v-if="!mobileMenuIsOpen" href="/" >
          <img :src="require(`~/assets/svg/logo.svg`)" alt="">
        </a>
        <a v-else href="/">
          <img :src="require(`~/assets/svg/logo-text.svg`)" alt="">
        </a>
      </div>
      <div class="site-header__logo site-header__logo-tablet">
        <a href="/">
          <img :src="require(`~/assets/svg/logo-text.svg`)" alt="">
        </a>
      </div>
      <div class="menu-btn-container site-header-item">
        <div class="desktop-menu-btn">
          <button v-if="!menuIsOpen" class="menu-btn" @click="menuIsOpen = !menuIsOpen">
            <span class="menu-btn__text">Menu</span>
            <div class="menu-btn__icon_open">
              <img :src="require(`~/assets/svg/menu-open.svg`)" alt="">
            </div>
          </button>
          <button v-else class="menu-btn" @click="menuIsOpen = !menuIsOpen">
            <span class="menu-btn__text">Close</span>
            <div class="menu-btn__icon_close" >
              <img :src="require(`~/assets/svg/menu-close.svg`)" alt="">
            </div>
          </button>
        </div>
        <div v-show="menuIsOpen" class="menu-opened menu-opened-desktop">
          <div class="menu-opened__content">
            <nuxt-link v-for="(item,indx) in menuItems" :key="indx" class="menu-opened__link" :to="item.url">
              {{ item.label }}
            </nuxt-link>
            <ui-button>Join Whitelist</ui-button>
          </div>
        </div>
      </div>
      <div class="site-header-item contact-link-block">
        <a role="button" href="/" class="contact-link">
          <span class="contact-link__text">Contact@capella.finance</span>
        </a>
      </div>
      <div class="tablet-menu-btn">
        <button class="menu-btn rounded" @click="menuIsOpen = !menuIsOpen">
          <img v-if="!menuIsOpen" :src="require(`~/assets/svg/menu-open.svg`)" alt="">
          <img v-else :src="require(`~/assets/svg/menu-close.svg`)" alt="">
        </button>
      </div>
      <div class="mobile-btn-container">
        <button class="menu-btn rounded" @click="mobileMenuIsOpen = !mobileMenuIsOpen">
          <img v-if="!mobileMenuIsOpen" :src="require(`~/assets/svg/menu-open.svg`)" alt="">
          <img v-else :src="require(`~/assets/svg/menu-close.svg`)" alt="">
        </button>
      </div>
    </div>
    <div v-show="mobileMenuIsOpen" class="menu-opened-mobile">
      <img class="menu-opened-mobile-line" :src="require(`~/assets/svg/line.svg`)" alt="">
      <div class="menu-opened-mobile__content">
        <nuxt-link v-for="(item,indx) in menuItems" :key="indx" class="menu-opened-mobile__link" :to="item.url">
          {{ item.label }}
        </nuxt-link>
      </div>
      <img class="menu-opened-mobile-line" :src="require(`~/assets/svg/line.svg`)" alt="">
      <div class="menu-opened-mobile__buttons">
        <ui-button>Join Whitelist</ui-button>
        <ui-button class="menu-opened-mobile__buttons-contact">contact@synergys.finance</ui-button>
      </div>
    </div>
    <div v-show="menuIsOpen" class="menu-opened menu-opened-tablet">
      <div class="menu-opened__content">
        <nuxt-link v-for="(item,indx) in menuItems" :key="indx" class="menu-opened__link" :to="item.url">
          {{ item.label }}
        </nuxt-link>
        <ui-button>Join Whitelist</ui-button>
        <ui-button class="menu-opened-mobile__buttons-contact">Contact@capella.finance</ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import {menuItems} from "~/global/consts";
import UiButton from "~/components/ui/ui-button.global";
export default {
  name: "SiteHeader",
  components: {UiButton},
  data () {
    return {
      menuItems,
      menuIsOpen: false,
      mobileMenuIsOpen: false
    };
  }
};
</script>

<style lang="scss" scoped>

.site-header {
  position: relative;
  background-color: transparent;
  transition: all .3s ease-out;
  &-item {
    min-width: 230px;
    @media screen and (max-width: 767px) {
      min-width: unset;
    }
    &.contact-link-block {
      text-align: right;
    }
  }
  &__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 120px;
    @media screen and (max-width: 1359px) {
      padding: 16px 36px;
    }
    @media screen and (max-width: 991px) {
      padding: 16px 35px;
    }
    @media screen and (max-width: 500px) {
      padding: 16px;
    }
  }
  &__logo {
    &-desktop {
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    &-mobile {
      display: none;
      @media screen and (max-width: 425px) {
        display: inline-block;
      }
    }
    &-tablet {
      //min-width: 208px;
      display: none;
      @media screen and (max-width: 767px) {
        display: block;
      }
      @media screen and (max-width: 425px) {
        display: none;
      }
    }
  }
  &.closed {
    position: relative;
    height: 0%;
    width: 100%;
    overflow: hidden;
  }
  &.opened {
    background-color: #161C2E;
    background-image: linear-gradient(0deg, rgba(13, 14, 21, 0.56), rgba(13, 14, 21, 0.56)), radial-gradient(129.71% 129.71% at 50% 1.86%, rgba(178, 96, 230, 0.648) 0%, rgba(0, 0, 0, 0) 100%);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 9999;
    overflow: hidden;
    .site-header__wrapper {
      align-items: normal;
      @media screen and (max-width: 767px) {
        align-items: center;
      }
    }
    &-mobile {
      background-color: #161C2E;
      background-image: linear-gradient(0deg, rgba(13, 14, 21, 0.56), rgba(13, 14, 21, 0.56)), radial-gradient(129.71% 129.71% at 50% 1.86%, rgba(178, 96, 230, 0.648) 0%, rgba(0, 0, 0, 0) 100%);
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      z-index: 9999;
      @media screen and (max-width: 425px) {
        .site-header__wrapper {
          align-items: center;
          padding: 16px;
        }
      }
    }
  }
}

.menu-btn {
  position: relative;
  display: flex;
  background: rgba(23, 17, 46, 0.24);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 9px 24px 7px;
  &.rounded {
    border-radius: 50%;
    padding:6px;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
  }
  &-container {
    position: relative;
    //position: absolute;
    //left: 50%;
    //transform: translate(-50%, 0);
    flex-direction: column;
    display: flex;
    align-items: center;
  }
  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    margin-right: 10px;
    @media screen and (max-width: 1359px) {
      font-size: 14px;
    }
  }
}

.contact-link {
  display: inline-block;
  text-align: center;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 9px 24px 7px;
  &:not(&-left) {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    @media screen and (max-width: 1359px) {
      font-size: 14px;
    }
  }
}

.menu-opened {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 62px;
  font-weight: 400;
  font-size: 20px;
  &-desktop {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &-tablet {
    display: none;
    @media screen and (max-width: 767px) {
      display: block;
    }
    .ui-button {
      max-width: 245px;
      display: flex;
      justify-content: center;
    }
  }
  .ui-button {
    @media screen and (max-width: 991px) {
      font-size: 14px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__link {
    margin-bottom: 36px;
    @media screen and (max-width: 991px) {
      font-size: 14px;
    }
  }
  &-mobile {
    display: none;
    justify-content: center;
    flex-direction: column;
    padding:0 16px;
    @media screen and (max-width: 425px) {
      display: flex;
    }
    &__link {
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 36px;
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 40px;
    }
    &__buttons {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding:40px 50px 0 50px;
      .ui-button {
        font-size: 14px;
        padding: 14px 0;
        width: 100%;
      }
      &-contact {
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.2);
        margin-top: 16px;
      }
    }
  }
}

.mobile-btn-container {
  display: none;
  @media screen and (max-width: 425px) {
    display: block;
  }
}

.desktop-menu-btn {
  @media screen and (max-width: 767px) {
    display: none;
  }
}

.tablet-menu-btn {
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
}

</style>
