//  var x =3
//  var y =14
//  var g = "3"
//  var firstName ="Beshoy"
//  var isGraduated = false
//  var z 
//   var firstName =prompt("Enter Your Name")
//   console.log(firstName)
//   console.log(y%x)
//   console.log(--x)
//   console.log(y++)
//   console.log(x**y)
//   console.log(y%=x)
// console.log(x!=g)
// console.log(x!==g)
// console.log(typeof x=='number')
// console.log(y>x && x==g )
// console.log(!(typeof x=='number'))

// function looping(start , end , breakNum , countineNum){
//     if (start!=undefined && end !=undefined && breakNum!= undefined && countineNum!=undefined){
//         for(var i = start ; i<= end ; i++){
//             if (i=== breakNum){
//                 break;
//             }
//             else if (i===countineNum){
//                 continue;
//             }

//            else  console.log(i)

//         }
//     }
//     else {
//         alert('Please Enter All Numbers')
//     }
// }
// looping(1,15,8,2)
// var coursesList =["Html" , "Css" , "Js" ,"Ts" , "Angular" ]
// function courses(){
//     var Course =prompt("Enter Your Course")
//     if (coursesList.includes(Course))
//     {
//         alert('Your Course is here');
//     }
//     else {
//         coursesList.push(Course)
//     }
// }
// courses()
// console.log(coursesList)
// var usersList = [
// {
//     firstName : "Beshoy",
//     lastName  : "Ashraf",
//     Age : 20 ,
//     isGraduated : false
// }
// ]
// console.log(usersList)



// var user =[]
// function adduser(){
// user = [
//     {
//     Name : prompt('enter Your name'),
//     Id : prompt('enter your id'),
//     balance : prompt('enter your balance')
//     }
// ]
// }
// user.push(adduser())
// console.log(user)

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
