import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'welcome to the new blog'
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
