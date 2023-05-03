const TIPO_OPERACION = require("../Enums/TipoOperacion")

function OperacionArray(_instruccion,_ambito){

    
    if(_instruccion.opIzq.tipo===TIPO_OPERACION.POSARRAY){
        var nomArray=_instruccion.opIzq.id
        var ar=_ambito.getSimbolo(nomArray.toString()).valor
        var pos=_instruccion.opIzq.valor.valor
        var val=ar[pos]
        return val
       
    }
    
}

module.exports=OperacionArray