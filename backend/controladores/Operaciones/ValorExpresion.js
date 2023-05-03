const TIPO_DATO = require("../Enums/TipoDato");
const TIPO_VALOR = require("../Enums/TipoValor");


function ValorExpresion(_expresion,_ambito) {
    if(_expresion.tipo===TIPO_VALOR.DECIMAL){
        return{
            valor:Number(_expresion.valor),
            tipo:TIPO_DATO.DECIMAL,
            linea:_expresion.linea,
            columna:_expresion.columna
        }
    }else if(_expresion.tipo===TIPO_VALOR.BOOL){
        return {
            valor: _expresion.valor.toLowerCase()==='true' ? true: false,
            tipo: TIPO_DATO.BOOL,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }
    else if(_expresion.tipo===TIPO_VALOR.CADENA){
        
        return {
            valor: _expresion.valor.substring(1,_expresion.valor.length-1).replaceAll("\\\\","\\").replaceAll("\\'","\'").replaceAll("\\t","\t").replaceAll("\\n","\n").replaceAll('\\"','\"'),
            tipo: TIPO_DATO.CADENA,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }
    else if(_expresion.tipo===TIPO_VALOR.ENTERO){
        return {
            valor: Number(_expresion.valor),
            tipo: TIPO_DATO.ENTERO,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }else if(_expresion.tipo==='UNARIA'){
        const Operacion=require('./Operacion')
        var op=Operacion(_expresion.valor,_ambito)
        console.log("Valor op: ",op)
        var valor=Number(op.valor)*-1
        var tipo=op.tipo


        /* var val=_expresion.valor.valor
        console.log("Valor unaria: ",_expresion)
        var tipo=_expresion.valor.tipo.replaceAll("VAL_","")
        //console.log("Tipo de valor: ",_expresion.valor.valor.tipo)
        
        if(typeof val==='object'){
            //console.log("entro: ",_expresion)
            val=_expresion.valor.valor.valor
            val=val*-1
           
            tipo=_expresion.valor.valor.tipo.replaceAll("VAL_","")
        }
        //console.log("VALEXPRESION,UNARIA",val)
        val=Number(val)*-1 */
        
        
        return {
            valor: valor,
            tipo: tipo,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }else if(_expresion.tipo===TIPO_VALOR.CHAR){
        return {
            valor:_expresion.valor.substring(1,_expresion.valor.length-1),
            tipo: TIPO_DATO.CHAR,
            linea: _expresion.linea,
            columna: _expresion.columna
        }
    }else if(_expresion.tipo===TIPO_VALOR.IDENTIFICADOR){

        const simbolo= _ambito.getSimbolo(_expresion.valor) 

        if(simbolo!=null){
            return{
                valor:simbolo.valor,
                tipo:simbolo.tipo,
                linea:simbolo.linea,
                columna:simbolo.columna
            }
        }
        return{  
            valor: "Error: la variable " +_expresion.valor +" no existe Linea: " +_expresion.linea + " columna: " + _expresion.columna,
            tipo:null,
            linea:_expresion.linea,
            columna:_expresion.columna
        }
    }
}

module.exports = ValorExpresion;