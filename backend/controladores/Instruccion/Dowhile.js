const Ambito = require("../Ambito/Ambito");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operaciones/Operacion");

function SentenciaDoWhile(_instrucciones,_ambito){
    var mensaje="";
    
    
    
    var nuevoAmbito=new Ambito(_ambito,"DO-WHILE");
    const Bloque=require("./Bloque");
    var operacion=Operacion(_instrucciones.expresion,_ambito);//Proceso la operacion

    do{
        var ejec=Bloque(_instrucciones.instrucciones,nuevoAmbito); //Proceso instrucciones
        mensaje+=ejec.cadena
        operacion=Operacion(_instrucciones.expresion,_ambito); //Proceso de nuevo la operacion
    }while(operacion.valor);


    

    return{
        cadena:mensaje,
        res:operacion
    }
   
}
module.exports = SentenciaDoWhile;