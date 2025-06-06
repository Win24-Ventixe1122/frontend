import { useParams } from 'react-router-dom';
import { useEvent } from '../contexts/EventContext.jsx';
import { useState } from 'react';
import { useBookings } from '../contexts/BookingContext.jsx';

export default function BookingPage() {
  const { id } = useParams();
  const { events } = useEvent();
  const { addBooking } = useBookings();
  const event = events.find(e => e.id === parseInt(id));

  const [name, setName] = useState('');
  const [tickets, setTickets] = useState(1);
  const [message, setMessage] = useState('');

  if (!event) return <p>Event ej hittat</p>;

  const handleBooking = async () => {
    const booking = {
      eventId: event.id,
      name,
      tickets
    };

    await addBooking(booking);
    setMessage('Bokning skickad!');
  };

  return (
    <section style={{ padding: '1rem' }}>
      <h2>Boka: {event.title}</h2>
      <p><strong>Kategori:</strong> {event.category}</p>
      <p><strong>Datum:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Pris:</strong> {event.price} kr</p>
      <p><strong>Plats:</strong> {event.location || 'Ej angiven'}</p>

      <div style={{ marginTop: '1rem' }}>
        <label>
          Ditt namn:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>
          Antal biljetter:
          <input
            type="number"
            value={tickets}
            min={1}
            onChange={e => setTickets(parseInt(e.target.value))}
            required
            style={{ marginLeft: '0.5rem', width: '60px' }}
          />
        </label>
      </div>

      <button
        onClick={handleBooking}
        style={{
          marginTop: '1rem',
          padding: '0.6rem 1.2rem',
          backgroundColor: 'var(--primary-100)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Bekräfta bokning
      </button>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </section>
  );
}