<template>
  <div class="page">
    <MainMenuComponent />
    <div class="page__content">
      <HeaderComponent />
      <router-view />
      <FooterComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useTitle, useFavicon } from '@vueuse/core';
import { useRoute } from 'vue-router';
import HeaderComponent from '@/components/Base/HeaderComponent.vue';
import FooterComponent from '@/components/Base/FooterComponent.vue';
import MainMenuComponent from '@/components/Base/MainMenuComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
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
  display: flex;
  min-height: 100vh;
  width: 100%;
  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
  }
}
</style>
