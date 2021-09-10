<template>
  <header class="header">
    <ButtonComponent theme="blank" :class="['menu__toggle-btn', { 'menu__toggle-btn--open': showMenu }]" @ButtonEvent="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </ButtonComponent>
    <router-link class="logo" to="/" aria-label="Logo - Go to frontpage">
      <img class="logo__img" src="/img/logo.png" />
    </router-link>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useMainMenu from '@/composables/useMainMenu';
import { ButtonComponent } from '@/components/_generic/_components';

export default defineComponent({
  name: 'HeaderComponent',
  components: { ButtonComponent },
  setup() {
    const { showMenu, toggleMenu } = useMainMenu();

    return { showMenu, toggleMenu };
  },
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings.scss";

$-header-height: 100px;
$-logo-width: 220px;

.header {
  position: sticky;
  display: flex;
  top: 0;
  align-items: center;
  background-color: settings.$color-white;
  padding: 10px;
  height: $-header-height;
  border-bottom: solid 1px settings.$color-border;
}

.logo {
  line-height: 1;
  &__img {
    max-width: $-logo-width;
  }
}

.menu {
  &__toggle-btn {
    position: relative;
    height: 30px;
    width: 30px;
    margin-left: 10px;
    margin-right: 5px;
    z-index: 10;

    span {
      position: absolute;
      display: block;
      height: 2px;
      width: 100%;
      background-color: settings.$color-black;
      border-radius: 2px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: 4px;
      }
      &:nth-child(2) {
        top: 13px;
      }
      &:nth-child(3) {
        top: 22px;
      }
    }
    &--open {
      position: fixed;
      top: 10px;
      left: 4px;
      span {
        background-color: settings.$color-white;
        &:nth-child(1) {
          top: 16px;
          transform: rotate(135deg);
        }

        &:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        &:nth-child(3) {
          top: 16px;
          transform: rotate(-135deg);
        }
      }
    }
  }
}
</style>
