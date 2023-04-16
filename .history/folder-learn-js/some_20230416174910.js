







var courses = [
    {
        name:'javascript',
        coin:680,
        isFinish: true,
    },
    {
        name:'php',
        coin:860,
        isFinish: false,
    },
    {
        name:'ruby',
        coin:542,
        isFinish: false,
    }
];

var result = courses.some(function(course,index,array) {
    return course.isFinish;
});

console.log(result);