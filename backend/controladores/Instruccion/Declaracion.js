const Simbolo = require("../Ambito/Simbolo");
const TIPO_DATO = require("../Enums/TipoDato");
const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion");
const Operacion = require("../Operaciones/Operacion");
const OperadorTernario = require("./OpTernario");

function Declaracion(_instruccion, _ambito){
    console.log("tipo",_instruccion.tipo_dato)
    if (_instruccion.tipo_dato === TIPO_DATO.DECIMAL) { 
        var valor = 0.0
        if (_instruccion.valor != null) {
            var op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            if (tipo === TIPO_DATO.DECIMAL) {
                valor = op.valor;
            }
        }
        
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error 1: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " + nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        // console.log(_ambito)
        return null
    }else if (_instruccion.tipo_dato === TIPO_DATO.ENTERO) {
        
        var valor = 0
        if (_instruccion.valor != null) { 
            
            console.log("Op: ",_instruccion.valor)
            try {
                var op = Operacion(_instruccion.valor, _ambito)
                tipo = op.tipo;
                if (tipo === TIPO_DATO.ENTERO) {
                    valor = op.valor;
                }
            } catch (error) {
                var op=OperadorTernario(_instruccion.valor,_ambito)
                console.log("Ternario: ",op)
                valor = op.valor;
            }
            
            
            
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)
       
        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {

            return "Error 2: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " + nuevoSimbolo.columna;
        }

        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(_ambito)
        return null
    } else if (_instruccion.tipo_dato === TIPO_DATO.CHAR) {
        var valor = ''
        if (_instruccion.valor != null) {
            try {
                var op = Operacion(_instruccion.valor, _ambito)
                tipo = op.tipo;
                if (tipo === TIPO_DATO.CHAR) {
                    valor = op.valor;
                }
            } catch (error) {
                var op=OperadorTernario(_instruccion.valor,_ambito)
                console.log("Ternario: ",op)
                valor = op.valor;
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CHAR, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {

            return "Error 3: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " + nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(_ambito)
        return null
    } else if (_instruccion.tipo_dato === TIPO_DATO.BOOL) {
        var valor = true
        if (_instruccion.valor != null) {

            try {
                var op = Operacion(_instruccion.valor, _ambito)
                tipo = op.tipo;
                if (tipo === TIPO_DATO.BOOL) {
                    valor = op.valor;
                }
            } catch (error) {
                var op=OperadorTernario(_instruccion.valor,_ambito)
                console.log("Ternario: ",op)
                valor = op.valor;
            }
            
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.BOOL, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error 4: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " + nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        // console.log(_ambito)
        return null
    } else if (_instruccion.tipo_dato === TIPO_DATO.CADENA) {
        
        var valor = ""
        // console.log(_instruccion)
        if (_instruccion.valor != null) {
            try {
                var op = Operacion(_instruccion.valor, _ambito)
                tipo = op.tipo;
                if (tipo === TIPO_DATO.CADENA) {
                    valor = op.valor;
                }
            } catch (error) {
                var op=OperadorTernario(_instruccion.valor,_ambito)
                console.log("Ternario: ",op)
                valor = op.valor;
            }
            
        }
        console.log("Valor: ",valor)
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error 5: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " + nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(_ambito)
        return null
    }
}
module.exports = Declaracion;