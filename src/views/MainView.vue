<template>
  <div class="main-view">Main view</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainView',
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings";
.main-view {
  background-color: settings.$color-grey-light;
  min-height: 100vh;
  padding: settings.$spacer-lg;
}
</style>
