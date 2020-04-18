//Crea tu propia función forEach que funcione igual a Array.forEach. 
//Por ejemplo: function miForEach(arreglo, callback){ // completa aquí }
function myforEach(array,callback){
    for(var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

myforEach([1, 2, 3],function(){});