import React, { useEffect, useState } from "react";
import { Box, Heading } from "grommet";
import LoadingSpinner from "./LoadingSpinner.js";
import EventCard from "./EventCard.js";
import GridGenerator from './GridGenerator.js'

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop))
      return false;
  }

  return true;
}

export default function EventsSection() {
  const [events, setEvents] = useState(null);
  const [loadingEvents, setLoadingEvents] = useState(false);

  async function getEvents() {
    try {
      setLoadingEvents(true);
      const res = await fetch(`https://utd-gwc-api.herokuapp.com/api/events/upcoming?sort=+date`, {
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
    <Box fill={true} direction="row-responsive" justify="center">
      {loadingEvents ?
        (
          <LoadingSpinner />
        )
        :
        (
          events == null ?
            (
              <Box margin="medium">
                <Heading level={4}>
                  Something went wrong. Please try again later.
                </Heading>
              </Box>
            )
            :
            (
              isEmpty(events) ?
                (
                  <EventCard
                    title={"TBA"}
                    description={"We currently have no events planned for the near future. If you have an idea for an event you want to see us host feel free to send us an email or DM us on insta! Our contact info can be found below in the \"Follow Us\" section."}
                    flyerUrl={"https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg"}
                  />
                )
                :
                (
                  <GridGenerator fullRow>
                    {events.map((event) => {
                      var date = {
                        dateString: null,
                        timeString: null,
                      };
                      if (event.date != null) {
                        let tempDate = new Date(event.date);
                        date.dateString = tempDate.toLocaleDateString();
                        date.timeString = tempDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
                      }
                      return (
                        <EventCard
                          key={event.title}
                          title={event.title}
                          description={event.description}
                          dateObj={event.date}
                          date={date.dateString}
                          time={date.timeString}
                          flyerUrl={event.flyerUrl}
                        />
                      );
                    })}
                  </GridGenerator>
                )
            )
        )}
    </Box>
  );
}
