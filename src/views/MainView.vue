<template>
  <div>
    <div style="background-color: hotpink; border: solid 10px gold; height: 2500px">Main view</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainView',
});
</script>

<style scoped type="text/scss" lang="scss">
@use "src/styles/settings/settings";
</style>
