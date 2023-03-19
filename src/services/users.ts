import User from "../utils/interfaces/User";
import { api } from "./index";

class UsersDataService {
  async create(user: User) {
    return await api.post("/user", {
      username: user.username,
      email: user.email,
      password: user.password,
      password2: user.password2,
    });
  }

  async login(loginInfo: any) {
    return await api.post("/user/login", {
      email: loginInfo.email,
      password: loginInfo.password,
    });
  }
}

const usersInstance = new UsersDataService();

export { usersInstance };
