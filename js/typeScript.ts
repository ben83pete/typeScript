class User{
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    isReviewer: boolean;
    isActive: boolean;

    constructor(){
    }
}

let user: User = new User();

user.id = 0;
user.userName = "ABC";
user.password = "DEF";
user.firstName = "First";
user.lastName = "Last";
user.email = "email@max.com";
user.phone = "123-456-7890";
user.isActive = true;
user.isAdmin = true;
user.isReviewer = true;

console.log(user);