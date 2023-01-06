import User from "../utils/interfaces/User";
import { api } from "./index";

class UsersDataService {
  async create(user: User) {
    return await api.post("/users", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }

  async login(loginInfo: any) {
    return await api.post("/users/login", {
      email: loginInfo.email,
      password: loginInfo.password,
    });
  }
}

const usersInstance = new UsersDataService();

export { usersInstance };
