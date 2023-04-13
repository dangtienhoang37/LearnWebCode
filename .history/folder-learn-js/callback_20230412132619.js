// call back: là hàm được truyền qua đối số khi gọi hàm khác
// đkien: hàm + truyền qua đối số

// function myFunc(param){
//     param('hoc lap trinh');
// }

// function myCallback(value){  //mycallback la mot callback
//     console.log('value', value);
// }
// myFunc(myCallback);




// tu dinh nghia map2

Array.prototype.map2 = function(callback){
    // su dung this de lay ra course
    var arrLength = this.length
    for(var i = 0; i < arrLength; i++){
        callback(this[i], i);
    }
};

var courses =[
    'js',
    'php',
    'ruby'
];
function myFunc(course){
    return `<h2> ${course}</h2>`;
}

var htmls = courses.map2){
    console.log(index,course);
}

// console.log(htmls.join(''));