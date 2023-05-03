const procesarCadena = require("../Operaciones/procesarCadena")

function Print(_instruccion, _ambito){
    
    const cadena =procesarCadena(_instruccion.expresion, _ambito).valor
    //console.log("Cadena: ",cadena)
    return cadena
}
module.exports = Print