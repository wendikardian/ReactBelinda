import Head from './components/head';
import Header from './components/header';
import Contain from './components/contain';
import Home from './components/home';
import About from './components/about';
import Galery from './components/galery';
import Education from './components/education';
import Contact from './components/contact';

import './App.css';


const HomeScreen = () => {
  return(
    <div className="container">
      <Head />
      <Header />
      <Home />
    </div>
  )
}
const aboutScreen = () => {
  return(
    <div className="container">
      <Head />
      <About />
      <Home />
    </div>
  )
}


// function App() {
//   return (
//     <div className="container">
//       <Head />
//       <Header />
//       {/* <Contain /> */}
//       <Home />
//       {/* <About /> */}
//       {/* <Galery /> */}
//       {/* <Education /> */}
//       {/* <Contact /> */}

//     </div>
//   );
// }
function App() {
  return (
    <>
    {/* <HomeScreen /> */}
    {/* <aboutScreen /> */}
    <div className="container">
      <Head />
      <Header />
      <About />
    </div>
    </>
  );
}

export default App;
