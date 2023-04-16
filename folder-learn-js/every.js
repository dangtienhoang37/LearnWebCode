


Array.prototype.every2 = function(callback){
    var output = true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(!callback(this[index],index,this)){
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
        isFinish: 'yes',
    },
    {
        name:'php',
        coin:860,
        isFinish: 'yes',
    },
    {
        name:'ruby',
        coin:542,
        isFinish: 'yes',
    }
];


var result = courses.every2(function(course,index,array) {
    return course.isFinish === 'yes';
});

console.log(result);