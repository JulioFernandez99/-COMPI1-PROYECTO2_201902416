const Ambito = require("../Ambito/Ambito");
const TIPO_DATO = require("../Enums/TipoDato");
const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion");
const Operacion = require("../Operaciones/Operacion");

function Switch(_instrucciones,_ambito){
    var mensaje="";
    var op=Operacion(_instrucciones.condicion,_ambito)
    console.log("Condicion switch: ",op.valor)
    console.log("Cases del switch: ",_instrucciones.instrucciones)
    var nuevoAmbito=new Ambito(_ambito,"Switch");
    const Bloque=require("./Bloque");
    var ejec;

    var codigoSwitch="";
    var ar=(_instrucciones.instrucciones)
    console.log("Instrucciones de los cases: ",ar.length)

    codigoSwitch+=`switch(${op.valor}){\n`
    for(var i=0;i<ar.length;i++){
        //console.log("Valor: ",_instrucciones.instrucciones[i].expresion.valor)
        codigoSwitch+=`   case ${_instrucciones.instrucciones[i].expresion.valor}:\n`
        codigoSwitch+=`      ejec=Bloque(_instrucciones.instrucciones[${i}].instrucciones,nuevoAmbito);\n`
        codigoSwitch+=`      mensaje+=ejec.cadena\n` 
        codigoSwitch+=`      break;\n`


        //console.log("Intruccion del case" ,i,_instrucciones.instrucciones[i].instrucciones)
    }
    codigoSwitch+="     default:\n"
    codigoSwitch+=`      ejec=Bloque(_instrucciones.deft.instrucciones,nuevoAmbito);\n`
    codigoSwitch+=`      mensaje+=ejec.cadena\n` 
    //codigoSwitch+=`         _instrucciones.deft.instrucciones ;\n`
    codigoSwitch+="         break;\n"
    codigoSwitch+=`}`
    console.log(codigoSwitch)


    
    eval(codigoSwitch)

    console.log("Default",_instrucciones.deft.instrucciones)
    /* var condCase;

    codigoSwitch+=`switch(${op.valor}){\n`
    //console.log("Instrucciones de los cases: ",_instrucciones.instrucciones[1].instrucciones)

    _instrucciones.instrucciones.forEach(instruccion => {
        console.log("Instrucciones de los cases: ",)
        
        var condCase=instruccion.expresion.valor
        
        codigoSwitch+=`   case ${condCase}:\n`
        codigoSwitch+=`      ejec=Bloque(${instruccion.instrucciones}.instrucciones,nuevoAmbito);\n`
        codigoSwitch+=`      mensaje+=ejec.cadena\n` 
        codigoSwitch+=`      console.log("Entro al case "+${condCase});\n`
        
        codigoSwitch+=`      break;\n`
        
    })
    codigoSwitch+="     default:\n"
    codigoSwitch+="         console.log(`Sorry, we are out of ${expr}.`);\n"
    codigoSwitch+=`}\n` */
    //console.log(codigoSwitch)
    //eval(codigoSwitch)

   /*  var cade="";
    cade+="switch ('Oranges') {\n"
        cade+="     case 'Oranges':\n"
        cade+="         console.log('Oranges are $0.59 a pound.');\n"
        cade+="         break;\n"
        cade+="     case 'Mangoes':\n"
        cade+="     case 'Papayas':\n"
        cade+="         console.log('Mangoes and papayas are $2.79 a pound.');\n"
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        cade+="         break;\n"
        cade+="     default:\n"
        cade+="         console.log(`Sorry, we are out of ${expr}.`);\n"
        cade+="}"
    
    console.log(cade)
    eval(cade) */
    
    return{
        cadena:mensaje
    }
   
}
module.exports = Switch;