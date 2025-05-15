import { User } from "../Models/User";

export class UserService{
  users: User[] = [
    new User('Getulio Souza 1', 'Male', `daily`, 'Active'),
    new User('Getulio Souza 2', 'Male', `quarterly`, 'Inactive'),
    new User('Getulio Souza 3', 'Male', `Monthly`, 'Active'),
    new User('Getulio Souza 4', 'Male', `Yearly`, 'Inactive'),
  ]
}
