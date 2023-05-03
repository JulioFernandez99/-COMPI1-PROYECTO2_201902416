const Simbolo = require("../Ambito/Simbolo");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operaciones/Operacion")

function DeclaracionCast(_instruccion, _ambito){
    console.log("Declaracion con casteo");
    console.log("Tipo de dato del id: ",_instruccion.tipo_dato)
    console.log("Tipo de casteo del cast: ",_instruccion.tipo_cast)
    var valor=_instruccion.valor
    console.log("Valor a castear: ",valor)
    if (_instruccion.tipo_dato === TIPO_DATO.DECIMAL) {
        if(_instruccion.tipo_cast === TIPO_DATO.DECIMAL){ //de entero a decimal
            var valor = 0.0
            if (_instruccion.valor != null) {
                
                var op = Operacion(_instruccion.valor, _ambito)
                tipo = op.tipo;
                
                console.log("Operacion: ")
                if (tipo === "ENTERO" ) {
                    op["tipo"]='VAL_DECIMAL'
                    console.log("Exitooo....")
                    val=`${op.valor}.0`
                    valor=(val)
                    
                }else if(tipo==='DECIMAL'){
                    valor = op.valor;
                }

                const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)

                if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                    return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " + nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                // console.log(_ambito)
                return null
            }
            /* const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)

            if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " + nuevoSimbolo.columna;
            }
            _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
            // console.log(_ambito)
            return null */


        }else{
            return "Error:Se quiso asignar un valor tipo "+_instruccion.tipo_cast+" a un valor tipo "+_instruccion.tipo_dato+ "\n,Fila: "+ _instruccion.linea + " columna: " + valor.columna;
        }
        
    }else if (_instruccion.tipo_dato === TIPO_DATO.ENTERO) {
        if(_instruccion.tipo_cast === TIPO_DATO.ENTERO){ //de decimal a entero
            var valor = 0
            if (_instruccion.valor != null) {
                
                var op = Operacion(_instruccion.valor, _ambito)
                
                
                
                op['valor']=Math.round(op.valor)
                op["tipo"]='VAL_ENTERO'
                tipo = op.tipo;
                console.log("Operacion Entero: ",op)
                if (tipo === "VAL_ENTERO" ) {
                    //console.log("Exitooo....")
                    
                    valor=op.valor;
                    
                }else if(tipo==='ENTERO'){
                    valor = op.valor;
                }

                const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)

                if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                    return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " + nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                // console.log(_ambito)
                return null
            }
            
            /* const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)

            if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " + nuevoSimbolo.columna;
            }
            _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
            // console.log(_ambito)
            return null */


        }else{
            return "Error:Se quiso asignar un valor tipo "+_instruccion.tipo_cast+" a un valor tipo "+_instruccion.tipo_dato+ "\n,Fila: "+ _instruccion.linea + " columna: " + valor.columna;
        }

    }else if (_instruccion.tipo_dato === TIPO_DATO.CHAR) {
        if(_instruccion.tipo_cast === TIPO_DATO.CHAR){ //de int a char
            var valor = 0
            if (_instruccion.valor != null) {
                
                var op =_instruccion.valor
                tipo=op.tipo
                console.log("op: ",op)
                console.log("data: ",_instruccion.valor)
                
               
                op["tipo"]='VAL_CHAR'
                
                if (tipo === "VAL_ENTERO" ) {
                    //console.log("Exitooo....")
                    op['valor']=String.fromCharCode(op.valor)
                    tipo = op.tipo;
                    console.log("Operacion char: ",op) 
                    valor=op.valor;
                    
                }else if(tipo==='VAL_CHAR'){
                    valor = op.valor.replaceAll("\'","");
                }else if(tipo==='VAL_CADENA'){
                    op['TIPO']='VAL_CHAR'
                    valor = op.valor.replaceAll("\"","");
                }

                const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)

                if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                    return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " + nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                // console.log(_ambito)
                return null
            }
            
            /* const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)

            if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " + nuevoSimbolo.columna;
            }
            _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
            // console.log(_ambito)
            return null */


        }else{
            return "Error:Se quiso asignar un valor tipo "+_instruccion.tipo_cast+" a un valor tipo "+_instruccion.tipo_dato+ "\n,Fila: "+ _instruccion.linea + " columna: " + valor.columna;
        }

    }

}
module.exports = DeclaracionCast;