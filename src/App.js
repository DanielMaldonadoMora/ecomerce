import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom';
import {Home,Product,Cart} from './pages';
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';




function App() {
 
  const isLoading=useSelector(state=>state.isLoading)

  return (
    <div className="App">
     <NavBar/>
     <HashRouter>
      {isLoading && <LoadingScreen/>}
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/product/:id" element={<Product/>}/>
         <Route path="/cart" element={<Cart/>} />
       </Routes>
     </HashRouter>
      
    
    </div>
  );
}

export default App;
