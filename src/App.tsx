import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

import { store } from './store'
import EstiloGlobal, { Container, Titulo } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Titulo>Cadastro de Contatos</Titulo>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
