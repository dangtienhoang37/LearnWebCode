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

Array.prototype.map2 = function(){

};

var courses =[
    'js',
    'php',
    'ruby'
];
function myFunc(course){
    return `<h2> ${course}</h2>`;
}

var htmls = courses.map2(myFunc);

console.log(htmls.join(''));