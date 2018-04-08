<template>
    <div class="g-header">
        <div class="g-header__con f-cb">
            <div class="g-header__logo"></div>
            <div class="g-header__nav">
                <span class="g-header__nav-item is-active">我的</span>
                <span class="g-header__nav-item">发现</span>
            </div>
            <div class="g-header__right">
                <span class="">小兔纸</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "g-header",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/utilities/variability.scss";
.g-header {
  height: 50px;
  background: #ffffff;
  &__con {
    width: $body-width;
    height: 100%;
    margin: 0 auto;
  }
  &__logo {
    float: left;
    width: 80px;
    height: 50px;
    background-image: url("./logo.png");
    background-size: 80px 50px;
    margin-right: 60px;
  }
  &__right {
    float: right;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    font-weight: bold;
  }
  &__nav {
    float: left;
  }
  &__nav-item {
    float: left;
    line-height: 50px;
    height: 50px;
    font-size: 16px;
    box-sizing: border-box;
    cursor: pointer;
    margin-right: 40px;
    font-weight: bold;
    &.is-active {
      border-bottom: 3px solid $clr-main;
      color: $clr-main;
    }
  }
}
</style>


