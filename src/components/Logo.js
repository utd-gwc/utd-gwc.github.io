import React from "react";
import { Box, Image, defaultProps } from "grommet";

import logo from "./../static/gwc2020_website_logo_nobg.png";


export default function Logo({ scrollTop }) {
  const GLOBAL_SIZE_XSMALL = defaultProps.theme.global.size.xsmall.match(
    /\d+/
  )[0];
  const GLOBAL_SIZE_XXSMALL = defaultProps.theme.global.size.xxsmall.match(
    /\d+/
  )[0];
  return (
    <Box
      align="center"
      height={
        Math.max(GLOBAL_SIZE_XSMALL - scrollTop, GLOBAL_SIZE_XXSMALL) + "px"
      }
    >
      <Image
        src={logo}
        fit="contain"
        fill="vertical"
        a11yTitle="UTD Girls Who Code logo"
      />
    </Box>
  );
}
