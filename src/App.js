import { Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import Update from './components/Update';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MainHome from './components/MainHome';
import OneHome from './components/OneHome';

function App() {
  return (
    <>
    <NavBar/>
    <div className='ml-auto mr-auto'>
    <Routes>
        <Route path='/' element={<MainHome/>}/>
        <Route path='/homes' element={<Home/>}/>
        <Route path='/sell' element={<Create/>}/>
        <Route exact path='/oneHome/:id' element={<OneHome/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
