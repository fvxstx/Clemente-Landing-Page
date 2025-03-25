export interface LoginRequest {
  email: string;
  password: string;
}

export interface IUser {
  name: string;
  cpfOrCnpj: string;
  email: string;
  lastSignIn: Date;
  status: string;
  userType: string;
  id: string;
  createdAt: Date;
  profileImage?: string;
  profileImageUrl?: string;
}
