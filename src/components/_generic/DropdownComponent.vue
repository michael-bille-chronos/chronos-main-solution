<template>
  <VueNextSelect v-model="inputValue" :label-by="labelBy" :options="options" :model-value="inputValue" :close-on-select="true" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import VueNextSelect from 'vue-next-select';

export default defineComponent({
  name: 'DropdownComponent',
  components: {
    VueNextSelect,
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    labelBy: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputValue = computed({
      get: () => props.modelValue,
      set: (val) => {
        emit('update:modelValue', val);
      },
    });

    return {
      inputValue,
    };
  },
});
</script>

<style type="text/scss" lang="scss">
@use "src/styles/settings/settings.scss";

$-icon-dimension: 20px;

.vue-select {
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: settings.$spacer-xs;
  border: 1px solid settings.$color-border;
  background-color: settings.$color-white;
  min-width: 100%;
  cursor: pointer;
  @include settings.for-tablet-portrait-up {
    min-width: 450px;
  }
}

.vue-select-header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.vue-input {
  display: flex;
  padding: calc(#{settings.$spacer-sm} * 1.5) settings.$spacer-md;
  width: 100%;
}

.vue-input input {
  border: none;
  outline: none;
  width: 100%;
  font-size: settings.$font-size-sm;
  background-color: transparent;
  cursor: pointer;
}

.vue-dropdown {
  position: absolute;
  display: none;
  @include settings.reset-list-style();
  background-color: settings.$color-white;
  z-index: 1;
  overflow-y: auto;
  width: calc(2px + 100%);
  left: -1px;
  border: 1px solid settings.$color-border;
  margin-top: 2px;
  box-shadow: settings.$box-shadow-md;
  border-radius: settings.$spacer-xs;
}

.vue-select[aria-expanded='true'] .vue-dropdown {
  display: unset;
}

.vue-dropdown[data-visible-length='0'] {
  border: none;
}

.vue-dropdown-item {
  padding: settings.$spacer-sm settings.$spacer-md;
  min-height: 1rem;
}

.vue-dropdown-item.highlighted {
  background-color: settings.$color-grey-light;
}

.vue-dropdown-item.selected {
  font-weight: 600;
}

.vue-select.direction-top .vue-dropdown,
.vue-select.direction-bottom .vue-dropdown {
  top: 100%;
}

.icon::after {
  display: flex;
  justify-content: center;
  position: relative;
  content: '';
  height: $-icon-dimension;
  width: $-icon-dimension;
  background-image: url(/img/chevron.svg);
  background-repeat: no-repeat;
  margin-right: settings.$spacer-md;
  margin-left: settings.$spacer-md;
}

.icon.arrow-downward.active {
  transform: rotate(180deg);
}
</style>
