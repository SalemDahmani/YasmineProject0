import './App.css';
import Header from './components/Header.js'
import Content from './components/Content.js'
import Footer from './components/Footer.js'
import { productData, productDataTwo } from './file.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content title='Buy your favourite Jordan in our website ' array={productData}/>
      <Footer/>
    </div>
  );
}

export default App;
