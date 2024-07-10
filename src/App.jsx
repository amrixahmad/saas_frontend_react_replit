import './Website.css'
import './Admin.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './sitewide/website/MainLayout';
import AdminLayout from './sitewide/admin/AdminLayout';
import Home from './pages/website/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/admin/Admin'
import { Contact, About } from './components/component-services';
import PrivateRoute from './auth/PrivateRoute';
import SinglePage from './pages/admin/SinglePage'
import ChartPage from './pages/admin/ChartPage'
import ProfilePage from './pages/admin/ProfilePage'
import ChatPage from './pages/admin/ChatPage'
import JournalPage from './pages/admin/JournalPage'
import JournalDetailPage from './pages/admin/JournalDetailPage'
import CalendarPage from './pages/admin/CalendarPage'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(   
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />       
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/admin" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<Admin />} />  {/* Default admin page */}
          <Route path='single-page' element={<SinglePage />} />
          <Route path='chart-page' element={<ChartPage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='forex-chat' element={<ChatPage />} />
          <Route path='trading-journal' element={<JournalPage />} />
          <Route path='trading-journal/:id' element={<JournalDetailPage />} />
          <Route path='trading-calendar' element={<CalendarPage />} />
        </Route>
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}
