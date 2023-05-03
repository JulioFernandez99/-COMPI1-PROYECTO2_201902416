const Ambito = require("../Ambito/Ambito");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operaciones/Operacion");

function SentenciaIf(_instrucciones,_ambito){
    
    var mensaje="";
    var operacion=Operacion(_instrucciones.expresion,_ambito)
    if(operacion.tipo=TIPO_DATO.BOOL){
        if(operacion.valor){
            var nuevoAmbito=new Ambito(_ambito,"IF");
            const Bloque=require("./Bloque");
            var ejec=Bloque(_instrucciones.instrucciones,nuevoAmbito);
            mensaje+=ejec.cadena; 
            console.log("---------------Sentencia if---------------",mensaje)
        }
    }
    return{
        cadena:mensaje,
        res:operacion
    }
   
}
module.exports = SentenciaIf;