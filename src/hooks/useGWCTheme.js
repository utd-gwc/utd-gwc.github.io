const font = {
  font: {
    family: "Roboto",
    size: "18px",
    height: "20px",
  },
};

const checkBox = {
  checkBox: {
    border: {
      color: {
        dark: "neutral-1",
        light: "neutral-1",
      },
    },
    hover: {
      border: {
        color: {
          dark: "white",
          light: "brand",
        },
      },
    },
    toggle: {
      background: {
        dark: "neutral-1",
        light: "neutral-1",
      },
    },
  },
};

const elevation = {
  elevation: {
    light: {
      none: "none",
      xsmall: "0px 1px 2px rgba(27, 58, 93, 0.2)",
      small: "0px 2px 4px rgba(27, 58, 93, 0.2)",
      medium: "0px 4px 8px rgba(27, 58, 93, 0.2)",
      large: "0px 8px 16px rgba(27, 58, 93, 0.2)",
      xlarge: "0px 12px 24px rgba(27, 58, 93, 0.2)",
    },
    dark: {
      none: "none",
      xsmall: "none",
      small: "none",
      medium: "none",
      large: "none",
      xlarge: "none",
    },
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
      active: "accent-2",
      focus: "neutral-1",
      white: "#ECEDF8",
      background: "#ECEDF8",
      "card-background": "accent-2",
      "card-footer": "accent-3",
      "icon-color": "neutral-3",

      "code-keyword": "neutral-3",
      "code-variable": "neutral-1",
      "code-function": "neutral-4",
      "code-string": "accent-3",

      "button-primary": "accent-3",
      "button-hover": "accent-2",

      "footer-background": "neutral-3",
    },
    ...font,
    ...elevation,
  },
  ...checkBox,
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
      active: "neutral-1",
      focus: "neutral-1",
      white: "#ECEDF8",
      background: "#1B3A5D",
      "card-background": "#224975",
      "card-footer": "accent-3",
      "icon-color": "brand",
      
      "code-keyword": "accent-2",
      "code-variable": "neutral-1",
      "code-function": "neutral-2",
      "code-string": "accent-1",

      "button-primary": "accent-3",
      "button-hover": "accent-2",

      "footer-background": "card-background",
    },
    ...font,
    ...elevation,
  },
  ...checkBox,
};

export { lightTheme, darkTheme };
