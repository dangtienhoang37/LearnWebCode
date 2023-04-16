// fliter: tra ve tat ca element thoa man dieu kien

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

var filterCourse = course.filter(function (course,index,array){
    return course.coin > 700;
});
console.log(filterCourse);
