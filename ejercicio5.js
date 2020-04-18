//Crea tu propia función sort que funcione igual a Array.sort. 
//Por ejemplo: function miSort(arreglo, callback).

var gatos = ['Travis','Smoking','Bob','Doroty'];

const mySort = function (array, callback){
    let newArray = "";
    return newArray = callback(array.sort());
}

const gatosOrder = mySort(gatos, function(task){
    return task;
})

console.log(gatosOrder);