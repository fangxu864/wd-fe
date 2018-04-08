<template>
    <div class="g-content">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "g-content",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/utilities/variability.scss";
.g-content {
  width: $body-width;
  margin: 0 auto;
  min-height: 1000px;
}
</style>


