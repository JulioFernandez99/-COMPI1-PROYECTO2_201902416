const TIPO_DATO = require("../Enums/TipoDato")
const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion")
const TIPO_OPERACION = require("../Enums/TipoOperacion")
const TIPO_VALOR = require("../Enums/TipoValor")
const TipoResultado = require("./TipoResultado")
const ValorExpresion = require("./ValorExpresion")   

function Aritmetica(_expresion,_ambito){
    //console.log("Expresion: ",_expresion)
    if (_expresion.tipo === TIPO_VALOR.DECIMAL || _expresion.tipo === TIPO_VALOR.BOOL || _expresion.tipo === TIPO_VALOR.ENTERO || _expresion.tipo==='UNARIA'||
        _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR || _expresion.tipo === TIPO_VALOR.CHAR || _expresion.tipo === TIPO_INSTRUCCION.LLAMADA_METODO) {
        return ValorExpresion(_expresion, _ambito) 
    }else if (_expresion.tipo === TIPO_OPERACION.SUMA) {
        
        
        try{
            return suma(_expresion.opIzq, _expresion.opDer, _ambito)
        }catch{
            return suma(_expresion.opIzq, _expresion.opDer, _ambito)

            //return suma(_expresion.opIzq.valor, _expresion.opDer, _ambito)
        }
        
    }else if (_expresion.tipo === TIPO_OPERACION.RESTA) {
         console.error("RESTA");
         try{
            return resta(_expresion.opIzq, _expresion.opDer, _ambito) 
         }
         catch{
            return resta(_expresion.opIzq.valor, _expresion.opDer, _ambito) 
         }
          
    }else if (_expresion.tipo === TIPO_OPERACION.MULTIPLICACION) {
        console.error("MULTIPLICACION");
        try {
            return multiplicacion(_expresion.opIzq, _expresion.opDer, _ambito)  
        } catch {
            return multiplicacion(_expresion.opIzq.valor, _expresion.opDer, _ambito) 
        }
         
    }else if (_expresion.tipo === TIPO_OPERACION.DIVISION) {
        console.error("DIVISION");
        try {
            return division(_expresion.opIzq, _expresion.opDer, _ambito)
        } catch {
            return division(_expresion.opIzq.valor, _expresion.opDer, _ambito)
        }
         
    }else if (_expresion.tipo === TIPO_OPERACION.POTENCIA) {
        console.error("POTENCIA");
        try {
            return potencia(_expresion.opIzq, _expresion.opDer, _ambito)
        } catch {
            return potencia(_expresion.opIzq.valor, _expresion.opDer, _ambito)
        }
          
    }else if (_expresion.tipo === TIPO_OPERACION.MODULO) {
        console.error("Modulo");
        try{
            return modulo(_expresion.opIzq, _expresion.opDer, _ambito) 
        }catch{
            return modulo(_expresion.opIzq.valor, _expresion.opDer, _ambito) 
        }
        
    }


}
/* function procesarExpresionNumerica(expresion, tablaDeSimbolos) {
    if (expresion.tipo === TIPO_OPERACION.NEGATIVO) {
        // Es un valor negado.
        // En este caso necesitamos procesar el valor del operando para poder negar su valor.
        // Para esto invocamos (recursivamente) esta función para sesolver el valor del operando.
        const valor = procesarExpresionNumerica(expresion.operandoIzq, tablaDeSimbolos).valor;     // resolvemos el operando
        
        // Retornamos el valor negado.
        const res= valor * -1;
        return {valor: res, tipo: TIPO_DATO.NUMERO};
    } else if (expresion.tipo === TIPO_OPERACION.SUMA 
        || expresion.tipo === TIPO_OPERACION.RESTA
        || expresion.tipo === TIPO_OPERACION.MULTIPLICACION
        || expresion.tipo === TIPO_OPERACION.DIVISION) {
        // Es una operación aritmética.
        // En este caso necesitamos procesar los operandos antes de realizar la operación.
        // Para esto incovacmos (recursivamente) esta función para resolver los valores de los operandos.
        let valorIzq = procesarExpresionNumerica(expresion.operandoIzq, tablaDeSimbolos);      // resolvemos el operando izquierdo.
        let valorDer = procesarExpresionNumerica(expresion.operandoDer, tablaDeSimbolos);      // resolvemos el operando derecho.
        if(valorIzq.tipo!==TIPO_DATO.NUMERO || valorDer.tipo!==TIPO_DATO.NUMERO){
            throw 'ERROR: se esperaban expresiones numericas para ejecutar la: ' + expresion.tipo;
        }else{
            valorIzq=valorIzq.valor;
            valorDer=valorDer.valor;
        }
        if (expresion.tipo === TIPO_OPERACION.SUMA){
            const res= valorIzq + valorDer;
            return {valor: res, tipo: TIPO_DATO.NUMERO };
        }
        if (expresion.tipo === TIPO_OPERACION.RESTA) {
            const res= valorIzq - valorDer;
            return {valor: res, tipo: TIPO_DATO.NUMERO };
        }
        if (expresion.tipo === TIPO_OPERACION.MULTIPLICACION) {
            const res= valorIzq * valorDer;
            return {valor: res, tipo: TIPO_DATO.NUMERO };
        }
        if (expresion.tipo === TIPO_OPERACION.DIVISION) {
            if(valorDer === 0){
                throw 'ERROR: la division entre 0 da como resultado: '+valorIzq/valorDer;
            }else{
                const res= valorIzq / valorDer;
                return {valor: res, tipo: TIPO_DATO.NUMERO };
            }
        };

    } else if (expresion.tipo === TIPO_VALOR.NUMERO) {
        // Es un valor numérico.
        // En este caso únicamente retornamos el valor obtenido por el parser directamente.
        return {valor: expresion.valor, tipo: TIPO_DATO.NUMERO };
    } else if (expresion.tipo === TIPO_VALOR.IDENTIFICADOR) {
        // Es un identificador.
        // Obtenemos el valor de la tabla de simbolos
        const sym = tablaDeSimbolos.obtener(expresion.valor);
        return {valor: sym.valor, tipo: sym.tipo};
    } else {
        throw 'ERROR: expresión numérica no válida: ' + expresion;
    }
} */

function suma(_opizq, _opDer, _ambito) {
   
    
    const opIzq = Aritmetica(_opizq, _ambito)  
    const opDer = Aritmetica(_opDer, _ambito)
    
  
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)

    

    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                if (opIzq.tipo === TIPO_DATO.BOOL) {
                    if (opIzq.valor === true) {
                        const resultado = 1 + Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = 0 + Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
                else if (opDer.tipo === TIPO_DATO.BOOL) {
                    if (opDer.valor === true) {
                        const resultado = Number(opIzq.valor) + 1;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = Number(opIzq.valor) + 0;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                if (opIzq.tipo === TIPO_DATO.CHAR) {
                    console.log("Suma de un char")
                    const resultado = (opIzq.valor) + (opDer.valor);
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }

                }
                else if (opDer.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number(opIzq.valor) + Number((opDer.valor).charCodeAt(0));
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }
                }
            } else {
                
                const resultado = Number(opIzq.valor) + Number(opDer.valor);
                console.log("-------Suma-------:",opIzq.valor)
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        }
        if (tipores === TIPO_DATO.CADENA) {
            const resultado = opIzq.valor.toString() + opDer.valor.toString();
            return {
                valor: resultado,
                tipo: tipores,
                linea: _opizq.linea,
                columna: _opizq.columna

            }

        }

    } 
}

function resta(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)  
    const opDer = Aritmetica(_opDer, _ambito)
    
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)  


    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                if (opIzq.tipo === TIPO_DATO.BOOL) {
                    if (opIzq.valor === true) {
                        const resultado = 1 - Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = 0 - Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
                else if (opDer.tipo === TIPO_DATO.BOOL) {
                    if (opDer.valor === true) {
                        const resultado = Number(opIzq.valor) - 1;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = Number(opIzq.valor) - 0;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                if (opIzq.tipo === TIPO_DATO.CHAR) {
                    
                    const resultado = Number((opIzq.valor).charCodeAt(0)) - Number(opDer.valor);
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }

                }
                else if (opDer.tipo === TIPO_DATO.CHAR) {
                    
                    const resultado = Number(opIzq.valor) - Number((opDer.valor).charCodeAt(0));
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }
                }
            } else {
                const resultado = Number(opIzq.valor) - Number(opDer.valor);
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        }
        if (tipores === TIPO_DATO.CADENA) {
            const resultado = opIzq.valor.toString() - opDer.valor.toString();
            return {
                valor: resultado,
                tipo: tipores,
                linea: _opizq.linea,
                columna: _opizq.columna

            }

        }

    } 
}
function multiplicacion(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)  
    const opDer = Aritmetica(_opDer, _ambito)
    
    console.log("Operador izquierdo: ",opIzq)
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)  

    
    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                if (opIzq.tipo === TIPO_DATO.BOOL) {
                    if (opIzq.valor === true) {
                        const resultado = 1 * Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = 0 * Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
                else if (opDer.tipo === TIPO_DATO.BOOL) {
                    if (opDer.valor === true) {
                        const resultado = Number(opIzq.valor) * 1;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = Number(opIzq.valor) * 0;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                if (opIzq.tipo === TIPO_DATO.CHAR) {
                    console.log("Entra en multiplicacion",opIzq.tipo)
                    console.log("Operador derecho ",opDer.valor)
                    console.log(opIzq.valor+"*"+opDer.valor)
                    const resultado = Number((opIzq.valor).charCodeAt(0)) * Number(opDer.valor);

                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }

                }
                else if (opDer.tipo === TIPO_DATO.CHAR) {
                    
                    const resultado = Number(opIzq.valor) * Number((opDer.valor).charCodeAt(0));
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }
                }
            } else {
                const resultado = Number(opIzq.valor) * Number(opDer.valor);
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        }
        if (tipores === TIPO_DATO.CADENA) {
            const resultado = opIzq.valor.toString() * opDer.valor.toString();
            return {
                valor: resultado,
                tipo: tipores,
                linea: _opizq.linea,
                columna: _opizq.columna

            }

        }

    } 
}
function division(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)  
    const opDer = Aritmetica(_opDer, _ambito)
    
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)  


    if (tipores != null & Number(opDer.valor)!=0) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                if (opIzq.tipo === TIPO_DATO.BOOL) {
                    if (opIzq.valor === true) {
                        const resultado = 1 / Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = 0 / Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
                else if (opDer.tipo === TIPO_DATO.BOOL) {
                    if (opDer.valor === true) {
                        const resultado = Number(opIzq.valor) / 1;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        return {
                            valor: "Error: No existe division entre 0, linea:"+_opDer.linea+" columna: "+opDer.columna,
                            tipo: TIPO_DATO.CADENA,
                            linea: _opDer.linea,
                            columna: _opDer.columna

                        }
                    }

                }
            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                if (opIzq.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number((opIzq.valor).charCodeAt(0)) / Number(opDer.valor);
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }

                }
                else if (opDer.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number(opIzq.valor) / Number((opDer.valor).charCodeAt(0));
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }
                }
            } else {
                const resultado = Number(opIzq.valor) / Number(opDer.valor);
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        }
        if (tipores === TIPO_DATO.CADENA) {
            const resultado = opIzq.valor.toString() / opDer.valor.toString();
            return {
                valor: resultado,
                tipo: tipores,
                linea: _opizq.linea,
                columna: _opizq.columna

            }

        }

    } 
    else{
        console.log("error")
        return {
            valor: "Error: No existe division entre 0, linea:"+_opDer.linea+" columna: "+opDer.columna,
            tipo: TIPO_DATO.CADENA,
            linea: _opDer.linea,
            columna: _opDer.columna


        }
    }
}

function potencia(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)  
    const opDer = Aritmetica(_opDer, _ambito)
    
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)  


    if (tipores != null) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                if (opIzq.tipo === TIPO_DATO.BOOL) {
                    if (opIzq.valor === true) {
                        const resultado = 1 ;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado =0;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
                else if (opDer.tipo === TIPO_DATO.BOOL) {
                    if (opDer.valor === true) {
                        const resultado = Math.pow(Number(opIzq.valor),1);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = Math.pow(Number(opIzq.valor),0);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                if (opIzq.tipo === TIPO_DATO.CHAR) {
                    const resultado = 
                    Math.pow(Number(opIzq.valor).charCodeAt(0),Number(opDer.valor));
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }

                }
                else if (opDer.tipo === TIPO_DATO.CHAR) {
                    const resultado = Math.pow(Number(opIzq.valor),Number(opDer.valor).charCodeAt(0))
                    
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }
                }
            } else {
                const resultado = Math.pow(Number(opIzq.valor),Number(opDer.valor));
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        }
        if (tipores === TIPO_DATO.CADENA) {
            const resultado = Math.pow(Number(opIzq.valor),Number(opDer.valor));
            return {
                valor: resultado,
                tipo: tipores,
                linea: _opizq.linea,
                columna: _opizq.columna

            }

        }

    }  
}

function modulo(_opizq, _opDer, _ambito) {
    const opIzq = Aritmetica(_opizq, _ambito)  
    const opDer = Aritmetica(_opDer, _ambito)
    
    const tipores = TipoResultado(opIzq.tipo, opDer.tipo)  


    if (tipores != null & Number(opDer.valor)!=0) {
        if (tipores === TIPO_DATO.DECIMAL || tipores === TIPO_DATO.ENTERO) {
            if (opIzq.tipo === TIPO_DATO.BOOL || opDer.tipo === TIPO_DATO.BOOL) {
                if (opIzq.tipo === TIPO_DATO.BOOL) {
                    if (opIzq.valor === true) {
                        const resultado = 1 % Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        const resultado = 0 % Number(opDer.valor);
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    }

                }
                else if (opDer.tipo === TIPO_DATO.BOOL) {
                    if (opDer.valor === true) {
                        const resultado = Number(opIzq.valor) % 1;
                        return {
                            valor: resultado,
                            tipo: tipores,
                            linea: _opizq.linea,
                            columna: _opizq.columna

                        }
                    } else {
                        return {
                            valor: "Error: No existe division entre 0, linea:"+_opDer.linea+" columna: "+opDer.columna,
                            tipo: TIPO_DATO.CADENA,
                            linea: _opDer.linea,
                            columna: _opDer.columna

                        }
                    }

                }
            } else if (opIzq.tipo === TIPO_DATO.CHAR || opDer.tipo === TIPO_DATO.CHAR) {
                if (opIzq.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number((opIzq.valor).charCodeAt(0)) % Number(opDer.valor);
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }

                }
                else if (opDer.tipo === TIPO_DATO.CHAR) {
                    const resultado = Number(opIzq.valor) % Number((opDer.valor).charCodeAt(0));
                    return {
                        valor: resultado,
                        tipo: tipores,
                        linea: _opizq.linea,
                        columna: _opizq.columna

                    }
                }
            } else {
                const resultado = Number(opIzq.valor) % Number(opDer.valor);
                return {
                    valor: resultado,
                    tipo: tipores,
                    linea: _opizq.linea,
                    columna: _opizq.columna

                }
            }


        }
        if (tipores === TIPO_DATO.CADENA) {
            const resultado = opIzq.valor.toString() % opDer.valor.toString();
            return {
                valor: resultado,
                tipo: tipores,
                linea: _opizq.linea,
                columna: _opizq.columna

            }

        }

    } 
    else{
        console.log("error")
        return {
            valor: "Error: No existe division entre 0, linea:"+_opDer.linea+" columna: "+opDer.columna,
            tipo: TIPO_DATO.CADENA,
            linea: _opDer.linea,
            columna: _opDer.columna


        }
    }
}

module.exports = Aritmetica