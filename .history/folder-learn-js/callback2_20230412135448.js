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
Array.prototype.forEach2 = function(callback) {
    for(var i = 0; i <this.length; i++){
        callback(this[i],i);
    }
}


var courses =[
    'js',
    'php',
    'ruby'
];
function isJs(course){
    var i = course 
    return  i;
}

console.log(courses.find(isJs));


