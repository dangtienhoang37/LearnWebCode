






Array.prototype.some2 = function(callback){
    for (var index in this){
        if(this.hasOwnProperty(index)){
            // callback(this[index], index, this);
            if(callback(this[index], index, this)){
                return true;
            }
        }
    }
    return false;
}


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