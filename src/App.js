import './App.css';
import Home from './components/Home';
import DataProvide from './context/DataProvide';
function App() {
  return (
    <div className="App">
      <DataProvide>
        <Home/>
      </DataProvide>
    </div>
  );
}

export default App;
