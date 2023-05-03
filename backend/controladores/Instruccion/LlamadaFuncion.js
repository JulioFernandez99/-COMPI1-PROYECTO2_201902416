const Ambito = require("../Ambito/Ambito")
const Instruccion = require("./Instruccion")
const DecParametro = require("./DecParametro")

function LlamadaFuncion(_instruccion, _ambito) {
    const Bloque = require("./Bloque")
    var funcionEjecutar = _ambito.getFuncion(_instruccion.nombre)

    
    var cadena=""
    if(funcionEjecutar!=null){
       var nuevoAmbito = new Ambito(_ambito,"Main")
       
       console.log(funcionEjecutar)
       if (funcionEjecutar.lista_parametro != null) {
        if (_instruccion.lista_valores != null && funcionEjecutar.lista_parametro.length == _instruccion.lista_valores.length) {
           // console.log("entro")
           //console.log("entro a parametros")
            var error = false;
            for (let i = 0; i < funcionEjecutar.lista_parametro.length; i++) {
               
                var declaracionAsignacion = Instruccion.nuevaDeclaracion(funcionEjecutar.lista_parametro[i].id, _instruccion.lista_valores[i], funcionEjecutar.lista_parametro[i].tipo_dato, _instruccion.linea, _instruccion.columna)
                //console.log(declaracionAsignacion)
                var mensaje = DecParametro(declaracionAsignacion, nuevoAmbito)

                if (mensaje != null) {
                    error = true
                    cadena += mensaje + "\n"


                }
            }
            if (error) {
                return cadena
            }
            var ejec = Bloque(funcionEjecutar.instrucciones, nuevoAmbito)
            var mensaje = ejec.cadena
            
            return mensaje
        }
        else {
            
            return `Error: Faltan valores para la funcion ${_instruccion.nombre}... Linea: ${_instruccion.linea} Columna: ${_instruccion.columna}`
        }

    } else{
        
            var ejec = Bloque(funcionEjecutar.instrucciones,nuevoAmbito)
            var mensaje = ejec.cadena
            return mensaje
       }
    }
    return `Error: La funcion ${_instruccion.nombre} no existe... Linea: ${_instruccion.linea} Columna: ${_instruccion.columna}`
}

module.exports = LlamadaFuncion