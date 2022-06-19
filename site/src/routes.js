import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Login from './pages/login';
import Administrativo from './pages/administrativo';
import Agendar from './pages/agendar';
import Agendamentos from './pages/agendamentos';


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Login />} />
                <Route path='/admin/home' element={<Administrativo />} />
                <Route path='/admin/agendar' element={<Agendar />} />

                <Route path='/admin/alterar/:idParam' element={<Agendar />} />
                
                <Route path='/admin/agendamento' element={<Agendamentos />} />
            </Routes>
        </BrowserRouter>
    )
}