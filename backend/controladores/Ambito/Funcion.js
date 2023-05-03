class Funcion{
    constructor(_id,_lista_parametro,_instrucciones,_linea,_columna,_return){
        this.id = _id;
        this.lista_parametro = _lista_parametro;
        this.instrucciones = _instrucciones;
        this.linea = _linea;
        this.columna = _columna;
        this.return=_return
    }
}
module.exports = Funcion