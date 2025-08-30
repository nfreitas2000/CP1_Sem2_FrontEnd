import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Cabecalho></Cabecalho>
      <Outlet></Outlet>
      <Rodape></Rodape>
    </>
  )
}

export default App