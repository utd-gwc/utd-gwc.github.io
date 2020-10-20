import React, { useState } from "react";
import { Box, Grommet, Heading, Main, CheckBox, Header } from "grommet";
import Logo from "./components/Logo.js";
import Body from "./components/Body.js";
import EventCard from "./components/EventCard.js";
import useComponentScroll from "./hooks/useComponentScroll.js";
import { lightTheme, darkTheme } from "./hooks/useGWCTheme.js";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [scrollTop, setScrollTop] = useState(document.body.scrollTop);

  const handleOnScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  const innerRef = useComponentScroll(handleOnScroll);

  return (
    <Grommet theme={isLightMode ? lightTheme : darkTheme} full>
      <Main>
        <Header
          pad={{ left: "medium", right: "small", vertical: "small" }}
          elevation="xsmall"
          background={scrollTop === 0 ? "background" : "neutral-3"}
          style={{ transition: "background-color .4s" }}
        >
          <Logo scrollTop={scrollTop} />
          <Box justify="between" fill="horizontal" align="end">
            <CheckBox
              toggle
              onChange={() => {
                setIsLightMode(!isLightMode);
              }}
            />
          </Box>
        </Header>
        <Body innerRef={innerRef}>
          <Box width="large" fill="horizontal" height="large" direction="row-responsive">
            <EventCard
              title="Interviewing 101"
              description="Yoooooooo"
              date="03/20/20"
            />
            <EventCard
              title="Interviewing 101"
              description="Yoooooooo"
              date="03/20/20"
            />
            <EventCard
              title="Interviewing 101"
              description="Yoooooooo"
              date="03/20/20"
            />
          </Box>
        </Body>
      </Main>
    </Grommet>
  );
}

export default App;
