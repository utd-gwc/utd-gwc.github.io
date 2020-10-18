import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grommet,
  Heading,
  Main,
  CheckBox,
  Stack,
  Header,
  Text,
  Image,
  defaultProps,
} from "grommet";
import useComponentScroll from "./hooks/useComponentScroll.js";
import { lightTheme, darkTheme } from "./hooks/useGWCTheme.js";

import logo from "./static/gwc2020_website_logo_nobg.png";

function App() {
  const [isLightMode, setIsLightMode] = React.useState(true);

  const GLOBAL_SIZE_XSMALL = defaultProps.theme.global.size.xsmall.match(
    /\d+/
  )[0];
  const GLOBAL_SIZE_XXSMALL = defaultProps.theme.global.size.xxsmall.match(
    /\d+/
  )[0];

  // set default value
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
        >
          <Box
            align="center"
            height={
              Math.max(GLOBAL_SIZE_XSMALL - scrollTop, GLOBAL_SIZE_XXSMALL) +
              "px"
            }
          >
            <Image
              src={logo}
              fit="contain"
              fill="vertical"
              a11yTitle="UTD Girls Who Code logo"
            />
          </Box>
          <Box justify="between" fill="horizontal" align="end">
            <CheckBox
              toggle
              onChange={() => {
                setIsLightMode(!isLightMode);
              }}
            />
          </Box>
        </Header>
        <Heading>{scrollTop}</Heading>
        <Box overflow="auto" ref={innerRef}>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
            return (
              <Heading level="1" margin="none">
                UTD Girls Who Code
              </Heading>
            );
          })}
        </Box>
      </Main>
    </Grommet>
  );
}

export default App;
