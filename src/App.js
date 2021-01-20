import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Search/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
