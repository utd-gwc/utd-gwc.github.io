import React, { useState } from "react";
import { Box, Grommet, Main, Footer, Heading, Image } from "grommet";
import Section from "./components/Section.js";
import EventsSection from "./components/EventsSection.js";

import useComponentScroll from "./hooks/useComponentScroll.js";
import { lightTheme, darkTheme } from "./hooks/useGWCTheme.js";
import Landing from "./components/Landing.js";

import logo from "./static/gwc2020_website_logo_nobg.png";
import OfficerSection from "./components/OfficerSection.js";
import NavBar from "./components/NavBar.js";

function Body({ children }) {
  return (
    <Box flex="grow" pad="medium">
      {children}
    </Box>
  )
}

function NotHeader({ children, innerRef }) {
  return (
    <Box overflow="auto" ref={innerRef}>
      {children}
    </Box>
  )
}

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
        <NavBar isLightMode={isLightMode} scrollTop={scrollTop} setIsLightMode={setIsLightMode} />
        <NotHeader innerRef={innerRef} >
          <Body>
            <Landing />
            <Section title="Upcoming Events" id="events">
              <EventsSection />
            </Section>
            <Section title="Our Team" id="team">
              <OfficerSection />
            </Section>
          </Body>
          <Footer fill="horizontal" background="footer-background" flex="grow" pad="medium">
            <Box width="medium">
              <Image
                src={logo}
                fit="contain"
                fill="vertical"
                a11yTitle="UTD Girls Who Code logo"
              />
              <Heading textAlign="center" margin="none" level={2} color="black">UTD Girls Who Code</Heading>
            </Box>
          </Footer>
        </NotHeader>
      </Main>
    </Grommet>
  );
}

export default App;
