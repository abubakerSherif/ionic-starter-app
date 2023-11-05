export class FilterOptions {
    filter!: string;
    sort!: string;
    order!: string;
    pageSize!: Number;
    pageIndex!: Number;
    constructor(data?: any) {
        if (!data) {
            return;
        }
        this.filter = data.filter;
        this.sort = data.sort;
        this.order = data.order;
        this.pageSize = data.pageSize;
        this.pageIndex = data.pageIndex;
    }
  }
  

