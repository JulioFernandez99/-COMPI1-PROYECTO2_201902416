const Simbolo = require("../Ambito/Simbolo");
const TIPO_DATO = require("../Enums/TipoDato");
const TIPO_VALOR = require("../Enums/TipoValor");
const Operacion = require("../Operaciones/Operacion")

function DeclaracionArray(_instruccion, _ambito){
    //console.log("Instrucciones: ",_instruccion.nuevo_tipo)

    if(_instruccion.nuevo_tipo!=null){

        if(_instruccion.tipo_dato===TIPO_DATO.ENTERO && _instruccion.nuevo_tipo==TIPO_DATO.ENTERO){
            var op;
            var valor;
            if (_instruccion.valor != null) {
                op = Operacion(_instruccion.valor, _ambito)
                valor=new Array(op.valor)
            }
            const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)

            if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
            }
            _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

            //console.log("Ambito: ",_ambito)
            return null

        }else if(_instruccion.tipo_dato===TIPO_DATO.DECIMAL && _instruccion.nuevo_tipo==TIPO_DATO.DECIMAL){
            var op;
            var valor;
            if (_instruccion.valor != null) {
                op = Operacion(_instruccion.valor, _ambito)
                valor=new Array(op.valor)
            }
            const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)

            if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
            }
            _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

            //console.log("Ambito: ",_ambito)
            return null

        }else if(_instruccion.tipo_dato===TIPO_DATO.CADENA && _instruccion.nuevo_tipo==TIPO_DATO.CADENA){
                var op;
                var valor;
                if (_instruccion.valor != null) {
                    op = Operacion(_instruccion.valor, _ambito)
                    valor=new Array(op.valor)
                }
                const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)

                if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                    return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

                //console.log("Ambito: ",_ambito)
                return null

        }else if(_instruccion.tipo_dato===TIPO_DATO.CHAR && _instruccion.nuevo_tipo==TIPO_DATO.CHAR){
            var op;
            var valor;
            if (_instruccion.valor != null) {
                op = Operacion(_instruccion.valor, _ambito)
                valor=new Array(op.valor)
            }
            const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CHAR, _instruccion.linea, _instruccion.columna)

            if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
            }
            _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

            //console.log("Ambito: ",_ambito)
            return null

        }else if(_instruccion.tipo_dato===TIPO_DATO.BOOL && _instruccion.nuevo_tipo==TIPO_DATO.BOOL){
            var op;
            var valor;
            if (_instruccion.valor != null) {
                op = Operacion(_instruccion.valor, _ambito)
                valor=new Array(op.valor)
            }
            const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.BOOL, _instruccion.linea, _instruccion.columna)

            if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
                return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
            }
            _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

           //console.log("Ambito: ",_ambito)
            return null

        }
        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error e: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";  
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(_ambito)
        return null 

}else{
    //-------------------------------------Declaracion de arreglo sin new-----------------------------------------
    //console.log("Declaracion de arreglo sin new: ",_instruccion.valor.length)
    
    
    if(_instruccion.tipo_dato===TIPO_DATO.ENTERO ){
        var array=[];
        for(let i=0;i<_instruccion.valor.length;i++){
            if(_instruccion.valor[i].tipo===TIPO_VALOR.ENTERO){
                array.push(_instruccion.valor[i].valor)
                //console.log("-----",_instruccion.valor[i].valor)
            }
            else{
                return "Error1: Se asigno un tipo de valor distinto dentro del array Fila:"+_instruccion.valor[i].linea+" Columna: "+_instruccion.valor[i].columna+"\n"
            }
           
        }

        const nuevoSimbolo = new Simbolo(_instruccion.id, array, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

        //console.log("Ambito: ",_ambito)
        return null

    }else if(_instruccion.tipo_dato===TIPO_DATO.DECIMAL ){
        var array=[];
        for(let i=0;i<_instruccion.valor.length;i++){
            if(_instruccion.valor[i].tipo===TIPO_VALOR.DECIMAL){
                array.push(_instruccion.valor[i].valor)
                //console.log("-----",_instruccion.valor[i].valor)
            }
            else{
                return "Error: Se asigno un tipo de valor distinto dentro del array Fila:"+_instruccion.valor[i].linea+" Columna: "+_instruccion.valor[i].columna+"\n"
            }
           
        }

        const nuevoSimbolo = new Simbolo(_instruccion.id, array, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

        //console.log("Ambito: ",_ambito)
        return null

    }else if(_instruccion.tipo_dato===TIPO_DATO.CADENA ){
        var array=[];
        for(let i=0;i<_instruccion.valor.length;i++){
            if(_instruccion.valor[i].tipo===TIPO_VALOR.CADENA){
                array.push(_instruccion.valor[i].valor)
                //console.log("-----",_instruccion.valor[i].valor)
            }
            else{
                return "Error: Se asigno un tipo de valor distinto dentro del array Fila:"+_instruccion.valor[i].linea+" Columna: "+_instruccion.valor[i].columna+"\n"
            }
           
        }

        const nuevoSimbolo = new Simbolo(_instruccion.id, array, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

        //console.log("Ambito: ",_ambito)
        return null

    }else if(_instruccion.tipo_dato===TIPO_DATO.CHAR ){
        var array=[];
        for(let i=0;i<_instruccion.valor.length;i++){
            if(_instruccion.valor[i].tipo===TIPO_VALOR.CHAR){
                array.push(_instruccion.valor[i].valor)
                //console.log("-----",_instruccion.valor[i].valor)
            }
            else{
                return "Error: Se asigno un tipo de valor distinto dentro del array Fila:"+_instruccion.valor[i].linea+" Columna: "+_instruccion.valor[i].columna+"\n"
            }
           
        }

        const nuevoSimbolo = new Simbolo(_instruccion.id, array, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

        //console.log("Ambito: ",_ambito)
        return null

    }else if(_instruccion.tipo_dato===TIPO_DATO.BOOL ){
        var array=[];
        for(let i=0;i<_instruccion.valor.length;i++){
            if(_instruccion.valor[i].tipo===TIPO_VALOR.BOOL){
                array.push(_instruccion.valor[i].valor)
                //console.log("-----",_instruccion.valor[i].valor)
            }
            else{
                return "Error: Se asigno un tipo de valor distinto dentro del array Fila:"+_instruccion.valor[i].linea+" Columna: "+_instruccion.valor[i].columna+"\n"
            }
           
        }

        const nuevoSimbolo = new Simbolo(_instruccion.id, array, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

        //console.log("Ambito: ",_ambito)
        return null

    }

}
    
/*
     if (_instruccion.tipo_dato === TIPO_DATO.DECIMAL) { 
        var valor;
        if (_instruccion.valor != null) {
            var op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            if (tipo === TIPO_DATO.DECIMAL) {
                valor = new Array(op.valor);
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

        console.log("Ambito: ",_ambito)
        return null
    } else if (_instruccion.tipo_dato === TIPO_DATO.ENTERO) {

        var valor = 0
        if (_instruccion.valor != null) { 
            var op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            if (tipo === TIPO_DATO.ENTERO) {
                valor = op.valor;
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)
        
       

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false ) {
           
                console.log("Error detectado: "+JSON.stringify(nuevoSimbolo))
                return "Error2: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
        
            
        }

        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(_ambito)
        return null
    } else if (_instruccion.tipo_dato === TIPO_DATO.CHAR) {
        var valor = ''
        if (_instruccion.valor != null) {
            var op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            if (tipo === TIPO_DATO.CHAR) {
                valor = op.valor;
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CHAR, _instruccion.linea, _instruccion.columna)
        
        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {

            return "Error: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(_ambito)
        return null
    } else if (_instruccion.tipo_dato === TIPO_DATO.BOOL) {
        var valor = true
        if (_instruccion.valor != null) {

            var op = Operacion(_instruccion.valor, _ambito)
            //console.log(op)
            tipo = op.tipo;
            if (tipo === TIPO_DATO.BOOL) {
                valor = op.valor;
            }
            
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.BOOL, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error : La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        // console.log(_ambito)
        return null
    } else if (_instruccion.tipo_dato === TIPO_DATO.CADENA) {
        var valor = ""
        // console.log(_instruccion)
        if (_instruccion.valor != null) {
            var op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            if (tipo === TIPO_DATO.CADENA) {
                valor = op.valor;
            }
            
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)

        if (_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id) != false) {
            return "Error e: La variable " + nuevoSimbolo.id + " ya existe linea: " + nuevoSimbolo.linea + " columna: " +  nuevoSimbolo.columna+"\n";
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(_ambito)
        return null 
    } */
}
module.exports = DeclaracionArray;