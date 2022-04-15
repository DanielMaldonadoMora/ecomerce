import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom';
import {Home,Product,Cart} from './pages';
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
         <Route path="/product/:id" element={<Product/>}/>
         <Route path="/cart" element={<Cart/>} />
       </Routes>
     </HashRouter>
      
    
    </div>
  );
}

export default App;
