import './App.css';
import  { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

//import {saveAs} from 'file-saver'
var nmFile='';

function App() {
  
  const [code, setCode] = useState('');
  const [resultado, setResultado] = useState('');

  function saveTextAsFile() {
   
    let fileName = window.prompt('Nombre del archivo');
    console.log(fileName)
    var textFileAsBlob = new Blob([code], { type: 'text/plain' });
    if(fileName==null) return;
  var downloadLink = document.createElement("a");
  downloadLink.download = fileName+".tw";
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }
  downloadLink.click();
    
  }
  
const readFile=(e)=>{
    
    const file=e.target.files[0];
    if(!file) return;
    const fileReader=new FileReader();
    fileReader.readAsText(file);
    fileReader.onload=()=>{
      nmFile=e.target.files[0].name;
      console.log(nmFile)
      setCode('')
      setCode(fileReader.result)
    }
    fileReader.onerror=()=>{
      console.log(fileReader.error)
      
    }
  }
  function graficar(){
    
    console.log("Analizando......")
    axios.get('http://localhost:5000/CrearAST', {
      
    })
    .then(function (response) {
      console.log(response);
      setResultado(response.data.resultado);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function guardar(){
    var fileName =nmFile;
    console.log(fileName)
    var textFileAsBlob = new Blob([code], { type: 'text/plain' });
    if(fileName===''){
      alert("Primero debe abrir un archivo -",fileName);
      return
    };
  var downloadLink = document.createElement("a");
  downloadLink.download = fileName+".tw";
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }
  downloadLink.click();
  }
  
  function analizar(){
    console.log("Analizando......")
    axios.post('http://localhost:5000/analizar', {
      entrada: code
    })
    .then(function (response) {
      console.log(response);
      setResultado(response.data.resultado);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  

  return (
    
    
     

    <div className="App">
        
        <div class='bar'>

        <div class='nm'>
            <p id="name">TypeWise</p>
            
          </div>
          
          <div class='btn-abrir'>
            <p id="btn-abrir">Abrir archivo </p>
            <input type="file" id="boton-abrir" onChange={readFile}/> 
          </div>

          <div class='btn-gcomo'>
            <p id="btn-gcomo">Crear archivo</p>
            <input type="Button" id="boton-gcomo" onClick={saveTextAsFile}/>
          </div> 
          
          <div class='btn-guardar'>
            <p id="btn-guardar">Guardar archivo</p>
            <input type="Button" id="boton-gcomo" onClick={guardar}/>
          </div> 

          <div class='relleno'>
            <div class='relleno2'>
            
            </div> 
          </div> 

        </div>
        

        
        
      <header className="App-header">
        
      <div className='editores' >
        <div className='containerE'>
          <div className="editor1">
            <MonacoEditor
              width="700"
              height="600"
              language="javascript"
              theme="vs-dark"
              value={code}
              options={{ minimap: { enabled: false } }}
              onChange={setCode}
            />
          </div>
          <div className="editor2">
            <MonacoEditor
              width="700"
              height="600"
              language="javascript"
              theme="vs-dark"
              value={resultado}
              options={{ readOnly: true }}
            />
          </div>
        </div>
          <div>
            
            <Button variant="primary" classname="boton" onClick={()=>{analizar()} }>Analizar</Button>
            
          </div>
          <div>
            
            <Button variant="primary" classname="boton" onClick={()=>{graficar()} }>Graficar</Button>

          </div>

          
          
          
        </div>
      </header>
    </div>
 
);
}


export default App;

