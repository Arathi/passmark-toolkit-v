import { defineStore } from "pinia";
import Filter from '../domains/Filter';
import ProductInfo from "../domains/ProductInfo";

interface State {
  filter: Filter;
  products: ProductInfo[];
}

export const useProductStore = defineStore('products', {
  state: (): State => ({
    filter: {
      regexProductName: null,
    },
    products: [],
  }),
  getters: {
    filtered(state) {
      // const results: RankItem[] = [];
      return state.products.filter(p => {
        // 检查名称
        if (state.filter.regexProductName != null) {
          const regex = state.filter.regexProductName;
          const matcher = regex.exec(p.productName);
          if (matcher == null) {
            return false;
          }
        }

        // TODO 检查品牌

        // 没有其他条件，检查通过
        return true;
      });
    },
    getProductById(state) {
      return (id: number) => state.products.find(p => p.id == id);
    }
  }
});