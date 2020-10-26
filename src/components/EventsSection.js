import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import LoadingSpinner from "./LoadingSpinner.js";
import EventCard from "./EventCard.js";
import GridGenerator from './GridGenerator.js'

export default function EventsSection() {
  const [events, setEvents] = useState(null);
  const [loadingEvents, setLoadingEvents] = useState(false);

  async function getEvents() {
    try {
      setLoadingEvents(true);
      const res = await fetch(`https://utd-gwc-api.herokuapp.com/api/events`, {
        method: "GET",
      });
      const events = await res.json();
      setEvents(events);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingEvents(false);
    }
  }

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <Box fill="horizontal" direction="row-responsive" justify="center">
      {loadingEvents || events == null ? (
        <LoadingSpinner />
      ) : (
          <GridGenerator fullRow>
            {events.map((event) => {
              var date = {
                dateString: null,
                timeString: null,
              };
              if (event.date != null) {
                let tempDate = new Date(event.date);
                date.dateString = tempDate.toLocaleDateString();
                date.timeString = tempDate.toLocaleTimeString();
              }
              return (
                <EventCard
                  title={event.title}
                  description={event.description}
                  date={date.dateString}
                />
              );
            })}
          </GridGenerator>
        )}
    </Box>
  );
}
