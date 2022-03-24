<template>
  <button class="ui-down-btn">
    <img :src="require(`~/assets/svg/down.svg`)" alt="">
  </button>
</template>

<script>
export default {
  name: "UiDownBtn"
};
</script>

<style lang="scss" scoped>

.ui-down-btn {
  border-radius: 50%;
  background: rgba(164, 194, 245, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
