export class Response {
  data!: string;
  code!: string;
  error!: string;

 
  constructor(data?: any) {
      if (!data) {
          return;
      }
      this.data = data.data!;
      this.code = data.code!;
      this.error = data.error!;

  }
}
