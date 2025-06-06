import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('https://localhost:7144/api/bookings');
        console.log('Bokningar från API:', response.data);
        setBookings(response.data);
      } catch (error) {
        console.error('Kunde inte hämta bokningar:', error);
      }
    };

    fetchBookings();
  }, []);

  const addBooking = async (newBooking) => {
    try {
      const response = await axios.post('https://localhost:7144/api/bookings', newBooking);
      setBookings(prev => [...prev, response.data]);
    } catch (error) {
      console.error('Kunde inte lägga till bokning:', error);
    }
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  return useContext(BookingContext);
}
