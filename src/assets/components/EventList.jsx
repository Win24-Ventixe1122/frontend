import { useEvent } from '../contexts/EventContext.jsx';
import './EventList.css'; 

export default function EventList() {
  const { events } = useEvent();

  return (
    <section>
      <h2>All Events</h2>
      <div className="event-grid">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <div className="event-category">{event.category}</div>
            <h3>{event.title}</h3>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p className="event-price">${event.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

