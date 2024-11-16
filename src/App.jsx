import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-blue-100 to-gray-50">
      <Header />
      <main className="flex-grow p-4">
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
          <Outlet />
        </div>
      </main>
      <Footer className="mb-0" />
    </div>
  ) : null;
}

export default App;
