<script setup lang="ts">
import { computed } from 'vue';

const props= defineProps<{
  headers: string[];
}>();

const tableTitle1 = computed(() => props.headers[0]);
const tableTitle2 = computed(() => props.headers[1]);
const tableTitle3 = computed(() => props.headers[2]);
</script>

<template>
  <div class="chart_subheader">
    <div class="chart_tabletitle1">{{ tableTitle1 }}</div>
    <div class="chart_tabletitle2">{{ tableTitle2 }}</div>
    <div class="chart_tabletitle3">{{ tableTitle3 }}</div>
  </div>
</template>

<style scoped>
</style>