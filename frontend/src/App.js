
import Home from './pages/Home';
import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/:id?' element={<Home />}></Route>
        </Routes>


      </Router>





    </div>
  );
}

export default App;
