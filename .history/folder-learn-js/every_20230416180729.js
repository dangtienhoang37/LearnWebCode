


Array.prototype.every2 = function(callback){
    var output = false;
    for (var index in this){
        if(this.hasOwnProperty(index)){
            // callback(this[index], index, this);
            if(callback(this[index], index, this)){
                output = true;
                break;
            }
        }
    }
    return output;
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
        isFinish: true,
    },
    {
        name:'ruby',
        coin:542,
        isFinish: true,
    }
];


var result = courses.every(function(course,index,array) {
    return course.isFinish;
});

console.log(result);