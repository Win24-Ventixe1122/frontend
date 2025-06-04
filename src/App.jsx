import { Route, Routes } from 'react-router-dom'
import './App.css'
import PortalLayout from './assets/layouts/PortalLayout'
import EventList from './assets/components/EventList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortalLayout />}>
        <Route index element={<EventList />} />
      </Route>
    </Routes>
  )
}

export default App
