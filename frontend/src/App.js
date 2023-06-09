import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from "./components/Navbar";

function App() {
  const token = localStorage.getItem('token') || null;
  return (
    <div className="App">
      {token && <Navbar />}
      <AllRoutes />
    </div>
  );
}

export default App;
