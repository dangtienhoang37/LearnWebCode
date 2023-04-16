// fliter: tra ve tat ca element thoa man dieu kien

Array.prototype.filter2 = function(callback){
    for( var index in this){
        if (this.hasOwnProperty(index)){
            callback(this[index],index,this);
        }
    }
};
var courses = [
    {
        name:'javascript',
        coin:680
    },
    {
        name:'php',
        coin:860
    },
    {
        name:'ruby',
        coin:542
    }
];

var filterCourse = courses.filter(function (course,index,array){
    console.log(course,index,array);
    return course.coin > 200;
});
console.log(filterCourse);
