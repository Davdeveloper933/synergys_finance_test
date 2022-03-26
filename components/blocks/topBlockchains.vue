<template>
  <div class="section-top-blockchains section-padding-top">
    <div class="container">
      <div class="section-top-blockchains__title">
        <span class="section-top-blockchains__subtitle section-title-subtitle">
              All vaults autocompound at an optimal rate and
        </span>
        <section-title class="small">
          diversified at the<br>
          <template #stroked-text>
            top blockchains
          </template>
        </section-title>
      </div>
      <div class="section-top-blockchains__cards">
        <div class="section-top-blockchains__cards-item">
          <div class="section-top-blockchains__cards-item__title">
            <section-title class="small">

              <template #stroked-text>

              </template>
            </section-title>
          </div>
          <h4 class="section-top-blockchains__cards-item__subtitle">

          </h4>
          <div class="section-top-blockchains__cards-item__tokens">
            <div class="section-top-blockchains__cards-item__tokens-item">
              <span class="section-top-blockchains__cards-item__tokens-item__text">

              </span>
              <img class="section-top-blockchains__cards-item__tokens-item__img" src="" alt="">
            </div>
          </div>
          <div class="section-top-blockchains__cards-item__bottom">
            <div class="section-top-blockchains__cards-item__bottom-item">
              <h4 class="section-top-blockchains__cards-item__bottom-item__text">

              </h4>
              <div class="section-top-blockchains__cards-item__bottom-item__value">

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
export default {
  name: "TopBlockchainsSection",
  components: {SectionTitle},
  data () {
    return {
      cards: [
        {
          title: "stable",
          subtitle: "Tokens that are included",
          tokens: [
            {
              name: "usdt",
              img: ""
            },
            {
              name: "usdt",
              img: ""
            },
            {
              name: "usdt",
              img: ""
            },
            {
              name: "usdt",
              img: ""
            },
            {
              name: "ust",
              img: ""
            },
            {
              name: "dai",
              img: ""
            },
            {
              name: "mai",
              img: ""
            },
            {
              name: "mim",
              img: ""
            },
          ],
          bottomItems: [
            {
              text: "Pool Deposits",
              value: "$ 22 400 000"
            },
            {
              text: "Earning rate",
              value: "22%"
            }
          ]
        },
        {
          title: "Coin",
          subtitle: "Tokens that are included",
          tokens: [
            {
              name: "eth",
              img: ""
            },
            {
              name: "btc",
              img: ""
            },
            {
              name: "usd",
              img: ""
            }
          ],
          bottomItems: [
            {
              text: "Pool Deposits",
              value: "$ 32 400 000"
            },
            {
              text: "Earning rate",
              value: "55%"
            }
          ]
        },
        {
          title: "DEX",
          subtitle: "Tokens that are included",
          tokens: [
            {
              name: "eth",
              img: ""
            },
            {
              name: "luna",
              img: ""
            },
            {
              name: "bnb",
              img: ""
            },
            {
              name: "avax",
              img: ""
            },
            {
              name: "ftm",
              img: ""
            },
            {
              name: "sol",
              img: ""
            },
            {
              name: "matic",
              img: ""
            }
          ],
          bottomItems: [
            {
              text: "Pool Deposits",
              value: "$ 28 400 000"
            },
            {
              text: "Earning rate",
              value: "180%"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

.section-top-blockchains {
  background: radial-gradient(134.35% 134.32% at 19.1% -52.22%, rgba(0, 144, 249, 0.429) 0%, rgba(15, 15, 55, 0.55) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(17, 18, 26, 0.56);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 24px;
  &__title {
    .section-title {
      max-width: 100%;
    }
  }
  &__cards {
    &-item {
      background: linear-gradient(270deg, rgba(255, 162, 223, 0.08) -4.07%, rgba(105, 159, 255, 0.08) 47.91%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 40px;
     &__title {

     }
      &__subtitle {

      }
      &__tokens {
        &-item {
          &__text {

          }
          &__img {

          }
        }
      }
      &__bottom {

      }
    }
  }
}

</style>
