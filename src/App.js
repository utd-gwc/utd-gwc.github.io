import React, { useState } from "react";
import { Box, Grommet, Main, CheckBox, Header, Footer, Heading, Image } from "grommet";
import Logo from "./components/Logo.js";
import Section from "./components/Section.js";
import EventsSection from "./components/EventsSection.js";

import useComponentScroll from "./hooks/useComponentScroll.js";
import { lightTheme, darkTheme } from "./hooks/useGWCTheme.js";
import Landing from "./components/Landing.js";

import logo from "./static/gwc2020_website_logo_nobg.png";
import OfficerSection from "./components/OfficerSection.js";

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
        <Header
          pad={{ left: "medium", right: "small", vertical: "small" }}
          elevation="xsmall"
          background={scrollTop === 0 ? "background" : "neutral-3"}
          style={{ transition: "background-color .4s" }}
        >
          <Logo scrollTop={scrollTop} theme={isLightMode ? "light" : "dark"} />
          <Box justify="between" fill="horizontal" align="end">
            <CheckBox
              toggle
              onChange={() => {
                setIsLightMode(!isLightMode);
              }}
            />
          </Box>
        </Header>
        <NotHeader innerRef={innerRef} >
          <Body>
            <Landing />
            <Section title="Upcoming Events">
              <EventsSection />
            </Section>
            <Section title="Our Team">
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
