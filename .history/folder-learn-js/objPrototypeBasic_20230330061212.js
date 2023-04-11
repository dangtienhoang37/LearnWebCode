// nguyen mau cua obj de tao doi tuong
function User(firstName, lastName, avatar){
    this.firstName = firstName; // this.firstName(doi tuong dc khoi tao co thuoc tinh la firstname khi khoi tao)
    this.lastName = lastName;
    this.avatar = avatar;
    // phuong thuc
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// them thuoc tinh
User.prototype.className = 'F8'; // tao o day thi khi log ra no nam trong phan prototype cua obj
User.prototype.getClassName = function(){
    return this.className;
}

var athor = new User('son','Dang','avt'); 
var user = new User('on','ng','user');
console.log(athor);
console.log(user);
console.log(user.className);