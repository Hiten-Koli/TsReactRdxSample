export interface IAuthData{
    usernameToLower: string;
    usernameCharacter: Array<string>;
    userDetails: undefined | object;
    isAuthenticated: boolean;
}

export class UserNameToLower{
    public toLower(username:string){
        if (username===''){
            throw new Error('invalid username!!')
        }
        return username.toLowerCase()
    }
}