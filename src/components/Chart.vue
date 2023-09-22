<script setup lang="ts">
import { computed } from 'vue';

import ChartHeader from './ChartHeader.vue';
import ChartSubheader from './ChartSubheader.vue';
import ChartFilter from './Filter.vue';
import ChartBody from './ChartBody.vue';

import ChartProps from '../domains/ChartProps';
import RankItem from '../domains/RankItem';
import {
  ChartType,
  ProductLevel,
} from '../domains/types';

const props = defineProps<{
  type: ChartType;
  level: ProductLevel;
  items: RankItem[];
  updatedAt: string | undefined;
}>();

const chartProps = computed<ChartProps>(() => {
  if (props.type == ChartType.CPU) {
    return {
      title: "PassMark - CPU Mark",
      subtitle: `${props.level} ${props.type}s`,
      tableHeaders: [
        "CPU",
        "CPU Mark",
        "Price (USD)"
      ],
    } as ChartProps;
  }
  return {
    title: "PassMark - G3D Mark",
    subtitle: `${props.level} ${props.type}s`,
    tableHeaders: [
      "Videocard",
      "Average G3D Mark",
      "Price (USD)",
    ]
  } as ChartProps;
});
</script>

<template>
  <chart-header 
    :title="chartProps.title"
    :subtitle="chartProps.subtitle"
  />
  <chart-filter />
  <chart-subheader
    :headers="chartProps.tableHeaders"
  />
  <chart-body />
  <div class="notes"></div>
</template>

<style scoped>
</style>