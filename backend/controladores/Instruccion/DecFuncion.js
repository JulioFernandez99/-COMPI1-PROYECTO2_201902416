const Funcion = require("../Ambito/Funcion")


function DecFuncion(_instruccion,_ambito){
    const nuevaFuncion= new Funcion(_instruccion.nombre, _instruccion.lista_parametros,_instruccion.instrucciones,_instruccion.linea,_instruccion.columna,_instruccion.return)
    //console.log("DecFuncion",nuevaFuncion)
    if(_ambito.existeSimbolo(nuevaFuncion.id)!=false){ 
        return `Error: No se puede declarar una funcion con el mismo nombres de una variable '${nuevaFuncion.id}'... Linea: ${nuevaFuncion.linea} Columna: ${nuevaFuncion.columna}`
    
    }
    else if(_ambito.existeFuncion(nuevaFuncion.id)!=false){
        return `Error: La funcion '${nuevaFuncion.id}' ya existe... Linea: ${nuevaFuncion.linea} Columna: ${nuevaFuncion.columna}`
   
    }
    _ambito.addFuncion(nuevaFuncion.id,nuevaFuncion)
    return null

}
module.exports = DecFuncion