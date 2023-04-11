//obj constructor(xay dung khung cua obj)

function User(firstName, lastName, avatar){
    this.firstName = firstName; // this.firstName(doi tuong dc khoi tao co thuoc tinh la firstname khi khoi tao)
    this.lastName = lastName;
    this.avatar = avatar;
    // phuong thuc
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// ham tren coi la mo ta thiet ke doi tuong

var athor = new User('son','Dang','avt');// su dung mo ta thiet ke o tren
var user = new User('on','ng','user');



// them thuoc tinh cho obj 
athor.title='chia se tai f8';
user.comment='comment ne'; 
console.log(athor);
console.log(user);
console.log(athor.getName());
console.log(user.getName());


console.log(athor.constructor=== User);


//cach 2
var User = function(firstName, lastName, avatar){
    this.firstName = firstName; // this.firstName(doi tuong dc khoi tao co thuoc tinh la firstname khi khoi tao)
    this.lastName = lastName;
    this.avatar = avatar;
    // phuong thuc
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

