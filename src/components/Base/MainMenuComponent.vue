<template>
  <div :class="['main-menu', { 'main-menu--open': showMenu }]">
    <div class="main-menu__header">
      <a class="main-menu__user-info" href="#">
        Jane Doe
        <em class="main-menu__user-info__affliation">University of Granada</em>
      </a>
      <a class="main-menu__action main-menu__action--profile" href="#"> My profile </a>
      <a class="main-menu__action main-menu__action--log-out" href="#"> Log out </a>
    </div>
    <nav class="main-menu__nav">
      <ul class="main-menu__list">
        <li v-for="item in menuItems" :key="item.url" class="main-menu__item">
          <router-link class="main-menu__link" :to="item.url">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import useMainMenu from '@/composables/useMainMenu';
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'MainMenuComponent',
  setup() {
    const state = reactive({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      menuItems: [] as Array<any>,
    });
    const { showMenu } = useMainMenu();

    state.menuItems = [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'Publications',
        url: '/publications',
      },
      {
        name: 'My Grants',
        url: '/my-grants',
      },
    ];

    return { ...toRefs(state), showMenu };
  },
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings.scss";
$-bar-width: 250px;
$-header-height: 140px;
$-icon-size: 18px;
$-user-info-line-height: 23px;

.main-menu {
  position: sticky;
  top: 0;
  height: 100vh;
  width: $-bar-width;
  box-shadow: rgb(0 0 0 / 20%) 6px 0px 25px 0px;
  transition: margin-left 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  margin-left: -$-bar-width;

  &--open {
    margin-left: 0;
  }

  &__header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: var(--color-primary);
    height: $-header-height;
    padding: 20px 40px;
    font-size: settings.$font-size-sm;
    color: settings.$color-white;
    text-decoration: none;
  }

  &__user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: 1 / 3;
    color: inherit;
    line-height: $-user-info-line-height;
    text-decoration: inherit;

    &__affliation {
      opacity: 0.8;
      font-size: settings.$font-size-xs;
    }
  }

  &__action {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: inherit;
    text-align: center;
    text-decoration: inherit;
    &::before {
      position: relative;
      display: block;
      content: '';
      background-color: settings.$color-white;
      margin-left: auto;
      margin-right: auto;
      height: $-icon-size;
      width: $-icon-size;
      margin-bottom: settings.$spacer-xs;
    }
    &--profile::before {
      mask: url('/img/user-solid.svg') no-repeat;
      -webkit-mask: url('/img/user-solid.svg') no-repeat;
    }
    &--log-out::before {
      mask: url('/img/sign-out-solid.svg') no-repeat;
      -webkit-mask: url('/img/sign-out-solid.svg') no-repeat;
    }
  }

  &__list {
    @include settings.reset-list-style;
  }

  &__item {
    border-bottom: 1px solid settings.$color-border;
  }

  &__link {
    position: relative;
    display: flex;
    align-items: center;
    padding: 13px 20px 13px 30px;
    text-decoration: none;
    font-size: settings.$font-size-xs;
    line-height: 22px;
    letter-spacing: 0.5px;
    color: #555555;
    font-family: settings.$type-raleway;

    &::before,
    &::after {
      content: '';
    }

    &::before {
      height: 7px;
      width: 7px;
      border: solid 1px #777777;
      border-radius: 50%;
      margin-right: 8px;
      transition: background-color 0.25s ease-out;
    }

    &::after {
      position: absolute;
      left: 0;
      z-index: -1;
      height: 100%;
      width: 100%;
      background-color: #f3f3f3;
      transform: translateX(-100%);
      transition: transform 0.4s ease-out;
    }

    &:hover,
    &.router-link-active {
      &::after {
        transform: translateX(0);
      }
      &::before {
        background-color: #777777;
      }
    }
  }
}
</style>
