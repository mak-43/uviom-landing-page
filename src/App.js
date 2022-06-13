
import './App.css';
import Header from './Components/Shared/Header';
import { Routes,Route } from 'react-router-dom';
import Footer from './Components/Shared/Footer';
import Home from './Components/Landing/Home';

function App() {
  return (
    <div className="  h-screen">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>

        <Footer className=''/>

    </div>
  );
}

export default App;
