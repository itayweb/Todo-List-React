import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import NotFound from './pages/404';
import DonePage from './pages/DonePage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Navigate replace to="/todo"/>}/>
            <Route path='/todo' element={<TodoPage/>}/>
            <Route path='/done' element={<DonePage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
    </div>
  );
}

export default App;
