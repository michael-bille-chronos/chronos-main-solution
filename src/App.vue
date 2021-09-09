<template>
  <div class="page">
    <MainMenuComponent class="page__menu" />
    <TopBarComponent />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useTitle, useFavicon } from '@vueuse/core';
import { useRoute } from 'vue-router';
import MainMenuComponent from '@/components/Base/MainMenuComponent.vue';
import TopBarComponent from '@/components/Base/TopBarComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainMenuComponent,
    TopBarComponent,
  },
  setup() {
    const route = useRoute();
    const title = useTitle('');

    useFavicon('/img/favicon.ico');

    watch(
      () => route,
      (newRoute) => {
        title.value = newRoute.name?.toString();
      },
      { immediate: true, deep: true }
    );
  },
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings";

.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 100px 1fr;
  min-height: 100vh;
  &__menu {
    grid-row: 1 / 3;
  }
}
</style>
