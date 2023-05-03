const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion");
const Print = require("./Print");
const Asignacion = require("./Asignacion");
const Declaracion = require("./Declaracion");
const SentenciaIf=require('./IF');

const { AND } = require("../Enums/TipoOperacion");
const SentenciaFor = require("./For");
const OperadorTernario = require("./OpTernario");



function Evaluar(instruccion,_ambito){
    var cadena=""
    var resIF=""
    
        if(instruccion.tipo===TIPO_INSTRUCCION.PRINT){
           cadena+=Print(instruccion,_ambito) + "\n"
        }else if (instruccion.tipo === TIPO_INSTRUCCION.DECLARACION) {
            
            var mensaje = Declaracion(instruccion, _ambito)
            if (mensaje != null) {
                cadena += mensaje
            }
        } else if (instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION) {
            console.log("+++++++++++++",instruccion)
            var mensaje = Asignacion(instruccion, _ambito)
            if (mensaje != null) {
                cadena += mensaje
            }

       
        }
        
        else if (instruccion.tipo === TIPO_INSTRUCCION.IF) {
            // Procesando Instrucción If
            console.log(JSON.stringify(instruccion.instrucciones))
            var ejec=SentenciaIf(instruccion,_ambito)
            var mensaje=ejec.cadena;
            
            if(mensaje!=null && resIF===""){
                cadena+=mensaje
                resIF=mensaje;
                
            }
            
        
        }else if (instruccion.tipo === TIPO_INSTRUCCION.IF_ELSE) {
            // Procesando Instrucción If
            var ejec=SentenciaIfElse(instruccion,_ambito)
            var mensaje=ejec.cadena;
            console.log(ejec.res)
            if(mensaje!=null && resIF===""){
                cadena+=mensaje
            }
        
        }else if (instruccion.tipo === TIPO_INSTRUCCION.FOR) {
            // Procesando Instrucción If
            var ejec=SentenciaFor(instruccion,_ambito)
            var mensaje=ejec.cadena;
            console.log(ejec.res)
            if(mensaje!=null ){
                cadena+=mensaje
            }
        
        }
        else if (instruccion.tipo === TIPO_INSTRUCCION.TERNARIO) {
            var ejec=OperadorTernario(instruccion,_ambito)
            return ejec
        
        }else if(instruccion.tipo === TIPO_INSTRUCCION.NATIVA){
            console.log("Bloque----*")
            
        }
        
        
    
    return {
        cadena:cadena
    }

}
module.exports = Evaluar;
