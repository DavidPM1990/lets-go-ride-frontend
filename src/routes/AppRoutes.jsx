import { Route, Routes } from 'react-router-dom';
import EventCreatePage from "../pages/EventCreate/EventCreatePage"
import EventIDPage from "../pages/EventID/EventIDPage"
import EventListPage from "../pages/EventList/EventListPage"
import HomePage from "../pages/HomePage/HomePage"
import LogInPage from "../pages/LogIn/LogInPage"
import ProfilePage from "../pages/Profile/ProfilePage"
import SignupPage from "../pages/Signup/SignupPage"
import EventUpdate from "../pages/EventUpdate/EventUpdatePage"


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/create-event' element={<EventCreatePage />} />
            <Route path='/events' element={<EventListPage />} />
            <Route path='/login' element={<LogInPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/event/:id' element={<EventIDPage />} />
            <Route path='/event/update/:id' element={<EventUpdate />} />
        </Routes>
    )
}

export default AppRoutes