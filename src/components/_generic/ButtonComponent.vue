<template>
  <button :class="['button', buttonClass, `button--${size}`]" @click="$emit('ButtonEvent', $event)">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    theme: {
      type: String,
      validator: (prop: string) => ['primary', 'secondary', 'tertiary', 'blank'].includes(prop),
      default: 'primary',
    },
    size: {
      type: String,
      validator: (prop: string) => ['sm', 'md', 'lg'].includes(prop),
      default: 'md',
    },
  },
  emits: ['ButtonEvent'],
  setup(props) {
    const buttonClass = `button--${props.theme}`;

    return {
      buttonClass,
    };
  },
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings.scss";
@use "src/styles/global/theme.scss";

$-height-desktop: 48px;
$-height-mobile: 40px;
$-height-sm: 34px;
$-icon-height: 20px;

.button {
  display: flex;
  align-items: center;
  grid-gap: calc(#{settings.$spacer-sm} * 1.5);
  height: $-height-mobile;
  padding-left: settings.$spacer-md;
  padding-right: settings.$spacer-md;
  color: settings.$color-white;
  border: none;
  cursor: pointer;
  transition: settings.$transition-ease settings.$transition-dur-short;
  border-radius: settings.$spacer-xs;
  font-size: settings.$font-size-md;
  font-weight: 200;

  @include settings.for-desktop-up {
    height: $-height-desktop;
  }

  &--lg {
    @include settings.for-desktop-up {
      font-size: settings.$font-size-lg;
    }
  }
  &--sm {
    font-size: settings.$font-size-sm;
    height: $-height-sm;
    padding-left: settings.$spacer-sm;
    padding-right: settings.$spacer-sm;
  }

  :deep img {
    height: $-icon-height;
  }

  @each $name, $color in theme.$theme-colors {
    &--#{$name} {
      background-color: $color;
      // &:hover {
      //   background-color: darken($color, 5);
      // }
    }
  }

  &--blank {
    @include settings.reset-button-style;
  }
}
</style>
