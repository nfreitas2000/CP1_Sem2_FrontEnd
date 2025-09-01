import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import { Outlet } from 'react-router-dom'
import './App.css'

export default function App() {

  return (
    <>
      <Cabecalho></Cabecalho>
      <Outlet></Outlet>
      <Rodape></Rodape>
    </>
  )
}

