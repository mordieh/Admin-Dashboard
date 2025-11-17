import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Dashboard from "./pages/dashboard/Dashboard.jsx"
import Team from './pages/team/Team.jsx'
import Contacts from './pages/contacts/Contacts.jsx'
import Receipt from './pages/receipt/Receipt.jsx'
import Person from './pages/person/Person.jsx'
import Calendar from './pages/calendar/Calendar.jsx'
import Help from './pages/help/Help.jsx'
import Barchart from './pages/barchar/Barchart.jsx'
import PieChart from './pages/pieChart/PieChart.jsx'
import Timeline from './pages/timeline/Timeline.jsx'
import Map from './pages/map/Map.jsx'
import { NotFound } from './pages/NotFound.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Dashboard />}/>
      <Route path='dashboard' element={<Dashboard />}/>
      <Route path='team' element={<Team />}/>
      <Route path='contacts' element={<Contacts />}/>
      <Route path='receipt' element={<Receipt />}/>

      
      <Route path='person' element={<Person />}/>
      <Route path='calendar' element={<Calendar />}/>
      <Route path='help' element={<Help />}/>
      <Route path='barchar' element={<Barchart />}/>
      <Route path='pieChart' element={<PieChart />}/>
      <Route path='timeline' element={<Timeline />}/>
      <Route path='map' element={<Map />}/>



      <Route path='*' element={<NotFound />}/>


    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)