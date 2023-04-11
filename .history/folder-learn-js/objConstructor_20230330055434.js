//obj constructor(xay dung khung cua obj)

function User(firstName, lastName, avatar){
    this.firstName = firstName; // this.firstName(doi tuong dc khoi tao co thuoc tinh la firstname khi khoi tao)
    this.lastName = lastName;
    this.avatar = avatar;
}
// ham tren coi la mo ta thiet ke doi tuong

var athor = new User('son','Dang','avt');// su dung mo ta thiet ke o tren
var user = new User('on','ng','user');
console.log(athor);
console.log(user);

console.log(athor.constructor)
