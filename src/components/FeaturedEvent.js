import React, { useEffect, useState } from "react";
import { Box, Heading, Image } from "grommet";
import LoadingSpinner from "./LoadingSpinner.js";

export default function EventsSection() {
    const [featuredEvent, setFeaturedEvent] = useState(null);
    const [loadingEvent, setLoadingEvent] = useState(false);

    async function getEvents() {
        try {
            setLoadingEvent(true);
            const res = await fetch(`https://utd-gwc-api.herokuapp.com/api/events/upcoming?sort=+date`, {
                method: "GET",
            });
            const events = await res.json();
            setFeaturedEvent(events[0]);
        } catch (err) {
            console.log(err);
        } finally {
            setLoadingEvent(false);
        }
    }

    useEffect(() => {
        getEvents();
    }, []);

    if (loadingEvent) {
        return (
            <Box align="center">
                <Box justify="center" width="medium" height="medium" background="none">
                    <LoadingSpinner />
                </Box>
            </Box>
        )
    } else if (featuredEvent == null || featuredEvent.flyerUrl == null) {
        return (
            <Box align="center">
                <Heading level="2">Join Our Team!</Heading>
                <Box width="medium" height="medium" background="card-background">
                    <Image fit="cover" />
                </Box>
            </Box>
        )
    } else {
        return (
            <Box align="center">
                <Heading level="2">Featured Event</Heading>
                <Box width="medium" height="medium" background="card-background" elevation="medium">
                    <Image fit="cover" src={featuredEvent.flyerUrl} />
                </Box>
            </Box>
        )
    }
}