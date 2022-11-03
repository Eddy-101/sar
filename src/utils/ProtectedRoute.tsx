import {useNavigate, Route} from 'react-router-dom';
const ProtectedRoute = ({children, ...attrs}: any) => {
  const navigate = useNavigate();
  const isAuthenticated = false;

  return {
    isAuthenticated ? 
      <div>Si</div>:
      <div>No</div>
  }
}

export default ProtectedRoute;
