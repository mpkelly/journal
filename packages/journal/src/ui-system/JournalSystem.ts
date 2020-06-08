import { System } from "@mpkelly/siam";
import { Icons } from "./Icons";
import { Labels } from "./EnglishLabels";

export const LightTheme = {
  accent: "#22c3a7",
  muted: "#ccc",
  content: "white",
  "primary.text": "rgba(0,0,0,.95)",
  "secondary.text": "rgba(0,0,0,.6)",
  "light.text": "rgba(255,255,255,.95)",
  danger: "orangered",
  background: "#f1f1f1",
  dividers: "rgba(255,255,255,.4)",
  collection: "#bfd664",
  document: "#3c9cdb",
  wikipage: "lightpink",
  folder: "muted",
  nav: {
    background: "background-light1",
  },
  toolbar: {
    muted: "accent",
    "primary.text": "white",
  },
};

export const DarkTheme = {
  accent: "#22c3a7",
  muted: "#50504a",
  content: "#272a31",
  "primary.text": "rgba(255,255,255,.95)",
  "secondary.text": "rgba(255,255,255,.6)",
  "light.text": "rgba(255,255,255,.95)",
  danger: "orangered",
  background: "#272a31",
  dividers: "rgba(0,0,0,.4)",
  collection: "#bfd664",
  document: "#3c9cdb",
  wikipage: "lightpink",
  folder: "muted",
  toolbar: {
    muted: "accent",
    "primary.text": "white",
  },
};

export const JournalSystem: System = {
  colors: DarkTheme,
  text: {
    base: {
      fontFamily: "'Noto Sans TC', sans-serif",
      code: {
        selector: "code",
        color: "accent",
      },
    },
    small: {
      extends: ["text.base"],
      color: "primary.text",
      fontSize: 12,
    },
    regular: {
      default: true,
      extends: ["text.base"],
      color: "primary.text",
      fontSize: 14,
    },
    large: {
      extends: ["text.base"],
      color: "primary.text",
      fontSize: 18,
    },
    xlarge: {
      extends: ["text.base"],
      color: "primary.text",
      fontSize: 22,
    },
    xxlarge: {
      extends: ["text.base"],
      color: "primary.text",
      fontSize: 36,
    },
    label: {
      extends: ["text.small"],
      color: "secondary.text",
      fontWeight: "bold",
    },
  },
  icons: Icons,
  labels: Labels,
  direction: "ltr",
  breakpoints: {
    sm: 500,
    md: 900,
    lg: 1200,
  },
  spacing: {
    xxs: 1,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
    xxl: 64,
  },
  radii: {
    sm: 2,
    md: 4,
    lg: 6,
    round: 99999999,
  },
  shadows: {
    sm: "0 2px 2px 1px rgba(0,0,0,.1)",
    editor: "0 1px 3px 1px rgba(60, 64, 67, 0.15)",
  },
  layers: {
    popup: 10,
    dialogs: 1000000,
    tooltips: 100000000,
  },
  components: {
    editableText: {
      primary: {
        outline: "none",
        border: "2px solid transparent",
        focusBorder: "2px solid accent",
        hoverBackgroundColor: "muted-alpha20",
        disabledBackgroundColor: "transparent",
      },
      disabled: {},
    },
    icon: {
      base: {
        display: "inline-flex",
        gravity: 5,
        fontFamily: "Material Icons Round",
        fontSize: 24,
        color: "primary.text",
        borderRadius: "round",
      },
      regular: {
        extends: ["components.icon.base"],
        size: "auto",
        default: true,
      },
      xsmall: {
        extends: ["components.icon.base"],
        fontSize: 16,
      },
      small: {
        extends: ["components.icon.base"],
        fontSize: 20,
      },
      large: {
        extends: ["components.icon.regular"],
        fontSize: 36,
      },
      xlarge: {
        extends: ["components.icon.regular"],
        fontSize: 48,
      },
      primary: {
        extends: ["components.icon.base"],
        color: "light.text",
        backgroundColor: "accent",
      },
      muted: {
        extends: ["components.icon.base"],
        backgroundColor: "muted",
      },
      button: {
        extends: ["components.icon.base"],
        hoverBackgroundColor: "muted-alpha30",
        hoverColor: "m",
        cursor: "pointer",
        size: 40,
      },
      "small.button": {
        extends: ["components.icon.button"],
        fontSize: 20,
        size: 24,
      },
      "xsmall.button": {
        extends: ["components.icon.button"],
        fontSize: 12,
        size: 26,
      },
    },
    button: {
      base: {
        fontSize: 16,
        outline: "none",
        focusOutline: "none",
        border: "none",
        height: 40,
        cursor: "pointer",
        px: "lg",
        color: "white",
        borderRadius: "md",
        gravity: "center",
      },
      primary: {
        extends: ["components.button.base"],
        default: true,
        backgroundColor: "accent",
        hoverBackgroundColor: "accent-alpha50",
        focusBackgroundColor: "accent-dark1",
        activeBackgroundColor: "accent-dark2",
      },
      muted: {
        extends: ["components.button.base"],
        default: true,
        backgroundColor: "muted",
        hoverBackgroundColor: "muted-alpha50",
        focusBackgroundColor: "muted-dark1",
        activeBackgroundColor: "muted-dark2",
      },
      danger: {
        extends: ["components.button.base"],
        backgroundColor: "danger",
        hoverBackgroundColor: "danger-alpha50",
        focusBackgroundColor: "danger-dark1",
        activeBackgroundColor: "danger-dark2",
      },
      text: {
        extends: ["components.button.base"],
        backgroundColor: "transparent",
        hoverBackgroundColor: "muted-alpha20",
        focusBackgroundColor: "muted-alpha30",
        activeBackgroundColor: "muted-alpha40",
      },
    },
    checkbox: {
      base: {
        size: 20,
        borderRadius: "sm",
        label: {
          selector: "label",
          height: 20,
        },
        "si-checkbox": {
          borderStyle: "solid",
          borderRadius: "sm",
          borderWidth: 2,
          size: 20,
          cursor: "pointer",
        },
        "si-check-svg": {
          size: 20,
        },
        "si-check-mark": {
          stroke: "white",
        },
      },
      primary: {
        default: true,
        extends: ["components.checkbox.base"],
        "si-checkbox": {
          checkedBackgroundColor: "accent",
          borderColor: "accent",
        },
        focusBoxShadow: "0 0 0 3px accent-alpha50",
      },
    },
    radio: {
      base: {
        size: 18,
        borderRadius: "round",
        cursor: "pointer",
        "si-radio-outer": {
          padding: 2,
          flexShrink: 0,
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: "round",
          justifyContent: "center",
          alignItems: "center",
        },
        "si-radio-inner": {
          size: 10,
          flexShrink: 0,
          borderRadius: "round",
        },
      },
      primary: {
        extends: ["components.radio.base"],
        default: true,
        "si-radio-outer": {
          borderColor: "accent",
        },
        "si-radio-inner": {
          checkedBackgroundColor: "accent",
        },
        focusBoxShadow: "0 0 0 3px accent-alpha50",
      },
      danger: {
        extends: ["components.radio.base"],
        "si-radio-outer": {
          borderColor: "danger",
        },
        "si-radio-inner": {
          checkedBackgroundColor: "danger",
        },
        focusBoxShadow: "0 0 0 3px danger-alpha50",
      },
    },
    select: {
      primary: {
        position: "relative",
        color: "content",
        overflow: "visible",
        button: {
          selector: "button",
          padding: 8,
          width: "100%",
        },
        "si-menu": {
          zIndex: "popup",
        },
      },
    },

    menu: {
      primary: {
        position: "relative",
        "si-menu-items": {
          backgroundColor: "content",
          borderRadius: "sm",
          boxShadow: "sm",
          zIndex: "popup",
          width: "auto",
        },
      },
    },
    menuItem: {
      primary: {
        gravity: 4,
        padding: "md",
        cursor: "pointer",
        height: 36,
        whiteSpace: "nowrap",
        width: "100%",
        hoverBackgroundColor: "muted-alpha50",
        "si-menu-item-checkbox": {
          mt: 2,
        },
        "si-menu-item-icon": {
          extends: ["icons.base"],
          backgroundColor: "transparent",
          fontSize: 20,
          size: "auto",
        },
        "si-menu-item-text": {
          extends: ["text.small"],
          ml: "lg",
        },
      },
    },
    switch: {
      primary: {
        cursor: "pointer",
        "si-switch-track": {
          borderRadius: 9999,
          alignItems: "center",
          width: 36,
          height: 9,
          backgroundColor: "muted",
          checkedBackgroundColor: "accent",
        },
        "si-switch-thumb": {
          borderRadius: "50%",
          size: 20,
          backgroundColor: "muted",
          checkedBackgroundColor: "accent-dark1",
          checkedMarginLeft: 18,
          flexShrink: 0,
          transition: "all .3s",
          boxShadow: "sm",
        },
      },
    },
    input: {
      primary: {
        "si-input-wrapper": {
          borderStyle: "solid",
          borderColor: "muted",
          borderWidth: 2,
          focusBorderColor: "accent",
          borderRadius: "sm",
          height: 40,
        },
        "si-input-label": {
          extends: ["text.label"],
          mb: "sm",
        },
        "si-input": {
          padding: 8,
          extends: ["text.regular"],
        },
      },
      search: {
        focusFlexGrow: 1,
        "si-input-wrapper": {
          border: "none",
          alignItems: "center",
          height: 36,
          borderBottom: "1px solid muted",
          borderWidth: 1,
          focusBorderColor: "accent",
          borderRadius: "sm",
          p: "sm",
        },
        "si-input-left": {
          extends: ["components.icon.small"],
          mr: "md",
        },
        "si-input": {
          extends: ["text.regular"],
        },
      },
      textarea: {
        extends: ["components.input.primary"],
        "si-input-wrapper": {
          borderStyle: "solid",
          borderColor: "muted",
          borderWidth: 2,
          focusBorderColor: "accent",
          borderRadius: "sm",
          height: "auto",
        },
      },
    },
    label: {
      primary: {
        extends: ["text.small"],
        padding: 3,
        display: "inline-flex",
        borderRadius: "sm",
        letterSpacing: 0.8,
        fontWeight: "bold",
        color: "accent",
        backgroundColor: "accent-alpha15",
      },
      beta: {
        extends: ["components.label.primary"],
        backgroundColor: "orange",
        color: "light.text",
        fontSize: 9,
        padding: 2,
      },
    },
    badge: {
      primary: {
        display: "inline-flex",
        gravity: 5,
        extends: ["text.small"],
        padding: 3,
        borderRadius: "round",
        width: "auto",
        minWidth: 20,
        color: "content",
        letterSpacing: 0.8,
        fontWeight: "bold",
        backgroundColor: "accent",
      },
    },
    tooltip: {
      primary: {
        gravity: 1,
        flexGrow: 0,
        width: "auto",
        extends: ["text.small"],
        backgroundColor: "rgba(0,0,0,.8)",
        color: "white",
        borderRadius: "md",
        padding: 4,
        zIndex: "tooltips",
      },
    },
    slider: {
      primary: {
        position: "relative",
        gravity: 4,
        height: 6,
        width: 150,
        flexShrink: 0,
        borderRadius: "sm",
        backgroundColor: "muted",
        "si-slider-thumb": {
          position: "absolute",
        },
        "si-slider-track": {
          position: "absolute",
          cursor: "pointer",
          height: "100%",
          width: "100%",
        },
      },
    },
    table: {
      primary: {
        borderSpacing: 0,
        borderCollapse: "collapse",
        "header-row": {},
        "header-cell": {
          cellpadding: 0,
        },
        row: {
          hoverBackgroundColor: "muted-alpha20",
        },
        cell: {
          cellpadding: 0,
          py: "md",
          height: 40,
        },
        firstcell: {
          selector: "tr td:first-child",
          pl: "sm",
        },
        lastcell: {
          selector: ".cell:last-child",
          textAlign: "right",
        },
      },
    },
    tree: {
      primary: {
        items: {
          selector: "[data-rt-drop-valid=true]",
          backgroundColor: "muted-alpha20",
        },
      },
    },
  },
};
