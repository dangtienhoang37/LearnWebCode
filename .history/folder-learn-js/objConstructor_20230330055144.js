//obj constructor(xay dung khung cua obj)

function User(firstName, lastName, avatar){
    this.firstName = firstName; // this.firstName(doi tuong dc khoi tao co thuoc tinh la firstname khi khoi tao)
    this.lastName = lastName;
    this.avatar = avatar;
}

var athor = new User('son','Dang','avt');
var user = new User('on','ng','user');
console.log(athor);
console.log(user);
