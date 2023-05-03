const TIPO_DATO = require("../Enums/TipoDato")


function AddLista(_instruccion,_ambito){

    var nmLs=_instruccion.id
    var data=_ambito.getSimbolo(nmLs)
    var tipoLs=data.tipo
    var ar=data.valor
    var linea=data.linea
    var columna=data.columna


    console.log("id:",nmLs)
    console.log("valor:",ar)
    console.log("tipo:",tipoLs)
    console.log("linea:",linea)
    console.log("columna:",columna)


    var tipoAdd=_instruccion.valor.tipo.replace("VAL_","")
    var valAdd=_instruccion.valor.valor.replaceAll("\"","")

    if(tipoAdd===tipoLs){
        ar.push(valAdd)
        var inf={
            id:nmLs,
            valor:ar,
            tipo:tipoLs,
            linea:linea,
            columna:columna
        }
        _ambito.actualizar(nmLs,inf)
    }
    else{
        return "Error: Se quiere agregar a la lista un valor tipo: "+tipoAdd+" a una lista tipo "+tipoLs+"\nFila:"+linea+" Columna: "+columna+"\n"
    }
    
}

module.exports=AddLista