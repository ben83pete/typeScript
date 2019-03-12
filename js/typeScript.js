var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user = new User();
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
