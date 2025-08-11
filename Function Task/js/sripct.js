var users = [];
function addUser(){
    var id =prompt("Enter user id");
    var name = prompt("Enter Username");
    var balance =prompt("Enter Balance");
    users.push({ id, name, balance });
}
function editUserBalanceById(){
    var id =prompt("Enter User id you want Update His Balance");
    var newBalance = prompt("Enter New Balance");
    var user = users.find(user => user.id === id);
    if (user) {
        user.balance = newBalance;
    }}

    function deleteUserById() {
    var id =prompt("User You Want Delete")
    var index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
    } 
}


var count =prompt("How many Users You need input?");
for (let i = 0; i < count; i++) {
    addUser();
}
editUserBalanceById();
deleteUserById();

console.log(users);