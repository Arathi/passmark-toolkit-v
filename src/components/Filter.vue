<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useProductStore } from '../stores/ProductStore';
import Manufacturer from '../domains/Manufacturer';

const store = useProductStore();
const patternProductName = ref<string>('');

const manufacturers = reactive<Manufacturer[]>([
  {
    key: "amd",
    name: "AMD",
    color: "red",
  }, {
    key: "intel",
    name: "英特尔",
    color: "blue",
  }, {
    key: "nvidia",
    name: "英伟达",
    color: "green"
  },
]);

function patternProductNameChanged(event: Event) {
  console.debug(`正则表达式发生变化：`, event);
  try {
    if (patternProductName.value === "") {
    store.filter.regexProductName = null;
      return;
    }

    const regex = RegExp(patternProductName.value);
    console.info(`正则表达式编译成功：`, regex);
    store.filter.regexProductName = regex;
  }
  catch (ex) {
    console.warn(`正则表达式编译失败：`, ex);
  }
}
</script>

<template>
  <div class="filter">
    <div class="regex">
      <input placeholder="正则表达式" 
        class="regex-editor"
        v-model="patternProductName" 
        @input="patternProductNameChanged"
      />
    </div>
    <div class="manufacturers">
      <template v-for="manufacturer in manufacturers">
      </template>
    </div>
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
}

.regex-editor {
  width: 384px;
}
</style>