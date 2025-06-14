import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { EventProvider } from './assets/contexts/EventContext.jsx';
import { BookingProvider } from './assets/contexts/BookingContext.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BookingProvider>
        <EventProvider>
          <App />
        </EventProvider>
      </BookingProvider>
    </BrowserRouter>
  </StrictMode>
);


