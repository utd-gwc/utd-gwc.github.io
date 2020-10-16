import React from "react";
import { Box, Grommet, Heading, Main, CheckBox, Paragraph, Header } from "grommet";

const font = {
  font: {
    family: "Roboto",
    size: "18px",
    height: "20px",
  },
};

const checkBox = {
  checkBox : {
    border : {
      color : {
        "dark": "neutral-1",
        "light": "neutral-1"
      }
    }
  }
}

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
      active: "neutral-4",
      focus: "neutral-1",
      white: "#ECEDF8",
      "background": "#ECEDF8"
    },
    ...font,
  },
  ...checkBox
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
      active: "neutral-3",
      focus: "neutral-1",
      white: "#ECEDF8",
      "background": "#1B3A5D"
    },
    ...font,
  },
  ...checkBox
};

function App() {
  const [isLightMode, setIsLightMode] = React.useState(true);
  return (
    <Grommet theme={isLightMode ? lightTheme : darkTheme} full>
      <Main>
        <Header pad={{ left: "medium", right: "small", vertical: "small"}}>
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
          </Box>
        </Header>
      </Main>
    </Grommet>
  );
}

export default App;
