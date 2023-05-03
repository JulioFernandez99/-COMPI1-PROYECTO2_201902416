const Ambito = require("../Ambito/Ambito");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operaciones/Operacion");




function SentenciaFor(_instrucciones,_ambito){
    console.log("Instrucciones for: ",_instrucciones)
    var mensaje="";
    var nuevoAmbito=new Ambito(_ambito,"For");
    const Evaluar=require("./Evaluar");
    const Bloque = require("./Bloque");

    console.log("Es asignacion? ",_instrucciones.declaracion.tipo)
    if(_instrucciones.declaracion.tipo==='INST_DECLARACION'){
    var ejec=Evaluar(_instrucciones.declaracion,nuevoAmbito);//declaro la variable del for
    console.log("Cadena: ",nuevoAmbito);

      var dic={
        IGUALIGUAL:"==",
        DIFERENTE:"!=",
        MENOR:"<",
        MENORIGUAL:"<=",
        MAYOR:">",
        MAYORIGUAL:">=",
        SUMA:"+",
        RESTA:"-"
    }
    //----------------------Definiendo declaracion-------------------------
    console.log("----------------------Definiendo declaracion-------------------------")
    var nomIterador=_instrucciones.declaracion.id
    console.log("Nombre Iterador: ",nomIterador)
    try{
        var valIterador=Number(_instrucciones.declaracion.valor.valor)
        
    }catch{
        
    }
    console.log("Valor Iterador: ",valIterador)
    //----------------------Definiendo expresion-------------------------
    console.log("----------------------Definiendo expresion-------------------------")
    var opizq=_instrucciones.expresion.opIzq.valor
    console.log("Operador izquierdo: ",opizq)
    var opLog=dic[_instrucciones.expresion.tipo]
    console.log("Operador logico: ",opLog)
    var opder=Number(_instrucciones.expresion.opDer.valor)
    console.log("Operador derecho: ",opder)
    //----------------------Definiendo actualizacion-------------------------
    console.log("----------------------Definiendo actualizacion-------------------------")
    var opAct=dic[_instrucciones.asignacion.expresion.tipo]
    console.log("Aumento/decremento: ",opAct)
    var valAct=Number(_instrucciones.asignacion.expresion.opDer.valor)
    console.log("Valor Aumento/decremento: ",valAct)

    


    var codigoFor=''
    codigoFor+=`for(var ${nomIterador}=${valIterador};${opizq}${opLog}${opder}; ${nomIterador}=${nomIterador}${opAct}${valAct}){\n`
    codigoFor+=`    ejec=Bloque(_instrucciones.instrucciones,nuevoAmbito);//reviso instrucciones\n`
    codigoFor+=`    mensaje+=ejec.cadena;\n`
    codigoFor+=`    ejec=Evaluar(_instrucciones.asignacion,nuevoAmbito);//incremento el valor
    nuevoAmbito.clearMapExceptFirst()\n`
    codigoFor+=`}`;

    console.log(codigoFor);
    eval(codigoFor);


    //console.log("Instrucciones: ",_instrucciones.instrucciones)
 
    /* console.log("Existe: ",nuevoAmbito.existeSimbolo('s'))
    console.log("Simbolo: ",nuevoAmbito.getSimbolo('s').tipo) */
    }
    else{
        //Procesando asignacion en el for
        console.log("Procesar asignacion")
        mensaje="Procesar asignacion"
    }



    return{
            cadena:mensaje
        } 
   
}
module.exports = SentenciaFor;