//ternary operator


var course ={
    name: 'javascript',
    coin: 250
}
// if(course.coin >0){
//     console.log(`${course.coin} Coins`);
// }
// else {
//     console.log('Free');
// }

// tuong tu nhu tren

var print = (course.coin >0 ? `${course.coin} Coins` : 'Free');
console.log(print);