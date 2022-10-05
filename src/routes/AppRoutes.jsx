import { Route, Routes } from 'react-router-dom'
import EventCreatePage from "../pages/EventCreate/EventCreatePage"
import EventIDPage from "../pages/EventID/EventIDPage"
import EventListPage from "../pages/EventList/EventListPage"
import HomePage from "../pages/HomePage/HomePage"
import LogInPage from "../pages/LogIn/LogInPage"
import ProfilePage from "../pages/Profile/ProfilePage"
import SignupPage from "../pages/Signup/SignupPage"
import EventUpdate from "../pages/EventUpdate/EventUpdatePage"
import IsPrivate from '../routes/isPrivate'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/create-event' element={<IsPrivate><EventCreatePage /></IsPrivate>} />
            <Route path='/events' element={<EventListPage />} />
            <Route path='/login' element={<LogInPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/profile' element={<IsPrivate><ProfilePage /></IsPrivate>} />
            <Route path='/event/:id' element={<IsPrivate><EventIDPage /></IsPrivate>} />
            <Route path='/event/update/:id' element={<IsPrivate><EventUpdate /></IsPrivate>} />
        </Routes>
    )
}
export default AppRoutes


