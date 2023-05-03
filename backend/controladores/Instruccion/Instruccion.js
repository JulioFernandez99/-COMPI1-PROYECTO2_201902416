
const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion");
var ArregloCase=[]
var deft;

function nuevaOperacion(_opizq,_opDer,_tipo, _linea, _columna){
    return{
        opIzq:_opizq,
        opDer:_opDer,
        tipo:_tipo,
        linea:_linea,
        columna:_columna,
    }
}
function nuevaUnaria(_opDer,_tipo, _linea, _columna){
    //console.log("Entro unaria")
    return{
        valor:_opDer,
        tipo:_tipo,
        linea:_linea,
        columna:_columna,
    }
}
const Instruccion ={
    
    nuevoPrint: function (_expresion,_linea,_columna) {
        return {
            tipo: TIPO_INSTRUCCION.PRINT,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },nuevoValor: function (_valor, _tipo, _linea, _columna) {
        //console.log("entro nuevo valor: ",_tipo)
        
        return {
            tipo: _tipo,
            valor: _valor,
            linea: _linea,
            columna: _columna
        }
    },nuevoValorNegativo: function (_valor, _tipo, _linea, _columna) {
        console.log("nuevo valor negativo: ",_valor)
        return {
            tipo: _tipo,
            valor: _valor,
            linea: _linea,
            columna: _columna
        }
    },nuevaOperacionBinaria: function (_opizq,_opDer,_tipo, _linea, _columna) {
        return nuevaOperacion(_opizq,_opDer,_tipo, _linea, _columna);
    },nuevaOperacionUnaria: function (_opDer,_tipo, _linea, _columna) {
        return nuevaUnaria(_opDer,_tipo, _linea, _columna);
    },nuevaAsignacion: function (_id, _expresion, _linea, _columna) {

        return {
            tipo: TIPO_INSTRUCCION.ASIGNACION,
            id: _id,
            expresion: _expresion,
            linea: _linea,
            columna: _columna
        }
    },nuevaDeclaracion: function (_id, _valor,_tipo, _linea, _columna) {
        return{

            tipo: TIPO_INSTRUCCION.DECLARACION,
            id: _id,
            valor: _valor,
            tipo_dato: _tipo,
            linea: _linea,
            columna: _columna
        }
    },nuevoMain: function (_nombre,_lista_valores, _linea, _columna) {
        return{
            tipo: TIPO_INSTRUCCION.MAIN,
            nombre: _nombre,
            lista_valores:_lista_valores,
            linea: _linea,
            columna: _columna
        }
    },nuevoMetodo: function (_nombre, _lista_parametros, _instrucciones, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.DEC_METODO,
            nombre: _nombre,
            lista_parametros: _lista_parametros,
            instrucciones: _instrucciones,
            linea: _linea,
            columna: _columna
        }
    },nuevoIf: function(expresion, instrucciones,_linea, _columna) {
        
		return {
			tipo: TIPO_INSTRUCCION.IF,
			expresion: expresion,
			instrucciones: instrucciones,
            linea: _linea,
            columna: _columna
		}
    },
    nuevoIfElse: function (_expresion, _instruccionesIf, _instruccionesElse, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.IFCE,
            expresion: _expresion,
            instruccionesIf: _instruccionesIf,
            instruccionesElse: _instruccionesElse,
            linea: _linea,
            columna: _columna
        }
    },
    
    nuevoElseIf: function (_expresion, _instruccionesElseIf, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.ELSEIF,
            expresion: _expresion,
            instruccionesElseIf: _instruccionesElseIf,
            linea: _linea,
            columna: _columna
        }
    },
    nuevoIfConElseIf: function (_expresion, _instruccionesIf, _lista_elseif, _instruccionesElse, _linea, _columna) {
        return {
            tipo: TIPO_INSTRUCCION.IFCEIF,
            expresion: _expresion,
            instruccionesIf: _instruccionesIf,
            lista_elseif: _lista_elseif,
            instruccionesElse: _instruccionesElse,
            linea: _linea,
            columna: _columna

        }
    },nuevoIncremento:function (_id, _expresion, _linea, _columna) {
        console.log("A ",_id," se le asigno ",_expresion);
            console.log("---------------------id: ",_id)
        return {
            tipo: TIPO_INSTRUCCION.ASIGNACION,
            id: _id,
            expresion:{ opIzq: { 
                tipo: 'VAL_IDENTIFICADOR', valor: _id, linea: _linea, columna: _columna },
                opDer: { tipo: 'VAL_ENTERO', valor: 1, linea: _linea ,columna: _columna },
                tipo: 'SUMA',
                linea: _linea,
                columna: _columna},
            linea: _linea,
            columna: _columna
        }
    },nuevoDecremento:function (_id, _expresion, _linea, _columna) {
        console.log("A ",_id," se le asigno ",_expresion);
            console.log("---------------------id: ",_id)
        return {
            tipo: TIPO_INSTRUCCION.ASIGNACION,
            id: _id,
            expresion:{ opIzq: { 
                tipo: 'VAL_IDENTIFICADOR', valor: _id, linea: _linea, columna: _columna },
                opDer: { tipo: 'VAL_ENTERO', valor: 1, linea: _linea ,columna: _columna },
                tipo: 'RESTA',
                linea: _linea,
                columna: _columna},
            linea: _linea,
            columna: _columna
        }
    },nuevoIncrementoN:function (_id, _expresion, _linea, _columna) {
        console.log("***********nuevoIncrementoN: ",_expresion.valor)
            console.log("---------------------id: ",_id)
        return {
            tipo: TIPO_INSTRUCCION.ASIGNACION,
            id: _id,
            expresion:{ opIzq: { 
                tipo: 'VAL_IDENTIFICADOR', valor: _id, linea: _linea, columna: _columna },
                opDer: { tipo: 'VAL_ENTERO', valor: _expresion.valor, linea: _linea ,columna: _columna },
                tipo: 'SUMA',
                linea: _linea,
                columna: _columna},
            linea: _linea,
            columna: _columna
        }
    },nuevoDecrementoN:function (_id, _expresion, _linea, _columna) {
        console.log("A ",_id," se le asigno ",_expresion);
            console.log("---------------------id: ",_id)
        return {
            tipo: TIPO_INSTRUCCION.ASIGNACION,
            id: _id,
            expresion:{ opIzq: { 
                tipo: 'VAL_IDENTIFICADOR', valor: _id, linea: _linea, columna: _columna },
                opDer: { tipo: 'VAL_ENTERO', valor: _expresion.valor, linea: _linea ,columna: _columna },
                tipo: 'RESTA',
                linea: _linea,
                columna: _columna},
            linea: _linea,
            columna: _columna
        }
    },nuevoFor:function (_declaracion, _expresion,_asig,_instrucciones, _linea, _columna) {
        /* console.log("Nuevo for")
        console.log("Declaracion: ",_declaracion.valor)
        console.log("---------------------------")
        console.log("Expresion: ",_expresion)
        console.log("---------------------------")
        console.log("Asignacion: ",_asig) */

        
        return {
			tipo: TIPO_INSTRUCCION.FOR,
            instrucciones:_instrucciones,
			expresion: _expresion,
            asignacion:_asig,
            declaracion:_declaracion,
            linea: _linea,
            columna: _columna
		}
    },nuevaDeclaracionFor: function (_id, _valor,_tipo, _linea, _columna) {
        console.log("Declaracion for")
        if(_valor!=null){
            console.log(
                "id: "+_id
                ,"\nvalor: "+_valor.valor
                ,"\ntipo: "+_tipo
                ,"\nlinea: "+_linea
                ,"\ncolumna: "+_columna
                );
                console.log("---------------------")
        } 
        
        return{

            tipo: TIPO_INSTRUCCION.DECLARACIONFOR,
            id: _id,
            valor: _valor,
            tipo_dato: _tipo,
            linea: _linea,
            columna: _columna
        }
    },nuevoWhile: function(expresion, instrucciones,_linea, _columna) {
        
		return {
			tipo: TIPO_INSTRUCCION.WHILE,
			expresion: expresion,
			instrucciones: instrucciones,
            linea: _linea,
            columna: _columna
		} 
    },nuevoDoWhile: function(instrucciones, expresion,_linea, _columna) {
        
		return {
			tipo: TIPO_INSTRUCCION.DOWHILE,
			expresion: expresion,
			instrucciones: instrucciones,
            linea: _linea,
            columna: _columna
		} 
    }
    ,nuevoTernario: function(CONDICION,EXPRESION1,EXPRESION2,_linea, _columna) {
        var instrucciones={
            tipo:TIPO_INSTRUCCION.TERNARIO,
            condicion:CONDICION,
            expresion1:EXPRESION1,
            expresion2:EXPRESION2,
        }
		return {
			instrucciones:instrucciones,
            linea: _linea,
            columna: _columna
		} 
        
    },nuevoCasteo: function(_tipoDec,_id,_tipoCast,_valor,_linea, _columna) {
        return{
            tipo: TIPO_INSTRUCCION.CASTEO,
            tipo_dato:_tipoDec,
            id:_id,
            tipo_cast:_tipoCast,
            valor: _valor,
            linea: _linea,
            columna: _columna
        }
        
    },nuevoCase: function(expresion, instrucciones,_linea, _columna) {
        console.log("entro case")
        ArregloCase.push({
            tipo: TIPO_INSTRUCCION.CASE,
			expresion: expresion,
			instrucciones: instrucciones,
            linea: _linea,
            columna: _columna
        })
		return {
			tipo: TIPO_INSTRUCCION.CASE,
			expresion: expresion,
			instrucciones: instrucciones,
            linea: _linea,
            columna: _columna
		}
    },nuevoSwitch: function(expresion,instrucciones,_linea, _columna) {
        
        /* console.log("Switch: ",{
			tipo: TIPO_INSTRUCCION.SWITCH,
			instrucciones:instrucciones,
            linea: _linea,
            columna: _columna
		}) */

       /*  console.log("Expresion: ",expresion);
        console.log("Instrucciones: ",instrucciones) */
        var dic={
            tipo: TIPO_INSTRUCCION.SWITCH,
			instrucciones:ArregloCase,
            condicion:expresion,
            deft:deft,
            linea: _linea,
            columna: _columna
        }
        ArregloCase=[]
        deft="";
		return dic
    },nuevoDefault(instrucciones,_linea, _columna){
        deft={
            tipo: TIPO_INSTRUCCION.DEFAULT,
			instrucciones:instrucciones,
            linea: _linea,
            columna: _columna
        }

    },nuevaFuncion: function (_nombre, _lista_parametros, _instrucciones, _linea, _columna,_return) {
        
        return {
            tipo: TIPO_INSTRUCCION.DEC_FUNCION,
            nombre: _nombre,
            lista_parametros: _lista_parametros,
            instrucciones: _instrucciones,
            linea: _linea,
            columna: _columna,
            return:_return
        }
    },nuevaLlamadaFuncion: function (_nombre,_lista_valores, _linea, _columna) {
        console.log("Entro:")
        return{
            tipo: TIPO_INSTRUCCION.LLAMADAFUNCION,
            nombre: _nombre,
            lista_valores:_lista_valores,
            linea: _linea,
            columna: _columna
        }
    },nuevoReturn: function (instruccion, _linea, _columna) {
        return{
            tipo: TIPO_INSTRUCCION.RETURN,
            instruccion:instruccion
        }
    },nuevoArray: function (_tipoDec,_id,_tipoArray,_valor, _linea, _columna) {
        /* console.log("Nuevo array: ",{
            tipo: TIPO_INSTRUCCION.ARRAY,
            tipo_dato:_tipoDec,
            id:_id,
            nuevo_tipo:_tipoArray,
            valor:_valor
        }) */ 
        return{
            tipo: TIPO_INSTRUCCION.ARRAY,
            tipo_dato:_tipoDec,
            id:_id,
            nuevo_tipo:_tipoArray,
            valor:_valor,
            linea:_linea,
            columna:_columna
        }
    },nuevaPosArray: function (_id,_posicion, _linea, _columna) {
        //console.log("_entro")
        return{
            tipo: TIPO_INSTRUCCION.POSARRAY,
            id:_id,
            valor:_posicion,
            linea:_linea,
            columna:_columna
        }
    },nuevoModPosArray: function (_id,_posicion,_valor, _linea, _columna) {
        //console.log("_entro")
        return{
            tipo: TIPO_INSTRUCCION.MODPOSARRAY,
            id:_id,
            posicion:_posicion,
            valor:_valor,
            linea:_linea,
            columna:_columna
        }
    },nuevaLista: function (_tipoLs,_id,_tipoNw,_toChar,_palabra, _linea, _columna) {
        //console.log("_entro")
        return{
            tipo: TIPO_INSTRUCCION.LISTA,
            tipoLs:_tipoLs,
            id:_id,
            toChar:_toChar,
            palabra:_palabra,
            tipoNw:_tipoNw,
            linea:_linea,
            columna:_columna
        }
    },nuevoAddLs: function (_id,_valor, _linea, _columna) {
        
        return{
            tipo: TIPO_INSTRUCCION.ADDLISTA,
            id:_id,
            valor:_valor,
            linea:_linea,
            columna:_columna
        }
    },nuevoModLista: function (_id,_posicion,_valor, _linea, _columna) {
        
        return{
            tipo: TIPO_INSTRUCCION.MODLISTA,
            id:_id,
            posicion:_posicion,
            valor:_valor,
            linea:_linea,
            columna:_columna
        } 
    },nuevaLlamada: function (_nombre,_lista_valores,_tp, _linea, _columna) {
        return{
            tipo: TIPO_INSTRUCCION.LLAMADA,
            nombre: _nombre,
            lista_valores:_lista_valores,
            linea: _linea,
            columna: _columna,
            tp:_tp
        }
    },nuevaNativa:function (_funcion,_expresion, _linea, _columna) { 
        return{
            tipo: TIPO_INSTRUCCION.NATIVA,
            tipo_nativa: _funcion,
            expresion:_expresion,
            linea: _linea,
            columna: _columna
        }
    }
    

}

module.exports = Instruccion;

