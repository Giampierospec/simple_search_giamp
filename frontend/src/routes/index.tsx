import { createBrowserRouter } from 'react-router-dom'
import Container from '../components/Container'
import MainPage from '../pages'
import Details from '../pages/details'
export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Container>
        <MainPage />
      </Container>
    ),
  },
  {
    path: '/:id',
    element: (
      <Container>
        <Details />
      </Container>
    ),
  },
])
