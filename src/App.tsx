import {lazy, Suspense} from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';

// Pages
const ProtectedRoute = lazy(() => import("./utils/ProtectedRoute"))
const Home = lazy(() => import("./views/pages/Home"))
const Login = lazy(() => import ("./views/auth/Login"))
const Layout = lazy(() => import("./views/Layout"))
const CreateData = lazy(() => import("./views/pages/CreateData"))
const Profile = lazy(() => import("./views/pages/Profile"))
const Status = lazy(() => import("./views/pages/Status"))

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<span>Loading...</span>}>
          <Routes>

            {/*Routes Protected*/}
            <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route path="" element={<Home />}>
                <Route path="" element={<Profile />} />
                <Route path="update" element={<CreateData />}/>
                <Route path="status" element={<Status />}/>
              </Route>
            </Route>

            <Route path="/login" element={<Login />}/>

          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
