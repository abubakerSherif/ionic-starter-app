export class User {
  id!: string;
  name!: string;
  uid!: string;
  email!: string;
  code!: string;
  verified!: boolean;
  token!: string;
  access_codes!: string;
  phone!: string;
  phone_secondary!: string;
  type!: string;

 
  constructor(data?: any) {
      if (!data) {
          return;
      }
      this.name = data.name;
      this.uid = data.uid;
      this.access_codes = data.access_codes;
      this.email = data.email;
      this.code = data.code;
      this.verified = data.verified;
      this.token = data.token;
      this.phone = data.phone;
      this.phone_secondary = data.phone_secondary;
      this.type = data.type;
  }
}
