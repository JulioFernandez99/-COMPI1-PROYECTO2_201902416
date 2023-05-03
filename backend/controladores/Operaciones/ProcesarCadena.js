const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion")
const TIPO_VALOR = require("../Enums/TipoValor")

const OperadorTernario = require("../Instruccion/OpTernario")
const Operacion = require("./Operacion")

function procesarCadena(_expresion, _ambito){
    //console.log("Cadena: ",_expresion.hasOwnProperty("tipo"))
   
    if(_expresion.hasOwnProperty("tipo")){
        if(_expresion.tipo===TIPO_INSTRUCCION.NATIVA){
            
            
            return Operacion(_expresion,_ambito)
        }
        else{
            //console.log("Mandar a operacion",_expresion)
            
            return Operacion(_expresion, _ambito)
        }
        
    }
    else{
        console.log("Procesar ternario")
        var res=OperadorTernario(_expresion,_ambito)

        console.log("Res: ",res)

        return res
    }
}
module.exports= procesarCadena