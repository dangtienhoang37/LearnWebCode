// call back: là hàm được truyền qua đối số khi gọi hàm khác
// đkien: hàm + truyền qua đối số

// function myFunc(param){
//     param('hoc lap trinh');
// }

// function myCallback(value){  //mycallback la mot callback
//     console.log('value', value);
// }
// myFunc(myCallback);


var courses =[
    'js',
    'php',
    'ruby'
];
function myFunc(course){
    return `<h2> ${course}</h2>`;
}

var htmls = courses.map(myFunc(courses));

// console.log(htmls.join(''));