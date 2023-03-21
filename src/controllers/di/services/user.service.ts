import { IDbService } from "./db.service";

export interface IUserService {
  getUserById(
    id: number
  ): Promise<{ name: string; age: number; id: number; uuid: string }>;
}

export class UserService implements IUserService {
  constructor(private db: IDbService) {}
  async getUserById(id: number) {
    const res = await this.db.findUser(id);
    return { ...res, uuid: "uuid" };
  }
}
