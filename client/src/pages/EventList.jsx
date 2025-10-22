import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/events")
      .then((res) => {
        // kalau API return {status, data}
        setEvents(res.data.data || res.data);
      })
      .catch((err) => console.error("Gagal ambil event:", err));
  }, []);

  return (
    <div className="pt-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Daftar Event</h2>
      {events.length === 0 ? (
        <p className="text-gray-500">Belum ada event tersedia.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.event_id}
              className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{event.organizer}</h3>
              <p className="text-gray-600">{event.genre}</p>
              <p className="text-sm text-gray-500">
                {new Date(event.date_time).toLocaleDateString()} @{" "}
                {event.venue?.venue_name}
              </p>
              <p className="mt-2 font-bold text-blue-600">
                Rp {event.price.toLocaleString()}
              </p>
              <Link to={`/event/${event.event_id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                  Lihat Detail
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
