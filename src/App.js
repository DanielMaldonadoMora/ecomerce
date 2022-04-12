import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom';
import {Home,Products,Cart} from './pages';
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux';




function App() {
 
  const isLoading=useSelector(state=>state.isLoading)

  return (
    <div className="App">
     
     <HashRouter>
      {isLoading && <LoadingScreen/>}
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/cart" element={<Cart/>} />
       </Routes>
     </HashRouter>
      
    
    </div>
  );
}

export default App;
