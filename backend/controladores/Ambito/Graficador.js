const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion")
const TIPO_OPERACION = require("../Enums/TipoOperacion")
const TIPO_VALOR = require("../Enums/TipoValor")


class Graficador {

    constructor(_raiz) {
        this.grafo=""
        this.raiz = _raiz
        this.contador = 0

    }

    graficar(){
        this.grafo="digraph G {\n"
        this.grafo += "node[shape=\"box\"]"
        this.grafo += "Nodo0[label=\"RAIZ\"];\n"
        this.contador = 1
        this.recorrerAST("Nodo0", this.raiz)
        this.grafo += "}"
        return this.grafo
    }

    recorrerAST(_padre, _hijo){  //ambito global
        _hijo.forEach(instruccion => {
            if (instruccion.tipo === TIPO_INSTRUCCION.DECLARACION) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"DECLARACION\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarDeclaracion(instruccion, nombreHijo)
            } else if (instruccion.tipo === TIPO_INSTRUCCION.MAIN) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"MAIN\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarMain(instruccion, nombreHijo)

            }else if (instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"ASIGNACION\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarAsignacion(instruccion, nombreHijo)
            } else if (instruccion.tipo === TIPO_INSTRUCCION.DEC_METODO) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"DEC_METODO\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarMetodo(instruccion, nombreHijo)
            }else if (instruccion.tipo === TIPO_INSTRUCCION.DEC_FUNCION) {
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"DEC_FUNCION\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarFuncion(instruccion, nombreHijo)
            } /*
                vectores
                listas
                funciones
            */

        });
    }
    recorrerInstrucciones(_padre, _hijo){  //bloques
        _hijo.forEach(instruccion => {
            if(instruccion.tipo === TIPO_INSTRUCCION.DECLARACION){
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"DECLARACION\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarDeclaracion(instruccion, nombreHijo)
            }else if(instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION){
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"ASIGNACION\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarAsignacion(instruccion, nombreHijo)
            }else if(instruccion.tipo === TIPO_INSTRUCCION.PRINT){
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"PRINT\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.graficarOperacion(instruccion.expresion, nombreHijo)
            }else if(instruccion.tipo === TIPO_INSTRUCCION.IF){
                console.log("GRAFICAR IF: ",instruccion)
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"IF\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.recorrerInstrucciones(nombreHijo, instruccion.instrucciones)
            }
            else if(instruccion.tipo === TIPO_INSTRUCCION.FOR){
                console.log("GRAFICAR IF: ",instruccion)
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"FOR\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.recorrerInstrucciones(nombreHijo, instruccion.instrucciones)
            }else if(instruccion.tipo === TIPO_INSTRUCCION.WHILE){
                console.log("GRAFICAR while: ",instruccion.instrucciones)
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"WHILE\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.recorrerInstrucciones(nombreHijo, instruccion.instrucciones) 
            }else if(instruccion.tipo === TIPO_INSTRUCCION.DOWHILE){
                console.log("GRAFICAR IF: ",instruccion)
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"DOWHILE\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.recorrerInstrucciones(nombreHijo, instruccion.instrucciones) 
            }else if(instruccion.tipo === TIPO_INSTRUCCION.LLAMADA){
                console.log("GRAFICAR LLAMADA: ",instruccion)
                console.log("GRAFICAR IF: ",instruccion)
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\""+"Llamar\n"+instruccion.nombre+"\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                console.log("Instruccion-:",instruccion) 
            }else if(instruccion.tipo === TIPO_INSTRUCCION.ARRAY){
                console.log("Declaracion de array: ",instruccion) 

                var nombreDec = "Nodo" + this.contador
                this.contador++;
                var vals = "Nodo" + this.contador
                this.contador++;
                var nombreTipo = "Nodo" + this.contador
                this.contador++;
                var nombre = "Nodo" + this.contador
                this.contador++;
                var ar="";
                //console.log("Arreglo: ",instruccion.valor)
                for(var i=0;i<instruccion.valor.length;i++){
                    //console.log("val: ",instruccion.valor[i].valor)
                    try {
                        ar+=instruccion.valor[i].valor.replaceAll("\"","\\\"").replaceAll("\'","\\\'")+"," 
                    } catch (error) {
                        ar+=instruccion.valor[i].valor+","
                    }
                }
                ar = ar.slice(0, -1);
                console.log(ar)
                this.grafo += nombreDec + "[label=\"DEC_ARRAY\"];\n"
                this.grafo += nombreTipo + `[label=\"TIPO \n ${instruccion.tipo_dato}\"];\n`;
                this.grafo += vals + `[label=\"ARRAY\n {${ar.toString()}}\"];\n`;
                this.grafo += nombre + `[label=\"ID\n ${instruccion.id}\"];\n`;
                this.grafo += _padre + "->" + nombreDec + ";\n"
                this.grafo += nombreDec + "->" + nombre + ";\n"
                this.grafo += nombreDec + "->" + nombreTipo + ";\n"
                this.grafo += nombreDec + "->" + vals + ";\n"
                
                
            }else if(instruccion.tipo === TIPO_INSTRUCCION.SWITCH){
                console.log("GRAFICAR SWITCH: ",instruccion) 
                var condicion = "Nodo" + this.contador
                this.contador++;
                var nombreHijo = "Nodo" + this.contador
                this.contador++;
                this.grafo += nombreHijo + "[label=\"SWITCH CASE\"];\n"
                this.grafo += _padre + "->" + nombreHijo + ";\n"
                this.grafo += condicion + `[label=\"CONDICION \n ${instruccion.condicion.valor}\"];\n`;
                this.grafo += nombreHijo + "->" + condicion + ";\n"
            }else if(instruccion.tipo === TIPO_INSTRUCCION.LISTA){
                console.log("Declaracion de lista: ",instruccion)
                var palabra=instruccion.palabra.valor.replaceAll("\"","").split("")
                var nombreDec = "Nodo" + this.contador
                this.contador++;
                var vals = "Nodo" + this.contador
                this.contador++;
                var nombreTipo = "Nodo" + this.contador
                this.contador++;
                var nombre = "Nodo" + this.contador
                this.contador++;

                this.grafo += nombreDec + "[label=\"DEC_LISTA\"];\n"
                this.grafo += nombreTipo + `[label=\"TIPO \n ${instruccion.tipoLs}\"];\n`;
                
                
                this.grafo += nombre + `[label=\"ID\n ${instruccion.id}\"];\n`;
                this.grafo += _padre + "->" + nombreDec + ";\n"
                this.grafo += nombreDec + "->" + nombre + ";\n"
                this.grafo += nombreDec + "->" + nombreTipo + ";\n"
                if(instruccion.palabra!=false){
                    this.grafo += vals + `[label=\"LISTA\n {${palabra.toString()}}\"];\n`;
                    this.grafo += nombreDec + "->" + vals + ";\n"
                }
            }
            
            
        });
    }
    graficarDeclaracion(_instruccion, _padre){
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"TIPO \n ${_instruccion.tipo_dato}\"];\n`;
        this.grafo += _padre + `->` + tipoVar + `;\n`;
        this.contador++;
        var nombreVar = `Nodo${this.contador}`
        this.grafo += nombreVar + `[label=\"ID \n ${_instruccion.id}\"];\n`;
        this.grafo += _padre + `->` + nombreVar + `;\n`;
        this.contador++;
        if(_instruccion.valor != null){
            
            this.graficarOperacion(_instruccion.valor, _padre)
        }
    }
    
    graficarOperacion(_expresion, _padre){
        
        if(_expresion.tipo === TIPO_VALOR.DECIMAL || _expresion.tipo === TIPO_VALOR.BOOL || _expresion.tipo === TIPO_VALOR.ENTERO ||
        _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR || _expresion.tipo === TIPO_VALOR.CHAR){
            var exp = _expresion.valor.toString()
            exp = exp.replace(/\"/gi, '\\\"') // \"  ""
            var value = `Nodo${this.contador}`;
            this.grafo += value + `[label=\" ${_expresion.tipo}\n ${exp}\"];\n`;
            this.grafo += _padre + `->` + value + `;\n`;
            this.contador++;
           
        }else if (_expresion.tipo === TIPO_OPERACION.SUMA || _expresion.tipo === TIPO_OPERACION.IGUALIGUAL|| _expresion.tipo === TIPO_OPERACION.OR){
            var value = `Nodo${this.contador}`;
            this.grafo += value + `[label=\" ${_expresion.tipo}\n ${this.getSimbolo(_expresion.tipo)}\"];\n`;
            this.grafo += _padre + `->` + value + `;\n`;
            this.contador++;
            
            this.graficarOperacion(_expresion.opIzq, value)
            this.graficarOperacion(_expresion.opDer, value)
        }else if (_expresion.tipo === TIPO_OPERACION.UNARIA) {
            console.log("entro aca")
            var value = `Nodo${this.contador}`;
            this.grafo += value + `[label=\" ${_expresion.tipo}\n ${this.getSimbolo(_expresion.tipo)}\"];\n`;
            this.grafo += _padre + "->" + value + ";\n"
            this.contador++;
            this.graficarOperacion(_expresion.opDer, value)
        }
    }
    getSimbolo(_tipo) {
        switch (_tipo) {
            case TIPO_OPERACION.SUMA:

                return '+'
            case TIPO_OPERACION.UNARIA:

                return '-'
            case TIPO_OPERACION.IGUALIGUAL:

                return '=='
            case TIPO_OPERACION.OR:

                return '||'
        }
    }    
    graficarMain(_instruccion, _padre){
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"LLAMADA \n ${_instruccion.nombre}\"];\n`;
        this.grafo += _padre + "->" + tipoVar + ";\n"
        this.contador++;
        if (_instruccion.lista_valores != null) { 
            var parametro = `Nodo${this.contador}`
            this.grafo += parametro + `[label=\"PARAMETROS\"];\n`;  //hola(1,2,3)
            this.grafo += _padre + "->" + parametro + ";\n"
            this.contador++;
            for (let i = 0; i < _instruccion.lista_valores.length; i++) {
                
                this.graficarOperacion(_instruccion.lista_valores[i], parametro)
            }
        }
    }
    graficarAsignacion(_instruccion, _padre){
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"IDENTIFICADOR \n ${_instruccion.id}\"];\n`;
        this.grafo += _padre + "->" + tipoVar + ";\n"
        this.contador++;
        console.log("Graficar asig: ",_instruccion)
        try {
            this.graficarOperacion(_instruccion.valor, _padre)
        } catch (error) {
            this.graficarOperacion(_instruccion, _padre)
        }
        

    }
    graficarMetodo(_instruccion, _padre){
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"IDENTIFICADOR \n ${_instruccion.nombre}\"];\n`;
        this.grafo += _padre + "->" + tipoVar + ";\n"
        this.contador++;
        if (_instruccion.lista_parametros != null) {
            var parametro = `Nodo${this.contador}`
            this.grafo += parametro + `[label=\"PARAMETROS\"];\n`;
            this.grafo += _padre + "->" + parametro + ";\n"
            this.contador++;
            for (let i = 0; i < _instruccion.lista_parametros.length; i++) {
                this.graficarDeclaracion(_instruccion.lista_parametros[i], parametro)  //hola(int a, int b)
            }
        }
        var instruccion = `Nodo${this.contador}`
        this.grafo += instruccion + `[label=\"INSTRUCCIONES\"];\n`;
        this.grafo += _padre + "->" + instruccion + ";\n"
        this.contador++;
        this.recorrerInstrucciones(instruccion,_instruccion.instrucciones)
    }

    graficarFuncion(_instruccion, _padre){
        var tipoVar = `Nodo${this.contador}`
        this.grafo += tipoVar + `[label=\"IDENTIFICADOR \n ${_instruccion.nombre}\"];\n`;
        this.grafo += _padre + "->" + tipoVar + ";\n"
        this.contador++;
        if (_instruccion.lista_parametros != null) {
            var parametro = `Nodo${this.contador}`
            this.grafo += parametro + `[label=\"PARAMETROS\"];\n`;
            this.grafo += _padre + "->" + parametro + ";\n"
            this.contador++;
            for (let i = 0; i < _instruccion.lista_parametros.length; i++) {
                this.graficarDeclaracion(_instruccion.lista_parametros[i], parametro)  //hola(int a, int b)
            }
        }
        var instruccion = `Nodo${this.contador}`
        this.grafo += instruccion + `[label=\"INSTRUCCIONES\"];\n`;
        this.grafo += _padre + "->" + instruccion + ";\n"
        this.contador++;
        this.recorrerInstrucciones(instruccion,_instruccion.instrucciones)
    }


}
module.exports = Graficador;