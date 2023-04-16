


Array.prototype.every2 = function(callback){
    var output = true;
    for(var index in this){
        if (this.hasOwnproperty(index)){
            if (!callback(this[index],index,this)){
                output = false;
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
        isFinish: false,
    },
    {
        name:'ruby',
        coin:542,
        isFinish: true,
    }
];


var result = courses.every2(function(course,index,array) {
    return course.isFinish;
});

console.log(result);