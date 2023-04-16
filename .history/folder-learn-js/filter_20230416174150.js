// fliter: tra ve tat ca element thoa man dieu kien

Array.prototype.filter2 = function(callback){
    var output = [];
    for( var index in this){
        if (this.hasOwnProperty(index)){
            var result = callback(this[index],index,this);
            if(result){
                output.push(this[index]);
            }
        }
        
    }
    return output;
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

var filterCourse = courses.filter2(function (course,index,array){
    // console.log(course,index,array);
    return course.coin > 700;
});
console.log(filterCourse);
