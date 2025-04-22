
import './App.css'
import Menuu from './Componentes/Menuu'
import Mainn from "./Componentes/Mainn"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Iniciar from './Componentes/iniciar'
import Login from './Componentes/Login'
import Registrar from './Componentes/Registrar'
import Inregistro from './Componentes/Inregistro'


function App() {
  

  return (
    <>
    
  
    <BrowserRouter>
    
    <Routes>

      <Route path="" element={<Mainn></Mainn>}></Route>
      <Route path="/iniciar" element={<Login></Login>}></Route>
      <Route path="/registro" element={<Inregistro></Inregistro>}></Route>

    </Routes>
    
    </BrowserRouter>

   

      
    </>
  )
}

export default App
