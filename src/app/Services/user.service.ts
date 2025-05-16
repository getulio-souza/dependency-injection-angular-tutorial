import { User } from "../Models/User";

export class UserService{
  users: User[] = [
    new User('Getulio Souza 1', 'Male', `daily`, 'Active'),
    new User('Getulio Souza 2', 'Male', `quarterly`, 'Inactive'),
    new User('Getulio Souza 3', 'Male', `Monthly`, 'Active'),
    new User('Getulio Souza 4', 'Male', `Yearly`, 'Inactive'),
  ]

  getallUsers() {
    return this.users;
  }

  createUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.push(user)
  }
}
