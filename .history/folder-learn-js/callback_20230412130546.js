// call back: là hàm được truyền qua đối số khi gọi hàm khác
// đkien: hàm + truyền qua đối số

function myFunc(param){
    console.log(typeof param);
}

function myCallback(value){  //mycallback la mot callback
    console.log('value', value);
}
myFunc(myCallback);