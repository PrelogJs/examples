export interface IDbService {
  findUser(id: number): Promise<{ name: string; age: number; id: number }>;
}

export class DbService implements IDbService {
  findUser(id: number) {
    return Promise.resolve({ name: "Test", age: 22, id });
  }
}
