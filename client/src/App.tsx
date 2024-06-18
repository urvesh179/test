import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/protectedRoutes';
import NotFound from './pages/NotFound';

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
