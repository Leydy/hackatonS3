//Crea tu propia función map que funcione igual a Array.map. 
//Por ejemplo: function miMap(arreglo, callback).
var newArray =[];   
function myMap(array,callback){
    for(var i = 0; i < array.length; i++){
         newArray.push(array[i]);
    }
    console.log(newArray);
}

myMap([1, 2, 3, 4, 5],function(){});