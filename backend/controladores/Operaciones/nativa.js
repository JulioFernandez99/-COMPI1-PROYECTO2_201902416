const TIPO_DATO = require("../Enums/TipoDato");
const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion");
const TIPO_OPERACION = require("../Enums/TipoOperacion");

function procesarNativa(_instruccion,_ambito){

    
    if(_instruccion.tipo===TIPO_INSTRUCCION.NATIVA){
        
        if(_instruccion.tipo_nativa===TIPO_OPERACION.LOWER){
            const Operacion=require('./Operacion')
            var op=Operacion(_instruccion.expresion,_ambito)
        
            var val=op.valor.toString().toLowerCase()
            console.log("ProcesarNativa-: ",_instruccion.tipo_nativa)
            return{
                    tipo:TIPO_DATO.CADENA,
                    valor: val,
                    linea: op.linea,
                    columna: op.columna
            }
        }else if(_instruccion.tipo_nativa===TIPO_OPERACION.UPPER){
            const Operacion=require('./Operacion')
            var op=Operacion(_instruccion.expresion,_ambito)
        
            var val=op.valor.toString().toUpperCase()
            console.log("ProcesarNativa-: ",_instruccion.tipo_nativa)
            return{
                    tipo:TIPO_DATO.CADENA,
                    valor: val,
                    linea: op.linea,
                    columna: op.columna
            }
        }else if(_instruccion.tipo_nativa===TIPO_OPERACION.LENGTH){
            var id=_instruccion.expresion.valor
            var simbolo=_ambito.getSimbolo(id.toString())
            var ar=simbolo.valor
            var tam=ar.length
            console.log("Procesando length: ",simbolo)
            return{
                tipo:TIPO_DATO.ENTERO,
                valor: tam,
                linea: simbolo.linea,
                columna: simbolo.columna
        }
        }else if(_instruccion.tipo_nativa===TIPO_OPERACION.TRUNCATE){
           console.log("Procesar truncate")
           const Operacion=require('./Operacion')
            var op=Operacion(_instruccion.expresion,_ambito)
        
            var val=op.valor.toString().toUpperCase()
            val=Math.trunc(val)
            console.log("ProcesarNativa-: ",_instruccion.tipo_nativa)
            return{
                    tipo:TIPO_DATO.ENTERO,
                    valor: val,
                    linea: op.linea,
                    columna: op.columna
            }
        }else if(_instruccion.tipo_nativa===TIPO_OPERACION.ROUND){
            console.log("Procesar truncate")
            const Operacion=require('./Operacion')
             var op=Operacion(_instruccion.expresion,_ambito)
         
             var val=op.valor.toString().toUpperCase()
             val=Math.round(val)
             console.log("ProcesarNativa-: ",_instruccion.tipo_nativa)
             return{
                     tipo:TIPO_DATO.ENTERO,
                     valor: val,
                     linea: op.linea,
                     columna: op.columna
             }
         }else if(_instruccion.tipo_nativa===TIPO_OPERACION.TYPE){
            var id=_instruccion.expresion.valor
            var simbolo=_ambito.getSimbolo(id.toString())
            var tipo=simbolo.tipo
            console.log("Procesando TYPE: ",simbolo)
            var tp="VAL_"+tipo

            if(tipo==='ENTERO'){
                tipo='int'
            }
            else if(tipo==='DECIMAL'){
                tipo='double'
            }
            else if(tipo==='CADENA'){
                tipo='string'
            }
            else if(tipo==='CHAR'){
                tipo='char'
            }
            else if(tipo==='BOLEANO'){
                tipo='booleano'
            }
            


            return{
                tipo:TIPO_DATO.CADENA,
                valor: tipo.toString(),
                linea: simbolo.linea,
                columna: simbolo.columna
        }
        }else if(_instruccion.tipo_nativa===TIPO_OPERACION.TOSTRING){
            const Operacion=require('./Operacion')
            var op=Operacion(_instruccion.expresion,_ambito)
        
            var val=op.valor
            console.log("ProcesarNativa-: ",_instruccion.tipo_nativa)
            return{
                    tipo:TIPO_DATO.CADENA,
                    valor: {val},
                    linea: op.linea,
                    columna: op.columna
            }
        }
        
    }

}


module.exports=procesarNativa;