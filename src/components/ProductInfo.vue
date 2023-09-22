<script setup lang="ts">
import { computed } from 'vue';
import Product from '../domains/ProductInfo';

const props = defineProps<{
  product: Product;
  index: number;
  colorClasses: string;
  width: number;
  alt?: string;
  camp?: string;
}>();

const productClasses = computed(() => {
  return `prdname ${props.camp != undefined ? props.camp : ''}`;
});
</script>

<template>
  <li :id="`rk${product.id}`" :class="alt">
    <span class="more_details" :onclick="product.onClick"></span>
    <a :href="product.link">
      <span :class="productClasses">{{ product.productName }}</span>
      <div>
        <span :class="colorClasses" :style="`width: ${width}%;`">
          {{ `(${width}%)` }}
        </span>
      </div>
      <span class="count">{{ product.mark }}</span>
      <span class="price-neww">{{ product.price }}</span>
    </a>
  </li>
</template>

<style scoped>
.nvidia {
  color: green !important;
}

.amd {
  color: red !important;
}

.intel {
  color: blue !important;
}
</style>