import logo from './logo.svg';
import './App.css';
import './Componenets/Banner/Banner.css'
import Mysite from './Componenets/Mysites/Mysite';
import Datapor from './Componenets/Datapor/Datapor.jsx';
import Banner from './Componenets/Banner/Banner.jsx';
import  CgKoxP from './Componenets/CgKoxP.png'
import  eLgxrU from './Componenets/eLgxrU.png'

function App() {

  return (
    <div className="App">
   <Mysite/>
   <Banner/>
   <div className='Cards' >
   <Datapor imgSrc ={eLgxrU}/>
   <Datapor imgSrc={eLgxrU}/>
   <Datapor imgSrc={CgKoxP}/>
   </div>
    </div>
  );
}

export default App;
