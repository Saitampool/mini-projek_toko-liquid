import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Index from '../pages/Index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index/>} path='/'/>
        <Route element={<Login/>} path='/auth/login'/>
        <Route element={<Register/>} path='/auth/register'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App