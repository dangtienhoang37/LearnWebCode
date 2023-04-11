// for/ in
var myInfor= {
    name: 'son dang',
    age: 18,
    add: 'ha noi'
};

for (var key in myInfor){
    console.log(key);
    console.log(myInfor[key]);
}


//array
var language = ['js','c++','python']
for (var key in language){
    console.log(key);
    console.log(language[key]);
}


var languageString = 'javascript';
for (var key in languageString){
    console.log(languageString[key]);

}


function run(object) {
    var arr = [];
    for (var key in object){
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`); // dau `` de in ra chuoi co format nhu trong do
    }
    return arr;

}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]