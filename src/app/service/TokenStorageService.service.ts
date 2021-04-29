import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const Id_KEY = 'auth-id';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageServiceService {
  constructor() { }
  // bị tắt khi đóng trình duyệt
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveId(token: string): void {
    window.sessionStorage.removeItem(Id_KEY);
    window.sessionStorage.setItem(Id_KEY, token);
  }
  removeAll() {
    window.sessionStorage.removeItem(Id_KEY);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(USER_KEY);
  }
  public getToken() {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public getId() {
    return window.sessionStorage.getItem(Id_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public active() {
    if (this.getToken() != null)
      return true;
    return false;
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}