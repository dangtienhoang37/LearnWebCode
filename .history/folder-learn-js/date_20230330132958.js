

// date
var date = new Date(); // tra ra object date

console.log(typeof date);

console.log(date.toString());
console.log(date);

var year  =  date.getFullYear();
var month = date.getMonth() +1; // tra ve gia tri tu 0 - 11 nen phai +1 cho dung
var day = date.getDate();

// in ra chuoi theo format
console.log(`${day}/${month}/${year}`);

console.log(year);
console.log(month);
console.log(day);




// // cach 2
// var date = Date();// tra ra string date
// console.log(typeof date);
