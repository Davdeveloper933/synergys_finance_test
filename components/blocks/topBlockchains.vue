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
        <div v-for="(card,indx) in cards" :key="indx" class="section-top-blockchains__cards-item">
          <div class="section-top-blockchains__cards-item__title">
            <section-title class="small">
                {{ card.title }}
              <template #stroked-text>
                pool
              </template>
            </section-title>
          </div>
          <h4 class="section-top-blockchains__cards-item__subtitle">
            {{ card.subtitle }}
          </h4>
          <div class="section-top-blockchains__cards-item__tokens">
            <div
                  v-for="(token,token_indx) in card.tokens"
                 :key="token_indx" class="section-top-blockchains__cards-item__tokens-item">
              <span class="section-top-blockchains__cards-item__tokens-item__text">
                {{ token.name }}
              </span>
              <img
                    class="section-top-blockchains__cards-item__tokens-item__img"
                   :src="`img/tokens/${token.img}.png`" alt="">
            </div>
          </div>
          <div class="section-top-blockchains__cards-item__bottom">
            <div
              v-for="(item,item_indx) in card.bottomItems"
              :key="item_indx"
              class="section-top-blockchains__cards-item__bottom-item"
            >
              <h4 class="section-top-blockchains__cards-item__bottom-item__text">
                {{ item.text }}
              </h4>
              <div class="section-top-blockchains__cards-item__bottom-item__value">
                {{ item.value }}
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
              img: "usdt-blue"
            },
            {
              name: "usdt",
              img: "usdt-blue"
            },
            {
              name: "usdt",
              img: "usdt-dark"
            },
            {
              name: "usdt",
              img: "usdt-yellow"
            },
            {
              name: "ust",
              img: "ust"
            },
            {
              name: "dai",
              img: "dai"
            },
            {
              name: "mai",
              img: "mai"
            },
            {
              name: "mim",
              img: "mim"
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
              img: "eth"
            },
            {
              name: "btc",
              img: "eth"
            },
            {
              name: "usd",
              img: "eth"
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
              img: "eth"
            },
            {
              name: "luna",
              img: "luna"
            },
            {
              name: "bnb",
              img: "bnb"
            },
            {
              name: "avax",
              img: "avax"
            },
            {
              name: "ftm",
              img: "ftm"
            },
            {
              name: "sol",
              img: "sol"
            },
            {
              name: "matic",
              img: "matic"
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
    margin-top:48px;
    display: grid;
    grid-template-columns: 3.5fr 3.5fr 3.5fr;
    grid-gap: 20px;
    &-item {
      background: linear-gradient(270deg, rgba(255, 162, 223, 0.08) -4.07%, rgba(105, 159, 255, 0.08) 47.91%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 40px;
     &__title {
       margin-bottom: 24px;
       .section-title {
         font-weight: 700;
         font-size: 32px;
       }
     }
      &__subtitle {
        margin-bottom: 15px;
        font-weight: 500;
        font-size: 12px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
      }
      &__tokens {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        padding-bottom: 24px;
        &-item {
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 24px;
          padding: 6px 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25%;
          &__text {
            margin-right: 4px;
            font-weight: 500;
            font-size: 10px;
            text-transform: uppercase;
          }
          &__img {
            width: 14px;
          }
        }
      }
      &__bottom {
        margin-top: 24px;
        &-item {
          &__text {
            font-weight: 500;
            font-size: 12px;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            margin-bottom: 8px;
          }
          &__value {
            font-weight: 500;
            font-size: 16px;
            text-align: center;
          }
        }
      }
    }
  }
}


</style>
