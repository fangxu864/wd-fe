<template>
    <div class="">
        <g-header></g-header>
        <g-content>
            <router-view></router-view>
        </g-content>
        <g-footer></g-footer>
    </div>
</template>

<script>
import gHeader from "./header.vue";
import gContent from "./content.vue";
import gFooter from "./footer.vue";

export default {
  name: "g-main",
  data() {
    return {};
  },
  components: {
    gHeader,
    gContent,
    gFooter
  }
};
</script>
