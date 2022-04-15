
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart } from '../components/Cart'
import { Header } from '../components/Header'
import { Home } from '../components/Home'

export const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Header />


      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
