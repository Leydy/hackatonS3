var newArray = [];
function myFilter(array,callback){
    for(var i = 0; i < array.length; i++){
        if(array[i] === 'a'){
            newArray.push(array[i]);
        }
        
    }console.log(newArray);
}

myFilter(['a', 1 ,2 ,'a','a','a'],function(){});