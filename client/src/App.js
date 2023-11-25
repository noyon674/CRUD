import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './Components/User';
import CreateUser from './Components/CreateUsers';
import UpdateUser from './Components/UpdateUsers';

const App = () =>{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />}>Users</Route>
          <Route path='/create' element={<CreateUser />}>createUser</Route>
          <Route path='/update/:id' element={<UpdateUser />}>UpdateUser</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;