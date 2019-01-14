export interface IAuth {
  logIn(username: string, password: string): Promise<string | null>;
  logOut(token: string): Promise<void>;
}
