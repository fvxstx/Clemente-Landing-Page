import { IUser, LoginRequest } from "@/types/User";
import { api } from "./api";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const endpoint = "/api/v1/User";
export const UserService = {
  Login: async (user: LoginRequest) => {
    const response = await api.post(`${endpoint}/SignIn`, user);

    if (response.status === 200) {
      const { token } = response.data;
      Cookies.set("token", `Bearer ${token}`, { expires: 1 });
      localStorage.setItem("token", `Bearer ${token}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decodedToken = jwtDecode<any>(token);
      const userData = JSON.parse(
        decodedToken[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata"
        ]
      );
      const user: IUser = {
        id: userData.Id,
        name: "",
        email: userData.Email,
        lastSignIn: userData.LastSignIn,
        status: userData.Status,
        createdAt: userData.CreatedAt,
        cpfOrCnpj: "",
        userType: userData.UserType,
      };

      return user;
    }
  },
};
