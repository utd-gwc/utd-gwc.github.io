import React from "react";
import { Box, Image, ResponsiveContext } from "grommet";

import logo from "./../static/gwc2020_website_logo_nobg.png";


export default function Logo({ scrollTop }) {
  const size = React.useContext(ResponsiveContext);
  const isMobile = size === 'small';
  return (
    <Box
      align="center"
      height={isMobile ? "xxsmall" : scrollTop > 10 ? "xxsmall" : "xsmall"}
      style={{ transition: "height .5s ease" }}
      pad={{ left: isMobile ? "xlarge" : "none" }}
      animation="fadeIn"
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
