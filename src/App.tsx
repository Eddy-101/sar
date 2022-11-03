import './App.css'
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';

// Pages
import Home from './views/pages/Home';
import CreateData from './views/pages/CreateData';
import Login from './views/auth/Login';
import Layout from './views/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}>
              <Route path="update" element={<CreateData />}/>
            </Route>
          </Route>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
