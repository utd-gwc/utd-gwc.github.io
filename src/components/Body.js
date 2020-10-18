import React from "react";
import { Box } from "grommet";

export default function Body({ innerRef, children }) {
  return (
    <Box as="body" overflow="auto" ref={innerRef} pad="medium">
      {children}
    </Box>
  );
}
