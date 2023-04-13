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
Array.prototype.find2 = function(callback) {
    for(var i = 0; i <this.length; i++){
        if(this[i] == dk){
            callback(this[i],i);
        }
        
    }
}


var courses =[
    3,4,5,6,4,4,4,4,4
];
function isJs(course){
    return course > 3;
}

console.log(courses.find2(isJs));


