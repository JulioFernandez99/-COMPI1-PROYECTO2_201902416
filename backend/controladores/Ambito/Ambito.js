class Ambito{
    constructor(_anterior, _actual){   // new Ambito(null, "global")
        this.anterior = _anterior;
        this.nombre = _actual;
        this.simbolos=[]
        this.tablaSimbolos = new Map();
        this.tablaMetodos = new Map();
        this.tablaFunciones = new Map();
    }
    addSimbolo(_clave, _simbolo){ //agregar simbolo
        this.tablaSimbolos.set(_clave.toLowerCase(), _simbolo)  
        if (this.simbolos.indexOf(_simbolo) === -1) {
            this.simbolos.push(_simbolo)
          }
    }
    getSimbolo(_clave){  //retornar simbolo
        for(let e=this; e!=null; e=e.anterior){
            var encontrado = e.tablaSimbolos.get(_clave.toLowerCase())
            if(encontrado!=null){
                return encontrado
            }
        }
        return null
    }
    existeSimbolo(_clave){  //retornar simbolo
        for(let e=this; e!=null; e=e.anterior){
            var encontrado = e.tablaSimbolos.get(_clave.toLowerCase())
            if(encontrado!=null){
                return true
            }
        }
        return false
    }
    existeSimboloAmbitoActual(_clave){  //retornar simbolo
        var encontrado = this.tablaSimbolos.get(_clave.toLowerCase())
        
        if(encontrado!=null){
            return true
        }
        return false
    }
    actualizar(_clave,_simbolo){
        for(let e=this; e!=null; e=e.anterior){
            var encontrado = e.tablaSimbolos.get(_clave.toLowerCase())
            if(encontrado!=null){
                e.tablaSimbolos.set(_clave,_simbolo)
                console.log("Se actualizo con exito: ",_simbolo)
                return true;
            }
            
        }
        return false;
    }
    addMetodo(_s, _metodo){ //agregar metodo
        this.tablaMetodos.set(_s.toLowerCase(), _metodo)
    }
    getMetodo(_s){ //(hola, clase simbolo)
        for(let e=this; e!=null; e=e.anterior){
            var encontrado = e.tablaMetodos.get(_s.toLowerCase()) //hola<=>HoLA
            if(encontrado!=null){
                return encontrado
            }
        }
        return null
    }
    existeMetodo(_s){ //verificar si existe metodo
        for(let e=this; e!=null; e=e.anterior){
            var encontrado = e.tablaMetodos.get(_s.toLowerCase()) 
            if(encontrado!=null){
                return true
            }
        }
        return false
    }
    clearMapExceptFirst() {
        const firstKey = this.tablaSimbolos.keys().next().value; // Obtiene la clave de re
        const valKey=this.tablaSimbolos.get(firstKey)
        //console.log("Primer simbolo del map: ",firstKey)
        //console.log("Valor de simbolo: ",this.tablaSimbolos.get(firstKey))
        this.tablaSimbolos.clear();

        this.addSimbolo(firstKey,valKey)

      }
    addFuncion(_s, _metodo){ //agregar funcion
        this.tablaFunciones.set(_s.toLowerCase(), _metodo)
    }
    getFuncion(_s){ //(hola, clase simbolo)
        for(let e=this; e!=null; e=e.anterior){
            var encontrado = e.tablaFunciones.get(_s.toLowerCase()) //hola<=>HoLA
            if(encontrado!=null){
                return encontrado
            }
        }
        return null
    }
    existeFuncion(_s){ //verificar si existe la funcion
        for(let e=this; e!=null; e=e.anterior){
            var encontrado = e.tablaFunciones.get(_s.toLowerCase()) 
            if(encontrado!=null){
                return true
            }
        }
        return false
    }
}
module.exports= Ambito