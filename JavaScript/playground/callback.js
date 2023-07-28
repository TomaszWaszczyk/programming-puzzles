// Code without any callback
//
// var users = ["Abc", "ZXC", "Asdfsdfsdf"];
//
// function addUser(username) {
//     setTimeout(function () {
//         users.push(username);
//     }, 200);
// }
//
// function getUsers() {
//     setTimeout(function () {
//         console.log(users);
//     }, 100);
// }
//
// addUser("Johnny");
//
// getUsers();

var users = ["Abc", "ZXC", "Asdfsdfsdf"];

function addUser(username, callback) {
    setTimeout(function () {
        users.push(username);
        callback();
    }, 200);


}

function getUsers() {
    setTimeout(function () {
        console.log(users);
    }, 100);
}

addUser("Johnny", getUsers);

getUsers();