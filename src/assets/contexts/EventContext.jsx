import { createContext, useContext, useState } from 'react';

const EventContext = createContext();

export const useEvent = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
  {
    id: 1,
    title: 'Champions League Screening Night',
    date: '2025-04-20',
    price: 30,
    category: 'Sport'
  },
  {
    id: 2,
    title: 'Culinary Delights Festival',
    date: '2025-03-02',
    price: 40,
    category: 'Food & Culinary'
  },
  {
    id: 3,
    title: 'Artistry Unveiled: Modern Art Expo',
    date: '2025-03-10',
    price: 110,
    category: 'Fashion'
  }
]);


  const value = {
    events,
    setEvents
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};
