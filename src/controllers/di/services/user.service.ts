export class UserService {
  getUserById(id: number) {
    return {
      name: "Test",
      age: 100,
      id,
    };
  }
}
