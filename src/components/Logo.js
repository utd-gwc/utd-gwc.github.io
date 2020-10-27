import React from "react";
import { Box, Image, defaultProps, ResponsiveContext, Stack } from "grommet";

import logo from "./../static/gwc2020_website_logo_nobg.png";
import dark_mode_logo from './../static/gwc2020_DARK_website_logo_nobg.png';


export default function Logo({ scrollTop, theme }) {
  const GLOBAL_SIZE_XSMALL = defaultProps.theme.global.size.xsmall.match(
    /\d+/
  )[0];
  const GLOBAL_SIZE_XXSMALL = defaultProps.theme.global.size.xxsmall.match(
    /\d+/
  )[0];
  const size = React.useContext(ResponsiveContext);
  const showDarkLogo = theme==="dark" && scrollTop === 0
  return (
    <Box
      align="center"
      height={
        Math.max(GLOBAL_SIZE_XSMALL - scrollTop, GLOBAL_SIZE_XXSMALL) + "px"
      }
      style={{ transition: "height .05s ease" }}
      pad={{ left: size === "small" ? "large" : "none" }}
    >
      <Stack fill="vertical">
        <Image
          src={logo}
          style={{ transition: "opacity 0.2s ease-out", opacity: showDarkLogo ? 0 : 100 }}
          fit="contain"
          fill="vertical"
          a11yTitle="UTD Girls Who Code logo"
        />
        <Image
          src={dark_mode_logo}
          style={{ transition: "opacity 0.2s ease-in", opacity: showDarkLogo ? 100 : 0 }}
          fit="contain"
          fill="vertical"
          a11yTitle="UTD Girls Who Code logo"
        />
      </Stack>

    </Box>
  );
}
