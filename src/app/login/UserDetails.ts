export class UserDetails{
    usertype: string | undefined | null;
    username: string | undefined | null;
    password: string | undefined | null;

    constructor(usertype: string, username: string, password: string){
        this.usertype = usertype;
        this.username = username;
        this.password = password;
    }
}