import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Aparelhos from './routes/Aparelhos/index.tsx'
import Home from './routes/Home/index.tsx'
import VisualizarAparelhos from "./routes/VisualizarAparelho/index.tsx"

const router = createBrowserRouter([{ 
  path:"/", 
  element: <App/>, 
  errorElement: <Error/>, // CASO AJA UM ERRO, EXECUTAR...
  children: [{ 
    path: "/", 
    element: <Home/> 
  },
  {
    path: "/aparelhos", //CASO VÁ PARA OS PRODUTOS (HTTPS://MINHAPAGINA/PRODUTOS))
    element: <Aparelhos/> // EXECUTAR PRODUTOS
  }, 
  {
    path: "/aparelhos/visualizar/:id", //CASO VÁ PARA DE EDITAR PRODUTOS(HTTPS://MINHAPAGINA/PRODUTOS/EDITAR)
    //^^^OBS: O ":id" É UM COMANDO RESERVADO PARA EDITAR DETERMINADO PRODUTO.
    element: <VisualizarAparelhos/> // EXECUTAR . . .
  }
],
}
]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
