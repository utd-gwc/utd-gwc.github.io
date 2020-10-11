import React from "react";
import { Box, Grommet, Heading, Main, CheckBox, Paragraph } from "grommet";

const font = {
  font: {
    family: "Roboto",
    size: "18px",
    height: "20px",
  },
};

const lightTheme = {
  global: {
    colors: {
      brand: "#F794B9",
      "accent-1": "#002364",
      "neutral-1": "#1B3A5D",
      "accent-2": "#FFFFFF",
      "neutral-2": "#ECEDF8",
      "accent-3": "#FCC0C5",
      "neutral-3": "#B67186",
      "neutral-4": "#B84C65",
      active: "accent-3",
      focus: "accent-1",
      white: "#ECEDF8",
    },
    ...font,
  },
};

const darkTheme = {
  global: {
    colors: {
      brand: "#002364",
      "accent-1": "#F794B9",
      "neutral-1": "#B84C65",
      "accent-2": "#FCC0C5",
      "neutral-2": "#B67186",
      "accent-3": "#FFFFFF",
      "neutral-3": "#ECEDF8",
      "neutral-4": "#1B3A5D",
      active: "accent-1",
      focus: "accent-1",
      white: "#ECEDF8",
    },
    ...font,
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  const [isLightMode, setIsLightMode] = React.useState(true);
  return (
    <Grommet theme={isLightMode ? lightTheme : darkTheme} full>
      <Main>
        <AppBar>
          <Heading level="3" margin="none">
            UTD Girls Who Code!
          </Heading>
          <Box
            justify="between"
            align="center"
          >
            <CheckBox
              toggle
              onChange={() => {
                setIsLightMode(!isLightMode);
              }}
            />
            <Paragraph level="4" margin="none" >
              {isLightMode ? "Dark Mode" : "Light Mode"}
            </Paragraph>
          </Box>
        </AppBar>
      </Main>
    </Grommet>
  );
}

export default App;
