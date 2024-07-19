import React from 'react'
import Navbar from './Components/Navbar'
 import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Index from './Components/Index'
import UserContextProvider from './Components/Usercontext'
import Createpost from './Components/Createpost'
import Postpage from './Components/Postpage'
import Editpage from './Components/Editpage'
    


const App = () => {
  return (
    <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            < Index />
          </div>}
        />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/create' element={<Createpost/>}/>
        <Route path='/post/:id' element={<Postpage/>}/>
        <Route path='/edit/:id' element={<Editpage/>}/>
        
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
    

  )
}

export default App