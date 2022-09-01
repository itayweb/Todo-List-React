import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import DonePage from './pages/DonePage';
import HelpPage from './pages/HelpPage';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div>
          <Nav />
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/todo' element={<TodoPage/>}/>
            <Route path='/done' element={<DonePage/>}/>
            <Route path='/help' element={<HelpPage/>}/>
          </Routes>
    </div>
  );
}

export default App;
