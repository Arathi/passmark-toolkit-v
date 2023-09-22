<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import RankItem from '../domains/RankItem';
import { useProductStore } from '../stores/ProductStore';
import { storeToRefs } from 'pinia';

import ProductInfo from './ProductInfo.vue';

const store = useProductStore();
const { filtered } = storeToRefs(store);

const markMax = computed(() => {
  return filtered.value[0].mark;
});

const colors = reactive([
  'pink',
  'yellow',
  'green',
  'light-purple',
  'red',
  'turquoise',
  'orange',
  'brown',
  'purple',
  'blue',
]);

function classIndexColor(index: number): string {
  const colorIndex = index % colors.length;
  return `index ${colors[colorIndex]}`;
}

function classAlt(index: number): string | undefined {
  return index % 2 == 1 ? 'alt' : undefined;
}

const widthMax = ref(86);

function getWidth(product: RankItem): number {
  return Math.ceil(widthMax.value * product.mark / markMax.value);
}
</script>

<template>
  <div class="chart_body">
    <ul class="chartlist">
      <template v-for="(product, index) in filtered" :key="`prod-${product.id}`">
        <product-info 
          :index="index"
          :product="product"
          :color-classes="classIndexColor(index)"
          :width="getWidth(product)"
          :alt="classAlt(index)"
          :camp="product.camp"
        />
      </template>
    </ul>
  </div>
</template>

<style scoped>
</style>