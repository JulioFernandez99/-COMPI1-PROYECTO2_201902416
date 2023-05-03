
const fs = require('fs');
var codigo=""
var tabla=[]
var temp

function graficarSimbolos(_ambito,graf,entorno){

    
    
    if(graf===false){
        console.log(_ambito.tablaSimbolos)
        
        for(let i=0;i<_ambito.simbolos.length;i++){

            
            try {
               
                var data=JSON. parse(JSON.stringify(_ambito.simbolos[i]).replace("[","").replace("]",""))
                
            } catch (error) {
                var data= JSON.stringify(_ambito.simbolos[i]).replace("[","").replace("]","")
            }
            
            
             if (tabla.indexOf(data) === -1) {
                tabla.push(data)
              } 
                
             
            
           
            //tabla.push(JSON.parse(JSON.stringify(_ambito.simbolos[i]).replace("[","").replace("]","")))
        } 
    }else {
        codigo+="<!DOCTYPE html>\r\n"
        + "<html lang=\"en\">\r\n"
        + "<head>\r\n"
        + "    <meta charset=\"UTF-8\">\r\n"
        + "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n"
        + "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n"
        + "    <title>Document</title>\r\n"
        + "</head>\r\n"
        + "<style type=\"text/css\">\r\n"
        + "    table,th,td{\r\n"
        + "        border: 1px solid black;\r\n"
        + "        border-collapse: collapse;\r\n"
        + "    }\r\n"
        + "</style>\r\n"
        + "<body>\r\n"
        +"<h1>Tabla de simbolos</h1>"
        + "    \r\n"
        + "<table style=\"width: 100%;\">\r\n"
        + "\r\n"
        + "    <tr>\r\n"
        + "  \r\n"
        + "      <th>Identificador</th>\r\n"
        + "  \r\n"
        + "      <th>Tipo</th>\r\n"
        + "  \r\n"
        + "      <th>Linea</th>\r\n"
        + "    \r\n"
        + "      <th>Columna</th>\r\n"
        + "\r\n"
        + "    </tr>\r\n"

        
        for(let i=0;i<tabla.length;i++){
            console.log("Data: ",tabla[i])
           
                console.log("REPETIDOS:",tabla[i])
                
                if(temp!=tabla[i].id){
                    codigo+="   <tr>\n"
                    codigo+="       <td>"+tabla[i].id+"</td>\n"
                    codigo+="       <td>"+tabla[i].tipo+"</td>\n"
                    codigo+="       <td>"+tabla[i].linea+"</td>\n"
                    codigo+="       <td>"+tabla[i].columna+"</td>\n"
                    codigo+="   </tr>\n"
                }
                
                temp=tabla[i].id
            
            rep=tabla[i]
            
                

            

            //codigo+=tabla[i].id+"\n"
        }

        codigo+=" </table>\r\n"
				+ "</body>\r\n"
				+ "</html>";
    
        fs.writeFile('./Reportes/Tabla de simbolos.html', codigo, function (err) {
            if (err) throw err;
            console.log('Reporte de simbolos creado con exito.....');
            codigo=""
            tabla=[]
          });
        codigo=""
    }
}

module.exports=graficarSimbolos