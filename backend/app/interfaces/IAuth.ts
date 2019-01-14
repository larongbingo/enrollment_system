export interface IAuth {
  logIn(username: string, password: string): Promise<string>;
  logOut(token: string): Promise<void>;
}
