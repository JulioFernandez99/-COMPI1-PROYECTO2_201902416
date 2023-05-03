const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion");
const Print = require("./Print");
const Asignacion = require("./Asignacion");
const Declaracion = require("./Declaracion");
const SentenciaIf=require('./IF');
const SentenciaIfElse = require("./ifElse");
const SentenciaIfElseIf = require("./ifElseIf");

const { AND } = require("../Enums/TipoOperacion");
const SentenciaFor = require("./For");
const SentenciaWhile = require("./while");
const SentenciaDoWhile = require("./Dowhile");
const AsignacionCast = require("./DecCast");
const DeclaracionCast = require("./DecCast");
const Switch = require("./Switch");
const LlamadaFuncion = require("./LlamadaFuncion");
const Ambito = require("../Ambito/Ambito");
const DeclaracionArray = require("./DecArray");
const Operacion = require("../Operaciones/Operacion");
const DeclaracionLista = require("./DeclaracionLista");
const AddLista = require("./AddLista");
const Instruccion = require("./Instruccion");
const DecParametro = require("./DecParametro"); 
const graficarSimbolos = require("./GraficarSimbolos");




function Bloque(_instrucciones,_ambito){
    var cadena=""
    var resIF=""
    
    _instrucciones.forEach(instruccion => {
        
        if(instruccion.tipo===TIPO_INSTRUCCION.PRINT){
           cadena+=Print(instruccion,_ambito) + "\n"
        }else if (instruccion.tipo === TIPO_INSTRUCCION.DECLARACION) {
            
            var mensaje = Declaracion(instruccion, _ambito)
            if (mensaje != null) {
                cadena += mensaje
            }
        } else if (instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION) {
            //console.log("+++++++++++++",instruccion)
            var mensaje = Asignacion(instruccion, _ambito)
            if (mensaje != null) {
                cadena += mensaje
            }
        }
        
        else if (instruccion.tipo === TIPO_INSTRUCCION.IF) {
            // Procesando Instrucción If
            console.log(JSON.stringify(instruccion.instrucciones))
            var ejec=SentenciaIf(instruccion,_ambito)
            var mensaje=ejec.cadena;
            
            if(mensaje!=null ){
                cadena+=mensaje
                resIF=mensaje;
                
            }
            
        
        
        
        }else if (instruccion.tipo === TIPO_INSTRUCCION.IFCE) {
            var ejec = SentenciaIfElse(instruccion, _ambito)
            var mensaje = ejec.cadena
            
            if (mensaje != null) {
                cadena += mensaje
            }
        } else if(instruccion.tipo === TIPO_INSTRUCCION.IFCEIF){
            var ejec = SentenciaIfElseIf(instruccion, _ambito)
            var mensaje = ejec.cadena
            
            if(mensaje!=null){
                cadena+=mensaje
            }
        }else if (instruccion.tipo === TIPO_INSTRUCCION.FOR) {
            // Procesando Instrucción If
            var ejec=SentenciaFor(instruccion,_ambito)
            var mensaje=ejec.cadena;
            console.log(ejec.res)
            if(mensaje!=null && resIF===""){
                cadena+=mensaje
            }
        
        }else if (instruccion.tipo === TIPO_INSTRUCCION.WHILE) {
            // Procesando Instrucción while
            
            console.log(JSON.stringify(instruccion.instrucciones))
            var ejec=SentenciaWhile(instruccion,_ambito)
            var mensaje=ejec.cadena;
            
            if(mensaje!=null && resIF===""){
                cadena+=mensaje
                resIF=mensaje;
                
            }
            
        
        }else if (instruccion.tipo === TIPO_INSTRUCCION.DOWHILE) {
            // Procesando Instrucción while
            
            console.log(JSON.stringify(instruccion.instrucciones))
            var ejec=SentenciaDoWhile(instruccion,_ambito)
            var mensaje=ejec.cadena;
            
            if(mensaje!=null && resIF===""){
                cadena+=mensaje
                resIF=mensaje;
                
            }
            
        
        }else if (instruccion.tipo === TIPO_INSTRUCCION.CASTEO) {
            // Procesando Instrucción while
            var mensaje = DeclaracionCast(instruccion, _ambito)
            if (mensaje != null) {
                cadena += mensaje
            }
        }else if (instruccion.tipo === TIPO_INSTRUCCION.SWITCH) {
            
            var ejec=Switch(instruccion,_ambito)
            var mensaje=ejec.cadena;
            console.log(ejec)
            if(mensaje!=null && resIF===""){
                cadena+=mensaje
            }
        }else if (instruccion.tipo === TIPO_INSTRUCCION.LLAMADAFUNCION) {
            var ejec=LlamadaFuncion(instruccion,_ambito);
            console.log("Ejec: ",ejec)
            var mensaje=ejec;
            if(mensaje!=null && resIF===""){
                cadena+=mensaje
            }
        }
        else if (instruccion.tipo === TIPO_INSTRUCCION.RETURN) {
            console.log("*----Return: ",instruccion.instruccion.valor)
            console.log("*****Valor del return: ",_ambito.getSimbolo(instruccion.instruccion.valor).valor)
        }
        else if (instruccion.tipo === TIPO_INSTRUCCION.ARRAY) {
            //console.log("Nuevo array: ",instruccion)
            var mensaje = DeclaracionArray(instruccion, _ambito)
            if (mensaje != null) {
                cadena += mensaje
            }
        }
        else if(instruccion.tipo===TIPO_INSTRUCCION.MODPOSARRAY){
            
           
            console.log("---------valor: ",instruccion.valor)
            var ar=_ambito.getSimbolo(instruccion.id).valor
            var pos=instruccion.posicion.valor
            var valAsig=Operacion(instruccion.valor,_ambito).valor

            console.log("Instrucciones MODPOSARRAY: ",instruccion)
            var tipo;
            try{
                tipo=instruccion.valor.valor.tipo
            }catch{
                tipo=instruccion.posicion.valor
            }

            ar[pos]=valAsig
            var modif={
                id:instruccion.id,
                tipo:tipo,
                valor:ar,
                linea:instruccion.linea,
                columna:instruccion.columna
                
            }
            //console.log("Instrucciones MODPOSARRAY: ",ar)
            _ambito.actualizar(instruccion.id,modif)
        }else if (instruccion.tipo === TIPO_INSTRUCCION.LISTA) {
            //console.log("Nuevo array: ",instruccion)
            var mensaje = DeclaracionLista(instruccion, _ambito)
            if (mensaje != null) {
                cadena += mensaje
            }
        }else if (instruccion.tipo === TIPO_INSTRUCCION.ADDLISTA) {
            //console.log("Nuevo array: ",instruccion)
            console.log("_entro")
            var mensaje = AddLista(instruccion, _ambito)
            if (mensaje != null) {
                cadena += mensaje
            }
        }else if (instruccion.tipo === TIPO_INSTRUCCION.MODLISTA) {
            console.log("Llegamos al moodificar lista: ",instruccion)
            var id=instruccion.id
            var posicion=instruccion.posicion.valor
            var valor=instruccion.valor
            console.log("Id: ",id)
            console.log("Valor: ",valor)
            var op=Operacion(valor,_ambito)
            console.log("op: ",op)

            var obj=_ambito.getSimbolo(id)
            console.log("obj: ",obj)
            var id=obj.id
            var val=obj.valor
            var tipo=obj.tipo
            var linea=obj.linea
            var columna=obj.columna
            console.log("Posicion: ",posicion)
            console.log(val)

            val[posicion]=op.valor
            console.log(val)

            var inf={
                id:id.toString(),
                valor:val,
                tipo:tipo,
                linea:linea,
                columna:columna
            }
            _ambito.actualizar(id,inf)
        }else if (instruccion.tipo === TIPO_INSTRUCCION.LLAMADA) {
            //console.log("------------------LLAMADA----------------")
            /* var id=instruccion.nombre
            var metodoEjecutar = _ambito.getMetodo(instruccion.nombre)

            if(_ambito.existeMetodo(id.toString())){
                var ambito=_ambito.getMetodo(id.toString())
                var instrucionesAmbito=ambito.instrucciones
                var nuevoAmbito = new Ambito(_ambito,"id")
                var res=Bloque(instrucionesAmbito,nuevoAmbito)
                if (res != null) {
                    cadena += res.cadena
                }
                console.log("Llegamos a una llamada: ",res.cadena)
            }    */


            //------------------------------------------------------------------------------
            try{
                var id=instruccion.nombre
            
            var metodoEjecutar = _ambito.getMetodo(id.toString())
            var ambito=_ambito.getMetodo(id.toString())
            var instrucionesAmbito=ambito.instrucciones
            //console.log("Parametros: ",instruccion.lista_valores)

            
            if(metodoEjecutar!=null){
               var nuevoAmbito = new Ambito(_ambito,id.toString())
               
               //console.log(metodoEjecutar) 
               if (metodoEjecutar.lista_parametro != null) {
                if (instruccion.lista_valores != null && metodoEjecutar.lista_parametro.length == instruccion.lista_valores.length) {
                   // console.log("entro")
                   //console.log("*******************entro a parametros")
                    var error = false;
                    for (let i = 0; i < metodoEjecutar.lista_parametro.length; i++) {
                        
                        var declaracionAsignacion = Instruccion.nuevaDeclaracion(metodoEjecutar.lista_parametro[i].id, instruccion.lista_valores[i], metodoEjecutar.lista_parametro[i].tipo_dato, instruccion.linea, instruccion.columna)
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
                    var ejec = Bloque(metodoEjecutar.instrucciones, nuevoAmbito)
                    cadena += ejec.cadena
                    //console.log("Mensaje: ",ejec)
                    
                    
                }
                else {
                    
                    return `Error: Faltan valores para el metodo ${instrucionesAmbito.nombre}... Linea: ${instrucionesAmbito.linea} Columna: ${instrucionesAmbito.columna}`
                }
        
            } else{
                    //console.log("------------Sin parametros------------------")
                    var ejecS = Bloque(metodoEjecutar.instrucciones,nuevoAmbito)
                    //console.log("---Instrucciones------",ejecS)
                    cadena+=ejecS.cadena
                    
               } 
            } 
            return `Error: El método ${instrucionesAmbito.nombre} no existe... Linea: ${instrucionesAmbito.linea} Columna: ${instrucionesAmbito.columna}`  
            }catch{
                //console.log('---------------------------------LLAMADA DE FUNCIONES----------------------------------------')
                //-------------------------------------------LLAMADA DE FUNCIONES--------------------------------------------------------
                var id=instruccion.nombre
            
            var metodoEjecutar = _ambito.getFuncion(id.toString())
            var ambito=_ambito.getFuncion(id.toString())
            var instrucionesAmbito=ambito.instrucciones
            //console.log("Parametros: ",instruccion.lista_valores)

            
            if(metodoEjecutar!=null){
               var nuevoAmbito = new Ambito(_ambito,id.toString())
               
               //console.log(metodoEjecutar) 
               if (metodoEjecutar.lista_parametro != null) {
                if (instruccion.lista_valores != null && metodoEjecutar.lista_parametro.length == instruccion.lista_valores.length) {
                   // console.log("entro")
                   //console.log("*******************entro a parametros")
                    var error = false;
                    for (let i = 0; i < metodoEjecutar.lista_parametro.length; i++) {
                        
                        var declaracionAsignacion = Instruccion.nuevaDeclaracion(metodoEjecutar.lista_parametro[i].id, instruccion.lista_valores[i], metodoEjecutar.lista_parametro[i].tipo_dato, instruccion.linea, instruccion.columna)
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
                    var ejec = Bloque(metodoEjecutar.instrucciones, nuevoAmbito)
                    cadena += ejec.cadena
                    //console.log("Mensaje: ",ejec)
                    
                    
                }
                else {
                    
                    return `Error: Faltan valores para el metodo ${instrucionesAmbito.nombre}... Linea: ${instrucionesAmbito.linea} Columna: ${instrucionesAmbito.columna}`
                }
        
            } else{
                    console.log("------------Sin parametros------------------")
                    var ejecS = Bloque(metodoEjecutar.instrucciones,nuevoAmbito)
                    //console.log("---Instrucciones------",ejecS)
                    cadena+=ejecS.cadena
                    
               } 
            } 
            return `Error: El método ${instrucionesAmbito.nombre} no existe... Linea: ${instrucionesAmbito.linea} Columna: ${instrucionesAmbito.columna}`  
            }


            //-----------------------------------------------------------------------------
        }
        
        
        
    });

    graficarSimbolos(_ambito,false)
    return {
        cadena:cadena
    }

}
module.exports = Bloque;

