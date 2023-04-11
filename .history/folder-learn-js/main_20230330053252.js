// object

var myInfor = {
    name: 'hoang hoi ne',
    age: 22,
    address: 'Hanoi'
};
//them key sau khi tao obj
myInfor.email='dangtienhoang@gmail.com';
// lay value
console.log(myInfor.name);
console.log(myInfor['email']);
//truong hop sau day ko the sd cach 1 lay gia tri
var myKey = 'address';
console.log(myInfor[myKey]);
// neu lay gia tri cua key ko ton tai -> tra ra undefine

console.log(myInfor)