
const Ambito = require("../controladores/Ambito/Ambito")
const Global = require("../controladores/Instruccion/Global")
const Graficador = require("../controladores/Ambito/Graficador")
var fs = require('fs')
const graficarSimbolos = require("../controladores/Instruccion/GraficarSimbolos")


module.exports=(parser, app)=>{

    var prueba;
    var ast;
    var grafica;
    app.post('/analizar',(req,res)=>{
        
         prueba = req.body.entrada
         try {
            ast = parser.parse(prueba)
         
          } catch (error) {

            console.error("Error en la linea: "+error.message.toString().split("line ")[1].replace(":",""));
          }
             
             grafica = new Graficador(ast)
            //console.log(ast)
            const AmbitoGlobal= new Ambito(null,"Global")
            var cadena =Global(ast, AmbitoGlobal)

            var resultado= {
                arbol: ast,
                resultado:cadena

            }
           
            
            res.send(resultado)
        
    })
    app.get('/CrearAST',(req,res)=>{
        dot =grafica.graficar()
        graficarSimbolos(false,true)
        //console.log(dot)
    fs.writeFile('./controladores/AST/AST.dot',dot,function(error){
        if(error){
            console.log(error)
        }
    });
    const {exec}=require('child_process')
        exec('dot -Tpng ./controladores/AST/AST.dot -o ./controladores/AST/AST.png', (error,stdout,stderr)=>{
            if(error){
                
                console.log(error.message)
                res.send(error.message)
            }
            if(stderr){
                console.log(stderr)
            }
        });
})
    
    
}
