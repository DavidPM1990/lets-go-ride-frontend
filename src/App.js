import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage"
import EventCreatePage from './pages/EventCreate/EventCreatePage';
import EventListPage from './pages/EventList/EventListPage';
import Navigation from './components/Navbar/Navbar'
import LoginPage from './pages/LogIn/LogInPage'
import SignupPage from './pages/Signup/SignupPage'
import ProfilePage from './pages/Profile/ProfilePage'
import EventID from './pages/EventID/EventIDPage'

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-event' element={<EventCreatePage />} />
        <Route path='/events' element={<EventListPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/:id' element={<EventID />} />
      </Routes>
    </div>
  );
}

export default App;
