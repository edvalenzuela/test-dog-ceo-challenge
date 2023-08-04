
import { Routes, Route, Navigate } from 'react-router-dom';
import { DogProvider } from './context/DogProvider';

import { HomePage } from './pages/HomePage';
import { Header, Footer } from './shared';

export const App = () => {
  return (
    <DogProvider>
      <Header />

      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/*' element={ <Navigate to="/" /> } />
      </Routes>

      <Footer />
    </DogProvider>
  )
}