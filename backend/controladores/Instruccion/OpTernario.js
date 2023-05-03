const Ambito = require("../Ambito/Ambito");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operaciones/Operacion");
const Logica=require('../Operaciones/OpLogica')

function OperadorTernario(_instruccion,_ambito){
    console.log("Expresion: ",_instruccion)
    try{
        var op=Operacion(_instruccion.expresion.instrucciones.condicion,_ambito)
    console.log("Res expresion: ",op.valor)
    


    if(op.valor){
        console.log("Entro verdad")
        return _instruccion.expresion.instrucciones.expresion1
    }
    else{
        console.log("Entro falso")
        return _instruccion.expresion.instrucciones.expresion2
    }}catch{
        console.log("Ternario desde print",_instruccion.instrucciones.condicion)
        var op=Operacion(_instruccion.instrucciones.condicion,_ambito)
        console.log("Res expresion: ",op.valor)
        
    
    
        if(op.valor){
            console.log("Entro verdad",_instruccion.instrucciones.expresion1)
            try {
                _instruccion.instrucciones.expresion1.valor=_instruccion.instrucciones.expresion1.valor.replaceAll("\"","")
            } catch (error) {
                _instruccion.instrucciones.expresion1.valor=_instruccion.instrucciones.expresion1.valor
            }
            return _instruccion.instrucciones.expresion1
        }
        else{
            console.log("Entro falso",_instruccion.instrucciones.expresion2)
            try {
                _instruccion.instrucciones.expresion2.valor=_instruccion.instrucciones.expresion2.valor.replaceAll("\"","")
            } catch (error) {
                _instruccion.instrucciones.expresion2.valor=_instruccion.instrucciones.expresion2.valor 
            }
            return _instruccion.instrucciones.expresion2
        }
    }
    //console.log("Expresion 1: ",_instruccion.expresion.instrucciones.expresion1)
    //console.log("Expresion 2: ",_instruccion.expresion.instrucciones.expresion2)
    
    
   
}
module.exports = OperadorTernario;