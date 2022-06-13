import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <ul>
        <h1> Páginas </h1>
        <li> <Link to='/home'>Home</Link> </li>
        <li> <Link to='/login'>Login</Link> </li>
        <li> <Link to='/administrativo'>Administrativo</Link> </li>
        <li> <Link to='/agendar'>Agendar</Link> </li>
        <li> <Link to='/agendamentos'>Agendamentos</Link> </li>
      </ul>
    </div>
  );
}

export default App;
