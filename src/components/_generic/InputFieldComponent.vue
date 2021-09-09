<template>
  <input v-model="inputValue" :class="['input-field', `input-field--${theme}`]" :placeholder="placeholder" type="text" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'InputFieldComponent',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      validator: (prop: string) => ['light', 'dark'].includes(prop),
      default: 'light',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (val) => emit('update:modelValue', val),
    });

    return {
      inputValue,
    };
  },
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings.scss";

$-search-height: 50px;

.input-field {
  width: 100%;
  height: $-search-height;
  border-radius: settings.$spacer-lg;
  border: solid 1px settings.$color-grey-dark;
  padding-left: settings.$spacer-lg;
  font-size: settings.$font-size-md;
  &:focus {
    outline: none;
  }
  &--dark {
    background-color: settings.$color-grey-very-light;
  }
}
</style>
