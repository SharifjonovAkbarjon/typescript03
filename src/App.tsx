import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Product from './components/product/Product'
import './index.css'
import Detail from './components/detail/Detail'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
