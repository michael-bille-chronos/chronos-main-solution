<template>
  <ul v-if="notifications">
    <li v-for="notification in notifications" :key="notification.id">
      {{ notification.title }}
      <router-link :to="`/publishingoptions/${notification.publishingid}`">
        {{ getNotificationCtaLabel(notification.flowstate) }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useNotifications from '@/composables/useNotifications';
import { ButtonComponent } from '@/components/_generic/_components';

export default defineComponent({
  name: 'NotificationComponent',
  setup() {
    const { notifications, getNotifications, getNotificationCtaLabel } = useNotifications();

    getNotifications();

    return { notifications, getNotificationCtaLabel };
  },
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings.scss";
</style>
