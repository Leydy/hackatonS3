//Crea tu propia función reduce que funcione igual a Array.reduce. 
//Por ejemplo: function miReduce(arreglo, reduce).
var sum = 0;
function myReduce(array,callback){
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}
myReduce([1, 2, 3 , 4],function(){});