<template>
  <div class="main-menu">
    <router-link to="/" aria-label="Logo - Go to frontpage">Test!</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainMenuComponent',
  setup() {
    return {};
  },
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings.scss";

.main-menu {
  position: relative;
  box-shadow: rgb(0 0 0 / 20%) 6px 0px 25px 0px;
}
</style>
