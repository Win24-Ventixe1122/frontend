import { useBookings } from '../contexts/BookingContext.jsx';
import { useEvent } from '../contexts/EventContext.jsx';
import './Bookings.css';


export default function Bookings() {
  const { bookings } = useBookings();
  const { events } = useEvent();

  const getEventTitle = (eventId) => {
    const event = events.find(e => e.id === eventId);
    return event ? event.title : `Okänt event (ID: ${eventId})`;
  };

  return (
    <section className="bookings-section">
      <h2>Mina bokningar</h2>
        {bookings.length === 0 ? (
          <p>Inga bokningar ännu.</p>
        ) : (
          <div className="booking-grid">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                <div className="booking-title">
                  <strong>Event:</strong> {getEventTitle(booking.eventId)}
                </div>
                <p><strong>Namn:</strong> {booking.name}</p>
                <p><strong>Biljetter:</strong> {booking.tickets}</p>
              </div>
            ))}
          </div>
        )}
    </section>

  );
}

