const Ambito = require("../Ambito/Ambito");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operaciones/Operacion");

function SentenciaWhile(_instrucciones,_ambito){
    var mensaje="";
    

    const Bloque=require("./Bloque");
    var operacion=Operacion(_instrucciones.expresion,_ambito);//Proceso la operacion
    while(operacion.valor){
        var nuevoAmbito=new Ambito(_ambito,"WHILE");
        var ejec=Bloque(_instrucciones.instrucciones,nuevoAmbito); //Proceso instrucciones
        mensaje+=ejec.cadena
    
        operacion=Operacion(_instrucciones.expresion,_ambito); //Proceso de nuevo la operacion
    }

    return{
        cadena:mensaje,
        res:operacion
    }
   
}
module.exports = SentenciaWhile;