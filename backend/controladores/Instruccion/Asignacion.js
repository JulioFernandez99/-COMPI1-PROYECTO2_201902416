const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion");
const TIPO_OPERACION = require("../Enums/TipoOperacion");
const Operacion = require("../Operaciones/Operacion");
const OperadorTernario = require("./OpTernario");

function Asignacion(_instruccion,_ambito){
    var tern=false

    try{
        tern=_instruccion.expresion.instrucciones.tipo
    }catch{
        tern=false
    }
    console.log("Estamos en asignacion: ",tern)

    const id=_instruccion.id;
    const existe= _ambito.existeSimbolo(id);
    
    if(existe && tern===false){
        
        var valor=Operacion(_instruccion.expresion,_ambito)
        console.log("Asignacion: ",valor)
        var simbolo=_ambito.getSimbolo(id);
        //Esta parte resuelve la asignacion a la hora de hacer el dibujo
        simbolo.valor=valor.valor;
        _ambito.actualizar(id,simbolo);

        /* var tipos={
            tipoSimbolo:simbolo.tipo,  
            tipoNuevoValor:valor.tipo
        }
        if(tipos.tipoSimbolo===tipos.tipoNuevoValor){ //int a = 5
            simbolo.valor=valor.valor;
            _ambito.actualizar(id,simbolo);
            return null
        } */
    }else if(tern===TIPO_OPERACION.TERNARIO){
        console.log("Procesar ternario")
        var res=OperadorTernario(_instruccion,_ambito)

        console.log("Res: ",res)
        _ambito.actualizar(id,res);
z
        
    }
    
    else{
        return "La variable " + id + " no existe Linea: " + _instruccion.linea + " columna: " + _instruccion.columna;

    }
}
module.exports = Asignacion