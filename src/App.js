import React, { useState } from "react";
import { Box, Grommet, Main } from "grommet";
import './styles/App.css'

import Section from "./components/Section.js";
import EventsSection from "./components/EventsSection.js";
import Background from "./components/Background.js";
import Landing from "./components/Landing.js";
import OfficerSection from "./components/OfficerSection.js";
import NavBar from "./components/NavBar.js";
import InstaFeed from "./components/InstaFeed.js";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";

import useComponentScroll from "./hooks/useComponentScroll.js";
import { lightTheme, darkTheme } from "./hooks/useGWCTheme.js";

function Body({ children }) {
  return (
    <Box flex="grow" pad="medium">
      {children}
    </Box>
  )
}

function NotHeader({ children, isLightMode, innerRef }) {
  return (
    <Box style={{ position: "relative", overflowY: "scroll" }} ref={innerRef} >
      <Background isLightMode={isLightMode} />
      <Box style={{ position: "relative" }} zIndex={999}>
        {children}
      </Box>
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
        <NotHeader isLightMode={isLightMode} innerRef={innerRef}>
          <Body>
            <Landing />
            <Section title="Upcoming Events" id="events">
              <EventsSection />
            </Section>
            <Section title="About Us" id="about">
              <AboutSection />
            </Section>
            <Section title="Our Team" id="team">
              <OfficerSection />
            </Section>
            <Section title="Follow Us" id="contact">
              <Box direction="row-responsive">
                <InstaFeed isLightMode={isLightMode} />
                <ContactSection isLightMode={isLightMode} />
              </Box>
            </Section>
          </Body>
          <FooterSection isLightMode={isLightMode}/>
        </NotHeader>
      </Main>
    </Grommet >
  );
}

export default App;
