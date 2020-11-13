import React, { useEffect, useState } from "react";
import { Box, Heading, Image, Button } from "grommet";
import LoadingSpinner from "./LoadingSpinner.js";
import TeamsLogo from './../static/Microsoft_Teams-Logo.wine.svg'
import FadeInComponent from "./FadeInComponent.js";

function StayInTheLoopBox({ children }) {
    return (
        <FadeInComponent style={{alignSelf: "center"}}>
            <Box align="center" alignSelf="center" justify="center">
                <Heading level="2" margin={{ bottom: "small", top: "none" }}>Stay In The Loop!</Heading>
                <Box width="medium" height="medium" background="card-background" round direction="column" elevation="medium">
                    {children}
                </Box>
            </Box>
        </FadeInComponent>
    )
}

export default function StayInTheLoop() {
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
            <StayInTheLoopBox>
                <Heading textAlign="center" level="3" margin={{ top: "medium", bottom: "none", horizontal: "medium" }}>All of our events are hosted on Microsoft Teams</Heading>
                <Image fit="cover" src={TeamsLogo} />
                <Button color="button-primary"
                    label={<Heading level="3" margin="none">Join Our Team</Heading>}
                    style={{ width: "medium" }}
                    margin={{ top: "none", bottom: "medium" }}
                    alignSelf="center"
                    primary
                    hoverIndicator={{color: "card-background"}}
                    href=""
                    target="_blank"
                />
            </StayInTheLoopBox>
        )
    } else {
        return (
            <StayInTheLoopBox>
                <Image fit="cover" src={featuredEvent.flyerUrl} />
            </StayInTheLoopBox>
        )
    }
}