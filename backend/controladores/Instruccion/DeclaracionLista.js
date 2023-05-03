const Simbolo = require("../Ambito/Simbolo");
const TIPO_DATO = require("../Enums/TipoDato");
const TIPO_VALOR = require("../Enums/TipoValor");
const Operacion = require("../Operaciones/Operacion")

function DeclaracionLista(_instruccion, _ambito){
    //console.log("Instrucciones: ",_instruccion.nuevo_tipo)


        if(_instruccion.toChar===false){
            if(_instruccion.tipoLs===TIPO_DATO.ENTERO && _instruccion.tipoNw==TIPO_DATO.ENTERO){
                var valor=[]
                const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)
    
                if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                    return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
    
                //console.log("Ambito: ",_ambito)
                
                return null
    
            }else if(_instruccion.tipoLs===TIPO_DATO.DECIMAL && _instruccion.tipoNw==TIPO_DATO.DECIMAL){
                var valor=[]
                const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)
    
                if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                    return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
    
                //console.log("Ambito: ",_ambito)
                return null
    
            }else if(_instruccion.tipoLs==="CADENA" && _instruccion.tipoNw=="CADENA"){
                var valor=[]
                const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)
    
                if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                    return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
    
                //console.log("Ambito: ",_ambito)
                return null
    
            } else if(_instruccion.tipoLs===TIPO_DATO.CHAR && _instruccion.tipoNw==TIPO_DATO.CHAR){
                var valor=[]
                const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CHAR, _instruccion.linea, _instruccion.columna)
    
                if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                    return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
    
                //console.log("Ambito: ",_ambito)
                return null
    
            }else if(_instruccion.tipoLs===TIPO_DATO.BOOL && _instruccion.tipoNw==TIPO_DATO.BOOL){
                var valor=[]
                const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.BOOL, _instruccion.linea, _instruccion.columna)
    
                if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                    return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
    
                //console.log("Ambito: ",_ambito)
                return null
    
            }else{
                console.log("Error: ",_instruccion)
                return "Error: Se asigno un tipo distinto "+"Fila: "+_instruccion.linea+" Columna: "+_instruccion.columna+"\n"
            }
        }else{
            console.log("+++++++Entro a tocharArray++++++++++++++",_instruccion.palabra.valor)
            var palabra=_instruccion.palabra.valor.replaceAll("\"","")
            var valor=palabra.split("")
            const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)
    
                if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                    return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
    
                //console.log("Ambito: ",_ambito)
                return null
        }


}
module.exports = DeclaracionLista;