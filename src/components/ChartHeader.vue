<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div class="chart_header">
    <div class="chart_title">{{ title }}</div>
    <div class="chart_subtitle">{{ subtitle }}</div>
  </div>
</template>

<style scoped>
</style>