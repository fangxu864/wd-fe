<template>
  <div id="app">
    <transition name="fade" appear>
      <router-view></router-view>
    </transition>
  </div>

</template>

<style scoped lang="scss">
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-enter {
  opacity: 0;
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>