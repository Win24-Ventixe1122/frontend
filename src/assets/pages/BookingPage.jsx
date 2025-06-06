import { useParams } from 'react-router-dom';
import { useEvent } from '../contexts/EventContext';

export default function BookingPage() {
  const { id } = useParams();
  const { events } = useEvent();
  const event = events.find(e => e.id === parseInt(id));

  const handleBooking = () => {
    alert(`Du har bokat 1 biljett till ${event.title}`);
  };

  if (!event) return <p>Event ej hittat</p>;

  return (
    <section style={{ padding: '1rem' }}>
      <h2>Boka: {event.title}</h2>
      <p><strong>Kategori:</strong> {event.category}</p>
      <p><strong>Datum:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Pris:</strong> {event.price} kr</p>
      <p><strong>Plats:</strong> {event.location || 'Ej angiven'}</p>

      <button onClick={handleBooking} style={{ marginTop: '1rem', padding: '0.6rem 1.2rem', backgroundColor: 'var(--primary-100)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Bekräfta bokning</button>
    </section>
  );
}

