export default interface RankItem {
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

  // /**
  //  * 排名
  //  */
  // get rankIndex(): number;
}