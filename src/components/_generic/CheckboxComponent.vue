<template>
  <input :id="value" v-model="inputValue" class="checkbox__input" :value="value" type="checkbox" />
  <label :for="value" class="checkbox__label"><slot /></label>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'CheckboxComponent',
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: 'true',
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

$-checkbox-dimension: 13px;

.checkbox {
  $-base-class: &;
  display: flex;
  &__label {
    font-size: settings.$font-size-sm;
  }
  &__input {
    position: absolute;
    visibility: hidden;

    + #{$-base-class}__label {
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
      min-height: $-checkbox-dimension;
      line-height: $-checkbox-dimension;
      padding-left: calc(#{$-checkbox-dimension} + #{settings.$spacer-sm});

      &::before,
      &::after {
        position: absolute;
        content: '';
        display: inline-block;
        transition: background-color settings.$transition-ease settings.$transition-dur-short;
      }

      &::before {
        left: 0;
        margin-right: settings.$spacer-sm;
        cursor: pointer;
        height: $-checkbox-dimension;
        width: $-checkbox-dimension;
        border: solid 1px var(--color-link);
        border-radius: 2px;
      }

      &::after {
        top: 3px;
        left: 3px;
        height: calc(#{$-checkbox-dimension} - 4px);
        width: calc(#{$-checkbox-dimension} - 4px);
      }
    }

    &:hover + #{$-base-class}__label::before {
      // background-color: lighten(var(--color-link), 30);
    }

    &:checked + #{$-base-class}__label::before {
      background-color: var(--color-link);
    }

    &:checked + #{$-base-class}__label::after {
      display: flex;
      top: 1px;
      left: 5px;
      transform: rotate(45deg);
      height: 7px;
      width: 3px;
      border-bottom: 2px solid settings.$color-white;
      border-right: 2px solid settings.$color-white;
      background-color: var(--color-link);
    }
  }
}
</style>
