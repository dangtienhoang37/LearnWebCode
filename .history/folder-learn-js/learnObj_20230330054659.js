// object
var chanquaKey='chan';
var myInfor = {
    name: 'hoang hoi ne',
    age: 22,
    address: 'Hanoi',
    [chanquaKey]: 'chan qua ne', //khai bao 1 key trong obj bang bien dau [chanquakey] o day co y nghia la 'chan'

    getName: function() {
        return this.name;// this o day co nghia la obj myInfor
    }
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


// lay val cua ham o trong obj
console.log( 'chan ' + myInfor.getName());
//xoa key
delete myInfor.age;


console.log(myInfor);


// cac key trong obj la du lieu lay ra luon goi la thuoc tinh(property), neu la ham(function) thi goi la phuong thuc(method)







