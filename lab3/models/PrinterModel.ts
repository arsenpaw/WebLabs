export default class PrinterModel {
  name: string;
  pagePerMinute: number;
  imgUrl: string;
  cost: number;

  constructor(name: string, pagePerMinute: number,
              imgUrl: string, cost: number) {
    this.name = name;
    this.pagePerMinute = pagePerMinute;
    this.imgUrl = imgUrl;
    this.cost = cost;
  }
}
