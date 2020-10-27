import React, { useState } from "react";
import { Box, Grommet, Main, CheckBox, Header } from "grommet";
import Logo from "./components/Logo.js";
import Body from "./components/Body.js";
import Section from "./components/Section.js";
import EventsSection from "./components/EventsSection.js";
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
          <Logo scrollTop={scrollTop} theme={isLightMode ? "light" : "dark"}/>
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
          <Section title="Upcoming Events">
            <EventsSection />
          </Section>
        </Body>
      </Main>
    </Grommet>
  );
}

export default App;
