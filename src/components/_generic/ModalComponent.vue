<template>
  <transition name="fade-modal">
    <div v-if="show">
      <div :class="['modal', `modal--${size}`]">
        <div class="modal__header">
          <button class="modal__dismiss" @click="toggleModal">✕</button>
          <h2 v-if="headline" class="modal__headline">
            {{ headline }}
          </h2>
        </div>
        <div class="modal__content">
          <slot />
        </div>
      </div>
      <div class="modal__overlay" @click="toggleModal" />
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs, onMounted } from 'vue';

export default defineComponent({
  name: 'ModalComponent',
  props: {
    initState: {
      type: Boolean,
    },
    headline: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      validator: (prop: string) => ['sm', 'md', 'lg'].includes(prop),
      default: 'md',
    },
  },
  emits: ['ButtonEvent'],

  setup(props) {
    const state = reactive({
      show: props.initState,
    });

    onMounted(() => {
      if (state.show) scrollLock(true);
    });

    // METHODS
    const toggleModal = () => {
      state.show = false;
    };

    const scrollLock = (add: boolean) => {
      const body = document.querySelector('body');
      const lockClass = 'scroll-lock';
      add ? body?.classList.add(lockClass) : body?.classList.remove(lockClass);
    };

    // WATCHERS
    watch(
      () => props.initState,
      () => {
        state.show = !state.show;
      }
    );

    watch(
      () => state.show,
      (newState) => {
        scrollLock(newState);
      }
    );

    return {
      ...toRefs(state),
      toggleModal,
    };
  },
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings.scss";

$-max-width-sm: 500px;
$-max-width-md: 700px;
$-max-width-lg: 900px;
$-min-height: 350px;
$-max-height: calc(100vh - 400px);

.modal {
  position: fixed;
  z-index: 25;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  background-color: settings.$color-white;
  padding: settings.$spacer-xl;
  width: calc(100% - #{settings.$spacer-xl});
  min-height: $-min-height;
  max-height: calc(100% - (200px * 2));
  transition: all 1s ease-in;
  overflow-y: auto;
  opacity: 1;
  @include settings.custom-scrollbar;

  &--sm {
    max-width: $-max-width-sm;
  }
  &--md {
    max-width: $-max-width-md;
  }
  &--lg {
    top: 100px;
    max-width: $-max-width-lg;
    max-height: calc(100% - (100px * 2));
  }

  &--dark {
    background-color: settings.$color-grey-light;
  }

  &__headline {
    margin-bottom: settings.$spacer-md;
  }

  &__content {
    position: relative;
  }

  &__dismiss {
    position: absolute;
    @include settings.reset-button-style;
    top: 15px;
    right: 25px;
    font-size: 2.75rem;
    color: settings.$color-grey-dark;
    cursor: pointer;
    transition: color settings.$transition-ease settings.$transition-dur-short;
    &:hover {
      color: var(--color-secondary);
    }
  }

  &__overlay {
    position: fixed;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 15;
  }
}
</style>
