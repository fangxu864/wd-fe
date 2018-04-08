<template>
    <div class="g-footer">
        <div class="g-footer__con">
            版权所有，盗版必究
        </div>
    </div>
</template>

<script>
export default {
  name: "g-footer",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/utilities/variability.scss";
.g-footer {
  height: 50px;
  background: #ffffff;
  &__con {
    width: $body-width;
    height: 100%;
    margin: 0 auto;
  }
}
</style>


