<template>
  <footer class="footer">
    <nav class="footer-menu">
      <ul class="footer-menu__list">
        <li v-for="item in menuItems" :key="item.url" class="footer-menu__item">
          <router-link class="footer-menu__link" :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
    <span class="powered-by">
      Powered by
      <img class="powered-by__logo" src="/img/chronos.svg" alt="ChronosHub" />
    </span>
  </footer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'FooterComponent',
  setup() {
    const state = reactive({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      menuItems: [] as Array<any>,
    });

    state.menuItems = [
      {
        name: 'About',
        url: '/about',
      },
      {
        name: 'Privacy Notice',
        url: '/privacy-notice',
      },
      {
        name: 'FAQ',
        url: '/faq',
      },
    ];

    return { ...toRefs(state) };
  },
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings.scss";

$-footer-height: 50px;
$-footer-logo-width: 130px;

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #404040;
  height: $-footer-height;
  color: settings.$color-white;
  padding-left: settings.$spacer-lg;
  padding-right: settings.$spacer-lg;
}

.footer-menu {
  &__list {
    display: flex;
    grid-gap: settings.$spacer-md;
    @include settings.reset-list-style;
  }
  &__link {
    color: inherit;
    text-decoration: none;
  }
}

.powered-by {
  display: flex;
  color: inherit;
  font-size: settings.$font-size-sm;

  &__logo {
    max-width: $-footer-logo-width;
    height: auto;
    padding-left: settings.$spacer-sm;
  }
}
</style>
