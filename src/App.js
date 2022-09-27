import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage"
import EventCreatePage from './pages/EventCreate/EventCreatePage';
import EventListPage from './pages/EventList/EventListPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-event' element={<EventCreatePage />} />
        <Route path='/events' element={<EventListPage />} />
      </Routes>
    </div>
  );
}

export default App;
