import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './Componenets/Banner/Banner.css'
import Datapor from './Componenets/Datapor/Datapor.jsx';
import Banner from './Componenets/Banner/Banner.jsx';
import CgKoxP from './Componenets/CgKoxP.png'
import eLgxrU from './Componenets/eLgxrU.png'
import Navbar from './Componenets/Navbar/Navbar.jsx';
import '../src/Componenets/Navbar/NAvbar.css';

function App() {


  let [isMoonClicked, setisMoonClicked] = useState(false);

  return (
    <div className={`App ${isMoonClicked ? 'text-bg-dark' : ''}`}>
      <Navbar isMoonClicked={isMoonClicked} setisMoonClicked={setisMoonClicked}/>
      {/* <Mysite /> */}
      <Banner />
      <div className='row' >
        <Datapor imgSrc={eLgxrU} heading="Easy to Use" paragraph="Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly." isMoonClicked={isMoonClicked} setisMoonClicked={setisMoonClicked} />
        <Datapor imgSrc={eLgxrU} heading="Focus on What Matters" paragraph="Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the docs directory." isMoonClicked={isMoonClicked} setisMoonClicked={setisMoonClicked} />
        <Datapor imgSrc={CgKoxP} heading="Powered by React" paragraph="Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer." isMoonClicked={isMoonClicked} setisMoonClicked={setisMoonClicked} />
      </div>
    </div>
  );
}

export default App;
