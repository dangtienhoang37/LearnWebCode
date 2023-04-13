//tao ham tong duong forEach2,reduce2,find2,filter2
// Array.prototype.forEach2 = function(callback) {
//     for(var i = 0; i <this.length; i++){
//         callback(this[i],i);
//     }
// }


// var courses =[
//     'js',
//     'php',
//     'ruby'
// ];
// function myFunc(course){
//     console.log(course);
// }

// courses.forEach2(myFunc);


//find2

Array.prototype.find2 = function(cb){
    var al = this.length;
    var kq;
    for( var i = 0; i < al; i ++){
        if(cb(this[i])){
        kq = this[i];
        break;
        }
        
    }
    return kq;
}

var num =[
    2,5,6,1,3,8,9,10
];
function checkNum(arr){
    return arr > 5;
}

console.log(num.find2(checkNum));


