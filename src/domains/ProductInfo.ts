import RankItem from "./RankItem";

export default class ProductInfo implements RankItem {
  /**
   * 编号
   */
  id: number;

  /**
   * 展开详情事件
   */
  onClick: string;

  /**
   * 链接
   */
  link: string;

  /**
   * 产品名称
   */
  productName: string;

  /**
   * 分数
   */
  mark: number;

  /**
   * 价格
   */
  price: string;

  /**
   * 阵营
   */
  camp?: string;

  constructor(options: RankItem) {
    this.id = options.id;
    this.onClick = options.onClick;
    this.link = options.link;
    this.productName = options.productName;
    this.mark = options.mark;
    this.price = options.price;

    if (
      this.productName.indexOf("GeForce ") >= 0 || 
      this.productName.indexOf("Quadro ") >= 0 || 
      this.productName.indexOf("TITAN ") >= 0 || 
      this.productName.indexOf("RTX ") >= 0 || 
      this.productName.indexOf("Tesla ") >= 0 || 
      this.productName.indexOf("GRID ") >= 0 ||
      this.productName.indexOf("RTXA") >= 0 || 
      this.productName.indexOf("NVIDIA ") >= 0 
    ) {
      this.camp = "nvidia";
    }
    else if (
      this.productName.indexOf("Radeon ") >= 0 ||
      this.productName.indexOf("FirePro ") >= 0 ||
      this.productName.indexOf("RadeonT ") >= 0 ||
      this.productName.indexOf("Ryzen ") >= 0
    ) {
      this.camp = "amd";
    }
    else if (
      this.productName.indexOf("Intel ") >= 0|| 
      this.productName.indexOf("Iris ") >= 0|| 
      this.productName.indexOf("Arc ") >= 0
    ) {
      this.camp = "intel";
    }
  }
}