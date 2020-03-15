import { System, DefaultSystem, clone } from "udx-core";
import {
  WeekdaySelector,
  DaySelector,
  ClickableDaySelector,
  WeekNumberSelector,
  TodaySelector,
  OutsideDaySelector,
  SelectedDaySelector,
  RangeStartSelector,
  RangeSelector,
  RangeEndSelector,
  ControlSelector,
  IndicatorSeparatorSelector,
  PlaceholderSelector,
  MultiValueSelector,
  MenuSelector,
  MenuTextSelector,
  MenuItemSelectedSelector,
  MenuItemHoverSelector,
  ContainerSelector,
  MenuItemFocusedSelector
} from "udx-react";
import { Unicons, MaterialIconsOutline, MaterialIconsRegular } from "udx-icons";

export const StyleSystem: System = {
  ...DefaultSystem,
  defaults: {
    "components.flex": "regular",
    "components.buttons": "primary",
    "components.switches": "primary",
    "components.labels": "primary",
    "components.badges": "primary",
    "components.inputs": "primary",
    "components.radios": "primary",
    "components.checkboxes": "primary",
    "components.menus": "primary",
    icons: "regular",
    text: "regular",
    "components.tooltips": "primary"
  },
  shadows: ["0 2px 2px rgba(0,0,0,.1)", "0 6px 5px 2px rgba(0,0,0,.2)"],
  colors: {
    primary: "#4C5ADE",
    brand: "#2D2A4A",
    secondary: "#908f8f",
    danger: "orange",
    error: "orangered",
    muted: "#C7C7C7",
    selected: "rgba(0,0,0,.1)",
    background: "#F3F3F3",
    content_background: "white",
    primaryText: "#2D2A4A",
    secondaryText: "primaryText.A500",
    lightText: "rgba(255,255,255,.9)",
    dividers: "muted.A400",
    nav_background: "brand",
    nav_primaryText: "lightText",
    nav_secondaryText: "rgba(255,255,255,.54)",
    nav_selected: "rgba(255,255,255,.1)"
  },
  text: {
    paragraph: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 400,
      color: "primaryText"
    },
    small: {
      extends: ["text.paragraph"],
      fontSize: 12
    },
    regular: {
      extends: ["text.paragraph"],
      fontSize: 14
    },
    large: {
      extends: ["text.paragraph"],
      fontSize: 20
    },
    xlarge: {
      extends: ["text.paragraph"],
      fontSize: 24
    },
    xxlarge: {
      extends: ["text.paragraph"],
      fontSize: 48
    },
    fieldLabel: {
      extends: ["text.paragraph"],
      fontWeight: "bold",
      mb: "sm"
    },
    editable: {
      extends: ["text.regular"],
      border: "1px solid transparent",
      hoverBorder: "1px solid primary",
      transition: "all .5s"
    },
    label: {
      extends: ["text.small"],
      textTransform: "uppercase",
      mb: "lg"
    },
    h1: {
      extends: ["text.regular"],
      fontWeight: 600,
      fontSize: 20,
      m: 0,
      mb: "lg"
    },
    h2: {
      extends: ["text.h1"],
      fontSize: 18,
      mb: "lg"
    }
  },
  icons: {
    regular: {
      fontFamily: "uil",
      color: "primaryText",
      lineHeight: 1
    },
    small: {
      extends: ["icons.regular"],
      fontSize: "16px !important"
    },
    xlarge: {
      extends: ["icons.regular"],
      fontSize: "64px !important"
    },
    xxlarge: {
      extends: ["icons.regular"],
      fontSize: "100px !important"
    },
    solid: {
      extends: ["icons.regular"],
      borderRadius: 12,
      height: 36,
      width: 36,
      size: 24,
      color: "secondary.A300",
      backgroundColor: "dark.A500",
      borderColor: "dark.A100",
      borderWidth: 0,
      hoverBackgroundColor: "primary"
    }
  },
  components: {
    buttons: {
      base: {
        extends: ["text.regular"],
        outline: "none",
        focusOutline: "none",
        border: "none",
        height: 40,
        cursor: "pointer",
        px: "lg",
        color: "white",
        borderRadius: "sm"
      },
      primary: {
        extends: ["components.buttons.base"],
        backgroundColor: "primary",
        focusBackgroundColor: "primary.D100",
        hoverBackgroundColor: "primary.D50",
        activeBackgroundColor: "primary.L10"
      },
      "primary.small": {
        extends: ["components.buttons.primary"],
        height: 32
      },
      danger: {
        extends: ["components.buttons.base"],
        backgroundColor: "orange",
        focusBackgroundColor: "orange.D100",
        hoverBackgroundColor: "orange.D50",
        activeBackgroundColor: "orange.L10"
      },
      muted: {
        extends: ["components.buttons.base"],
        backgroundColor: "muted.A500",
        hoverBackgroundColor: "muted.D10",
        focusBackgroundColor: "muted.D50",
        activeBackgroundColor: "muted.L10",
        color: "primaryText"
      }
    },
    switches: {
      primary: {
        cursor: "pointer",
        track: {
          borderRadius: 9999,
          alignItems: "center",
          width: 40,
          height: 9,
          backgroundColor: "muted"
        },
        thumb: {
          borderRadius: "50%",
          size: 20,
          backgroundColor: "primary",
          checkedMarginLeft: 20,
          flexShrink: 0,
          transition: "all .5s",
          boxShadow: "1px 1px 2px rgba(0,0,0,.1)"
        }
      }
    },
    labels: {
      base: {
        extends: ["text.regular"],
        textTransform: "uppercase",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: 1.2,
        padding: "2px 4px",
        borderRadius: "xs"
      },
      primary: {
        extends: ["components.labels.base"],
        backgroundColor: "primary",
        color: "white"
      },
      tag: {
        extends: ["components.labels.base"],
        backgroundColor: "muted.L50",
        color: "primaryText"
      },
      muted: {
        extends: ["components.labels.base"],
        backgroundColor: "muted.L100",
        fontWeight: "normal",
        color: "primaryText"
      }
    },
    badges: {
      base: {
        extends: ["text.regular"],
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 1.2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "round",
        width: 0,
        flexGrow: 1,
        minWidth: 19,
        padding: 3
      },
      primary: {
        extends: ["components.badges.base"],
        backgroundColor: "primary",
        color: "white"
      },
      danger: {
        extends: ["components.badges.base"],
        backgroundColor: "danger",
        color: "white"
      }
    },
    radios: {
      base: {
        size: 18,
        borderRadius: "round",
        cursor: "pointer",
        outer: {
          padding: 2,
          flexShrink: 0,
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: "round",
          justifyContent: "center",
          alignItems: "center"
        },
        inner: {
          size: 10,
          flexShrink: 0,
          borderRadius: "round"
        }
      },
      primary: {
        extends: ["components.radios.base"],
        outer: {
          borderColor: "primary"
        },
        inner: {
          checkedBackgroundColor: "primary"
        },
        focusBoxShadow: "0 0 0 3px primary.A500"
      },
      danger: {
        extends: ["components.radios.base"],
        outer: {
          borderColor: "danger"
        },
        inner: {
          checkedBackgroundColor: "danger"
        },
        focusBoxShadow: "0 0 0 3px danger.A500"
      }
    },
    checkboxes: {
      base: {
        size: 20,
        borderRadius: "xs",
        checkbox: {
          borderStyle: "solid",
          borderRadius: "xs",
          borderWidth: 2,
          size: 20,
          cursor: "pointer"
        },
        checkSvg: {
          size: 20
        },
        check: {
          display: "none",
          stroke: "white",
          checkedDisplay: "inline"
        }
      },
      primary: {
        extends: ["components.checkboxes.base"],
        checkbox: {
          checkedBackgroundColor: "primary",
          borderColor: "muted",
          checkedBorderColor: "primary"
        },
        focusBoxShadow: "0 0 0 3px primary.A500"
      },
      danger: {
        extends: ["components.checkboxes.base"],
        checkbox: {
          checkedBackgroundColor: "danger",
          borderColor: "danger"
        },
        focusBoxShadow: "0 0 0 3px danger.A500"
      }
    },
    sliders: {
      primary: {
        width: "100%",
        borderRadius: "md",
        alignItems: "center",
        track: {
          backgroundColor: "muted",
          boxShadow: "0 2px 2px 2px rgba(0,0,0,.1) inset",
          height: 7,
          borderRadius: "md",
          position: "relative",
          width: "100%",
          alignItems: "center"
        },
        activeTrack: {
          backgroundColor: "primary",
          position: "absolute",
          height: "100%",
          mt: 0
        },
        thumb: {
          size: 13,
          borderRadius: "round",
          backgroundColor: "white",
          boxShadow: "0 2px 2px 2px rgba(0,0,0,.1)",
          ml: -6,
          cursor: "pointer"
        }
      }
    },
    flex: {
      regular: {}
    },
    menus: {
      primary: {
        cursor: "pointer",
        width: "auto",
        minWidth: 100,
        border: "1px solid muted",
        boxShadow: "0 2px 2px rgba(0,0,0,.1)",
        item: {
          p: "md",
          selectedColor: "white",
          backgroundColor: "white",
          selectedBackgroundColor: "primary",
          hoverBackgroundColor: "muted"
        },
        itemText: {
          extends: ["text.small"]
        },
        icon: {
          extends: [],
          mr: "md",
          color: "secondaryText"
        }
      }
    },
    datepickers: {
      default: {
        extends: ["text.regular"],
        weekday: {
          selector: WeekdaySelector,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "secondary"
        },
        dayTextStyle: {
          selector: DaySelector,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 30,
          minHeight: 30,
          width: 30,
          height: 30,
          maxWidth: 30,
          maxHeight: 30,
          borderRadius: 0
        },
        clickableDayStyle: {
          selector: ClickableDaySelector,
          hoverBackgroundColor: "muted",
          activeBackgroundColor: "muted",
          focusBackgroundColor: "muted"
        },
        todayTextStyle: {
          selector: TodaySelector,
          color: "dark",
          backgroundColor: "muted"
        },
        weekNumberTextStyle: {
          selector: WeekNumberSelector,
          color: "secondary"
        },
        outsideDayTextStyle: {
          selector: OutsideDaySelector,
          color: "secondary"
        },
        selectedTextStyle: {
          selector: SelectedDaySelector,
          color: "white",
          backgroundColor: "primary"
        },
        rangeStartTextStyle: {
          selector: RangeStartSelector,
          backgroundColor: "primary",
          color: "white",
          borderTopLeftRadius: "50%",
          borderBottomLeftRadius: "50%"
        },
        rangeDayTextStyle: {
          selector: RangeSelector,
          backgroundColor: "primary.A100",
          color: "primary"
        },
        rangeEndTextStyle: {
          selector: RangeEndSelector,
          backgroundColor: "primary",
          color: "white",
          borderTopRightRadius: "50%",
          borderBottomRightRadius: "50%"
        }
      }
    },
    selects: {
      primary: {
        height: 42,
        width: "100%",
        container: {
          selector: ContainerSelector,
          width: "100%"
        },
        control: {
          extends: ["text.regular"],
          width: "100%",
          selector: ControlSelector,
          outline: "none",
          boxShadow: "none",
          height: "100%",
          borderWidth: 2,
          borderColor: "muted",
          hoverBorderColor: "muted.D300",
          activeBorderColor: "primary",
          focusBorderColor: "primary"
        },
        indicator: {
          selector: IndicatorSeparatorSelector
        },
        placeholder: {
          selector: PlaceholderSelector,
          extends: ["text.regular"]
        },
        multiValue: {
          selector: MultiValueSelector,
          backgroundColor: "muted",
          cursor: "pointer",
          extends: ["text.small"]
        },
        menu: {
          selector: MenuSelector,
          borderWidth: 1,
          borderColor: "muted",
          borderRadius: 3
        },
        menuText: {
          selector: MenuTextSelector,
          extends: ["text.regular"]
        },
        menuFocused: {
          selector: MenuItemFocusedSelector,
          backgroundColor: "primary.A200"
        },
        menuSelected: {
          selector: MenuItemSelectedSelector,
          backgroundColor: "primary",
          color: "white"
        },
        menuHover: {
          selector: MenuItemHoverSelector,
          backgroundColor: "primary.A200"
        }
      }
    },
    lineprogresses: {
      primary: {
        trail: {
          strokeColor: "muted",
          width: 2
        },
        progress: {
          strokeColor: ["primary", "danger", "red"],
          width: 10,
          strokeLinecap: "square"
        }
      }
    },
    circularprogresses: {
      primary: {
        size: 50,
        trail: {
          strokeColor: "muted",
          width: 2
        },
        progress: {
          strokeColor: "primary",
          width: 10,
          strokeLinecap: "square"
        }
      }
    },
    controlgroups: {
      inputs: {
        offsets: {
          selector: "> *:not(:first-child)",
          marginLeft: -2
        }
      },
      buttons: {
        width: "100%",
        dividers: {
          selector: "> *:not(:last-child)",
          borderRightStyle: "solid",
          borderRightColor: "muted",
          borderRightWidth: 2
        },
        children: {
          selector: "* >",
          flexGrow: 1,
          flexShrink: 0
        }
      }
    },
    tabbars: {
      primary: {
        tab: {
          cursor: "pointer",
          extends: ["text.regular"],
          minWidth: 120,
          p: 8,
          color: "secondaryText",
          borderRadius: "sm"
        },
        tabSelected: {
          fontWeight: "bold",
          color: "primaryText",
          backgroundColor: "selected"
        },
        tabName: {
          color: "inherit",
          fontWeight: "inherit"
        },
        tabIcon: {
          color: "inherit",
          marginRight: "sm"
        }
      }
    },
    pickers: {
      primary: {
        button: {
          extends: ["components.buttons.primary"]
        },
        menu: {
          extends: ["components.menus.primary"]
        }
      },
      muted: {
        button: {
          extends: ["components.buttons.muted"],
          borderRadius: "sm",
          size: "auto",
          fontWeight: "bold",
          p: "sm",
          px: "lg"
        },
        menu: {
          extends: ["components.menus.primary"]
        }
      }
    },
    inputs: {
      primary: {
        inputWrapper: {
          borderStyle: "solid",
          borderColor: "dividers",
          borderWidth: 2,
          focusOutlineWidth: 2,
          focusBorder: "2px solid primary",
          borderRadius: "sm",
          height: 40
        },
        input: {
          padding: 8
        },
        label: {
          extends: ["text.fieldLabel"]
        }
      }
    },
    tooltips: {
      primary: {
        backgroundColor: "dark",
        padding: 8,
        text: {
          selector: ".tooltip-text",
          color: "white",
          extends: ["text.small"]
        }
      },
      light: {
        backgroundColor: "white",
        border: "1px solid muted",
        padding: 8,
        text: {
          selector: ".tooltip-text",
          color: "dark",
          extends: ["text.small"]
        }
      }
    }
  },
  langBundle: {
    siam: "Siam",
    images: "Images",
    video: "Videos",
    text: "Text",
    somethingWentWrong: "Something went wrong",
    unexpectedError:
      "We weren't able to complete your last request. If this problem persists then please report this issue.",
    wikiNameDescription:
      "The name of your wiki as displayed in the top-left of the page"
  },
  iconSets: [MaterialIconsOutline, MaterialIconsRegular, Unicons]
};
