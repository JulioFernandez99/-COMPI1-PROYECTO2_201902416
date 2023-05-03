const Ambito = require("../Ambito/Ambito");
const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion");
const TIPO_OPERACION = require("../Enums/TipoOperacion");
const TIPO_VALOR = require("../Enums/TipoValor");
const Aritmetica = require("./Aritmetica.js");
const Logica = require("./OpLogica");
const Relacional = require("./Relacional");
const ValorExpresion = require("./ValorExpresion");
const procesarNativa = require("./nativa");




function Operacion(_expresion,_ambito){ 
    
    if(_expresion.tipo === TIPO_VALOR.DECIMAL || _expresion.tipo === TIPO_VALOR.BOOL || _expresion.tipo === TIPO_VALOR.ENTERO||_expresion.tipo==='UNARIA'||
        _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR || _expresion.tipo === TIPO_VALOR.CHAR||_expresion.tipo===TIPO_INSTRUCCION.LLAMADA_METODO){
            return ValorExpresion(_expresion,_ambito);
    }
    else if(_expresion.tipo===TIPO_OPERACION.SUMA){
        
        return Aritmetica(_expresion,_ambito);

    }
    else if(_expresion.tipo===TIPO_OPERACION.MODULO){
        return Aritmetica(_expresion,_ambito);

    }
    else if(_expresion.tipo===TIPO_OPERACION.RESTA){
        return Aritmetica(_expresion,_ambito);

    }
    else if(_expresion.tipo===TIPO_OPERACION.MULTIPLICACION){
        return Aritmetica(_expresion,_ambito);

    }
    else if(_expresion.tipo===TIPO_OPERACION.DIVISION){
        return Aritmetica(_expresion,_ambito);

    }
    else if(_expresion.tipo===TIPO_OPERACION.POTENCIA){
        return Aritmetica(_expresion,_ambito);

    }
    else if(_expresion.tipo === TIPO_OPERACION.IGUALIGUAL || _expresion.tipo === TIPO_OPERACION.DIFERENTE ||
        _expresion.tipo === TIPO_OPERACION.MENOR || _expresion.tipo === TIPO_OPERACION.MAYOR||_expresion.tipo === TIPO_OPERACION.MAYORIGUAL
        ||_expresion.tipo === TIPO_OPERACION.MENORIGUAL){
        return Relacional(_expresion, _ambito)
    }else if(_expresion.tipo === TIPO_OPERACION.AND || _expresion.tipo === TIPO_OPERACION.OR || _expresion.tipo === TIPO_OPERACION.NOT){
        return Logica(_expresion, _ambito)
    }else if(_expresion.tipo === TIPO_OPERACION.MASMAS){
        return Incremento(_expresion, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.TERNARIO){
        console.log("Procesando ternario")
    }else if(_expresion.tipo===TIPO_OPERACION.POSARRAY){
    console.log("------Operacion-------",_expresion)
        var tipo=_expresion.valor.tipo
        tipo=tipo.split("VAL_")[1]
        var arr=_ambito.getSimbolo(_expresion.id).valor
        var val=_expresion.valor.valor
        var valPos=arr[val]
        console.log("procesar posarray,Operacion: ",tipo)
        if(val>arr.length){
            "Error: La posicion "+val+"no esta definida en el array "+_expresion.id+"\n"+
            "Fila: "+_expresion.linea+" Columna: "+_expresion.columna+"\n"
        }
        return {
            valor:valPos,
            tipo:tipo
        }        
    }else if(_expresion.tipo === TIPO_INSTRUCCION.NATIVA){

        return procesarNativa(_expresion,_ambito)
        
    }

}
module.exports = Operacion