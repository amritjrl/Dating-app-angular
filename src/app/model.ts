export interface User {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  isActive: boolean;
  isAdmin: boolean;
  liked: [];
  likeBy: [];
}
export class login {
  constructor(public email: String, public password: string) {}
}
