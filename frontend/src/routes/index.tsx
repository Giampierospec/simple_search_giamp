import { createBrowserRouter } from 'react-router-dom'
import Container from '../components/Container'
import MainPage from '../pages'
export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Container>
        <MainPage />
      </Container>
    ),
  },
])
