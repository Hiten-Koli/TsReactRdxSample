import { IAuthData } from "./authData";

export function sum(a: number, b: number): number {
    return a + b;
  }
export const authenticateUser=(username:string, password:string):IAuthData=>{
    const authStatus = username === 'Dev' && password === 'PassDev';
    return {
        usernameToLower: username.toLocaleLowerCase(),
        usernameCharacter: username.split(''),
        userDetails:{},
        isAuthenticated: authStatus
    }
}