import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import ScrollTop from './modules/ScrollTop'
import CreateTrip from './pages/CreateTrip'

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import { ToastContainer } from 'react-toastify'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'
import TripDetails from './pages/TripDetails'
import Profile from './pages/Profile'


function App() {

  const AllTrips = lazy(() => import('./pages/AllTrips'))
  const Home = lazy(() => import('./pages/Home'))

  return (
    <>
      <ScrollTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/alltrips' element={<AllTrips />} />
          <Route path='/createtrip' element={<CreateTrip />} />
          <Route path='/landingpage' element={<LandingPage />} />
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path='/landingpage' element={<LandingPage />} />
          <Route path='/:id/tripdetails' element={<TripDetails />} />
          <Route path='/alltrips/:id/tripdetails' element={<TripDetails />} />

        </Routes></Suspense>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
