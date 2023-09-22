<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Chart from './components/Chart.vue';
import {
  ChartType,
  ProductLevel,
} from './domains/types';
import { unsafeWindow } from '$';
import { useProductStore } from './stores/ProductStore';
import RankItem from './domains/RankItem';
import ProductInfo from './domains/ProductInfo';

const type = ref<ChartType>(ChartType.GPU);
const level = ref<ProductLevel>(ProductLevel.HighEnd);
const updatedAt = ref<string|undefined>(undefined);
const store = useProductStore();

onMounted(() => {
  const $ = (unsafeWindow as any).$;
  const productNodes = $("#origin-chart-mark .chartlist li");
  const items: RankItem[] = [];
  for (const productNode of productNodes) {
    const li = productNode as HTMLLIElement;
    if (li.id == undefined) {
      console.debug(`id不存在，跳过`);
      continue;
    }
    if (!li.id.startsWith("rk")) {
      console.warn(`${li.id}不是有效的id`);
      continue;
    }

    const id = Number(li.id.substring(2));

    const moreDetails = li.children[0] as HTMLSpanElement;
    
    const link = li.children[1] as HTMLLinkElement;
    
    const prdname = link.children[0] as HTMLSpanElement;
    const count = link.children[2] as HTMLSpanElement;
    const price = link.children[3] as HTMLSpanElement;

    const markString = count.textContent?.replace(",", "");
    const mark = Number(markString);

    const options = {
      id: id,
      onClick: moreDetails.getAttribute("onclick"),
      link: link.href,
      productName: prdname.textContent,
      mark: mark,
      price: price.textContent,
    } as RankItem;
    items.push(new ProductInfo(options));
  }

  // console.debug(items);
  store.products = items;
});
</script>

<template>
  <chart
    :type="type"
    :level="level"
    :items="store.products"
    :updated-at="updatedAt"
  />
</template>

<style scoped>
</style>
