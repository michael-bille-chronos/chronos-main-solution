<template>
  <div class="top-bar">
    <router-link class="logo" to="/" aria-label="Logo - Go to frontpage">
      <img class="logo__img" src="/img/logo.svg" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopBarComponent',
  setup() {
    return {};
  },
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings.scss";

$-logo-width: 180px;

.top-bar {
  display: flex;
  align-items: center;
  background-color: settings.$color-white;
  padding-left: settings.$spacer-md;
  padding-right: settings.$spacer-md;
}

.logo {
  line-height: 1;
  &__img {
    max-width: $-logo-width;
  }
}
</style>
