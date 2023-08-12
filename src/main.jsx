import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, { action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, { loader as clientesLoader } from './pages/Index'
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction} from './pages/EditarCliente'
import ErrorPage from './components/ErrorPage'
import { action as eliminarClienteAction } from './components/Cliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, /* Este sera el layout header que tendrean todos nuestros componentes */
    children: [
      {
        index: true, /* el index le indica que este sera ele lemento inicial de nuestra pagina */
        element: <Index />, /* Elemento a renderiar */
        loader: clientesLoader, // Este loader que creamos en el index funcionara como un useEffect
        errorElement: <ErrorPage /> // Con este errorElement se puede mostrar una pantalla de error
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction, // Le pasamos el action para formularios que cremos con Form de REACT
        errorElement: <ErrorPage /> // Con este errorElement se puede mostrar una pantalla de error
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,  // Le pasamos el action para formularios que cremos con Form de REACT 
        errorElement: <ErrorPage /> // Con este errorElement se puede mostrar una pantalla de error
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction // Le pasamos el action para formularios que cremos con Form de REACT  para eliminar
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
