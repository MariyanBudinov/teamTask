//user model
function User(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
}

var userManager = (function () {

    // tui tuka e skrito
    var users = [new User('Pani', '1234', 30)];

    return { // tui tuka e publichno
        addUser: function (user) {
            if (user instanceof User) {
                users.push(user);
            }
        },

        loginUser: function (username, password) {
            return users.some(function (u) {
                return (u.username === username) &&
                    (u.password === password);
            });
        },

        isUserNameExists: function (username) {
            return users.some(function (u) {
                return (u.username === username);
            });
        },

        getNumberOfUser: function() {
            return users.length;
        },

        isPasswordValid: function(password) {
            return password.length > 3;
        }
    }
})();