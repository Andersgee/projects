import { type Config } from "tailwindcss";
//import { fontFamily } from "tailwindcss/defaultTheme";
import { type ScreensConfig } from "tailwindcss/types/config";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

//https://tailwindcss.com/docs/configuration#scaffolding-the-entire-default-configuration

//https://tailwindcss.com/docs/screens
//make sure these values match what is in next.config.mjs
const DEVICE_SIZES: ScreensConfig = {
  "sm": "640px",
  "md": "768px",
  "lg": "1024px",
  "xl": "1280px",
  "2xl": "1536px",
};

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [],
  darkMode: "media",
  theme: {
    screens: DEVICE_SIZES,
    container: {
      screens: DEVICE_SIZES,
      //center: true,
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    colors: ({ colors }) => ({
      "red": colors.red, //debug :p
      "color-inherit": "inherit",
      "color-current": "currentColor",
      "color-transparent": "transparent",
      "color-unthemed-neutral": {
        "0": "#fff",
        ...colors.neutral,
        "1000": "#000",
      },
      "color-neutral": {
        "0": "hsl(var(--color-neutral-0))",
        "50": "hsl(var(--color-neutral-50))",
        "100": "hsl(var(--color-neutral-100))",
        "200": "hsl(var(--color-neutral-200))",
        "300": "hsl(var(--color-neutral-300))",
        "400": "hsl(var(--color-neutral-400))",
        "500": "hsl(var(--color-neutral-500))",
        "600": "hsl(var(--color-neutral-600))",
        "700": "hsl(var(--color-neutral-700))",
        "800": "hsl(var(--color-neutral-800))",
        "900": "hsl(var(--color-neutral-900))",
        "950": "hsl(var(--color-neutral-950))",
        "1000": "hsl(var(--color-neutral-1000))",
      },
      "color-primary": {
        "50": "hsl(var(--color-primary-50))",
        "100": "hsl(var(--color-primary-100))",
        "200": "hsl(var(--color-primary-200))",
        "300": "hsl(var(--color-primary-300))",
        "400": "hsl(var(--color-primary-400))",
        "500": "hsl(var(--color-primary-500))",
        "600": "hsl(var(--color-primary-600))",
        "700": "hsl(var(--color-primary-700))",
        "800": "hsl(var(--color-primary-800))",
        "900": "hsl(var(--color-primary-900))",
        "950": "hsl(var(--color-primary-950))",
      },
      "color-accent-highlight": {
        "50": "hsl(var(--color-accent-highlight-50))",
        "100": "hsl(var(--color-accent-highlight-100))",
        "200": "hsl(var(--color-accent-highlight-200))",
        "300": "hsl(var(--color-accent-highlight-300))",
        "400": "hsl(var(--color-accent-highlight-400))",
        "500": "hsl(var(--color-accent-highlight-500))",
        "600": "hsl(var(--color-accent-highlight-600))",
        "700": "hsl(var(--color-accent-highlight-700))",
        "800": "hsl(var(--color-accent-highlight-800))",
        "900": "hsl(var(--color-accent-highlight-900))",
        "950": "hsl(var(--color-accent-highlight-950))",
      },
      "color-accent-danger": {
        "50": "hsl(var(--color-accent-danger-50))",
        "100": "hsl(var(--color-accent-danger-100))",
        "200": "hsl(var(--color-accent-danger-200))",
        "300": "hsl(var(--color-accent-danger-300))",
        "400": "hsl(var(--color-accent-danger-400))",
        "500": "hsl(var(--color-accent-danger-500))",
        "600": "hsl(var(--color-accent-danger-600))",
        "700": "hsl(var(--color-accent-danger-700))",
        "800": "hsl(var(--color-accent-danger-800))",
        "900": "hsl(var(--color-accent-danger-900))",
        "950": "hsl(var(--color-accent-danger-950))",
      },
      "color-accent-warning": {
        "50": "hsl(var(--color-accent-warning-50))",
        "100": "hsl(var(--color-accent-warning-100))",
        "200": "hsl(var(--color-accent-warning-200))",
        "300": "hsl(var(--color-accent-warning-300))",
        "400": "hsl(var(--color-accent-warning-400))",
        "500": "hsl(var(--color-accent-warning-500))",
        "600": "hsl(var(--color-accent-warning-600))",
        "700": "hsl(var(--color-accent-warning-700))",
        "800": "hsl(var(--color-accent-warning-800))",
        "900": "hsl(var(--color-accent-warning-900))",
        "950": "hsl(var(--color-accent-warning-950))",
      },
      "color-accent-positive": {
        "50": "hsl(var(--color-accent-positive-50))",
        "100": "hsl(var(--color-accent-positive-100))",
        "200": "hsl(var(--color-accent-positive-200))",
        "300": "hsl(var(--color-accent-positive-300))",
        "400": "hsl(var(--color-accent-positive-400))",
        "500": "hsl(var(--color-accent-positive-500))",
        "600": "hsl(var(--color-accent-positive-600))",
        "700": "hsl(var(--color-accent-positive-700))",
        "800": "hsl(var(--color-accent-positive-800))",
        "900": "hsl(var(--color-accent-positive-900))",
        "950": "hsl(var(--color-accent-positive-950))",
      },
      "color-accent-focus": {
        "50": "hsl(var(--color-accent-focus-50))",
        "100": "hsl(var(--color-accent-focus-100))",
        "200": "hsl(var(--color-accent-focus-200))",
        "300": "hsl(var(--color-accent-focus-300))",
        "400": "hsl(var(--color-accent-focus-400))",
        "500": "hsl(var(--color-accent-focus-500))",
        "600": "hsl(var(--color-accent-focus-600))",
        "700": "hsl(var(--color-accent-focus-700))",
        "800": "hsl(var(--color-accent-focus-800))",
        "900": "hsl(var(--color-accent-focus-900))",
        "950": "hsl(var(--color-accent-focus-950))",
      },
    }),
    ringColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.color-accent-focus.500"),
    }),
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.color-neutral.200"),
    }),
    borderRadius: {
      none: "0px",
      sm: "calc(var(--radius) - 4px)",
      DEFAULT: "calc(var(--radius) - 4px)",
      md: "calc(var(--radius) - 2px)",
      lg: `var(--radius)`,
      full: "9999px",
    },
    //https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states
    aria: {
      busy: 'busy="true"',
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"',
    },
    //https://tailwindcss.com/docs/hover-focus-and-other-states#data-attributes
    data: {
      //https://www.radix-ui.com/primitives/docs/components/dropdown-menu
      "orientation-vertical": 'orientation="vertical"',
      "orientation-horizontal": 'orientation="horizontal"',
      "highlighted": "highlighted",
      "disabled": "disabled",
      "state-open": 'state="open"',
      "state-closed": 'state="closed"',
      "side-left": 'side="left"',
      "side-right": 'side="right"',
      "side-bottom": 'side="bottom"',
      "side-top": 'side="top"',
      "align-start": 'align="start"',
      "align-end": 'align="end"',
      "align-center": 'align="center"',
      //https://www.radix-ui.com/primitives/docs/components/checkbox
      "state-checked": 'state="checked"',
      "state-unchecked": 'state="unchecked"',
      "state-indeterminate": 'state="indeterminate"',

      //https://github.com/pacocoursey/cmdk#parts-and-styling
    },
    boxShadow: {
      "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      "DEFAULT": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      "xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      "none": "none",
      "imageborder": "inset 0 2px 4px 0 hsla(0, 0%, 0%, .2)",
      //"imageborder": "inset 0 0 0 1px hsla(0, 0%, 0%, .1)",
      //"button": "0 1px 3px hsl(var(--color-neutral-1000))",
      //"button": "0 1px 3px hsla(0, 0%, 0%, .2)",
    },
    animation: {
      "none": "none",
      "spin": "spin 1s linear infinite",
      "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "bounce": "bounce 1s infinite",
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "strokedraw": "strokedraw 2.5s cubic-bezier(0.33, 0.4, 0.96, 0.6) forwards",
    },
    keyframes: {
      "spin": { to: { transform: "rotate(360deg)" } },
      "ping": { "75%, 100%": { transform: "scale(2)", opacity: "0" } },
      "pulse": { "50%": { opacity: ".5" } },
      "bounce": {
        "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" },
        "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" },
      },
      "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
      "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      "strokedraw": { to: { strokeDashoffset: "0" } },
    },
    // UNTOUCHED BELOW HERE
    accentColor: ({ theme }) => ({
      ...theme("colors"),
      auto: "auto",
    }),
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
    },
    backdropBlur: ({ theme }) => theme("blur"),
    backdropBrightness: ({ theme }) => theme("brightness"),
    backdropContrast: ({ theme }) => theme("contrast"),
    backdropGrayscale: ({ theme }) => theme("grayscale"),
    backdropHueRotate: ({ theme }) => theme("hueRotate"),
    backdropInvert: ({ theme }) => theme("invert"),
    backdropOpacity: ({ theme }) => theme("opacity"),
    backdropSaturate: ({ theme }) => theme("saturate"),
    backdropSepia: ({ theme }) => theme("sepia"),
    backgroundColor: ({ theme }) => theme("colors"),
    backgroundImage: {
      "none": "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))",
    },
    backgroundOpacity: ({ theme }) => theme("opacity"),
    backgroundPosition: {
      "bottom": "bottom",
      "center": "center",
      "left": "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      "right": "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      "top": "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    blur: {
      0: "0",
      "none": "0",
      "sm": "4px",
      "DEFAULT": "8px",
      "md": "12px",
      "lg": "16px",
      "xl": "24px",
      "2xl": "40px",
      "3xl": "64px",
    },

    borderOpacity: ({ theme }) => theme("opacity"),

    borderSpacing: ({ theme }) => ({
      ...theme("spacing"),
    }),
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    boxShadowColor: ({ theme }) => theme("colors"),
    brightness: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    caretColor: ({ theme }) => theme("colors"),
    columns: {
      "auto": "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      "3xs": "16rem",
      "2xs": "18rem",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
    },
    content: {
      none: "none",
    },
    contrast: {
      0: "0",
      50: ".5",
      75: ".75",
      100: "1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    cursor: {
      "auto": "auto",
      "default": "default",
      "pointer": "pointer",
      "wait": "wait",
      "text": "text",
      "move": "move",
      "help": "help",
      "not-allowed": "not-allowed",
      "none": "none",
      "context-menu": "context-menu",
      "progress": "progress",
      "cell": "cell",
      "crosshair": "crosshair",
      "vertical-text": "vertical-text",
      "alias": "alias",
      "copy": "copy",
      "no-drop": "no-drop",
      "grab": "grab",
      "grabbing": "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out",
    },
    divideColor: ({ theme }) => theme("borderColor"),
    divideOpacity: ({ theme }) => theme("borderOpacity"),
    divideWidth: ({ theme }) => theme("borderWidth"),
    dropShadow: {
      "sm": "0 1px 1px rgb(0 0 0 / 0.05)",
      "DEFAULT": ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
      "md": ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      "lg": ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
      "xl": ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      "none": "0 0 #0000",
    },
    fill: ({ theme }) => ({
      none: "none",
      ...theme("colors"),
    }),
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexBasis: ({ theme }) => ({
      "auto": "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      "full": "100%",
    }),
    flexGrow: {
      0: "0",
      DEFAULT: "1",
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1",
    },
    fontSize: {
      "xs": ["0.75rem", { lineHeight: "1rem" }],
      "sm": ["0.875rem", { lineHeight: "1.25rem" }],
      "base": ["1rem", { lineHeight: "1.5rem" }],
      "lg": ["1.125rem", { lineHeight: "1.75rem" }],
      "xl": ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    gap: ({ theme }) => theme("spacing"),
    gradientColorStops: ({ theme }) => theme("colors"),
    gradientColorStopPositions: {
      "0%": "0%",
      "5%": "5%",
      "10%": "10%",
      "15%": "15%",
      "20%": "20%",
      "25%": "25%",
      "30%": "30%",
      "35%": "35%",
      "40%": "40%",
      "45%": "45%",
      "50%": "50%",
      "55%": "55%",
      "60%": "60%",
      "65%": "65%",
      "70%": "70%",
      "75%": "75%",
      "80%": "80%",
      "85%": "85%",
      "90%": "90%",
      "95%": "95%",
      "100%": "100%",
    },
    grayscale: {
      0: "0",
      DEFAULT: "100%",
    },
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridColumn: {
      "auto": "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1",
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    gridRow: {
      "auto": "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-full": "1 / -1",
    },
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
    },
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
    },
    gridTemplateColumns: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
    },
    gridTemplateRows: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
    },
    height: ({ theme }) => ({
      "auto": "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "full": "100%",
      "screen": "100vh",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content",
    }),
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg",
    },
    inset: ({ theme }) => ({
      "auto": "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "full": "100%",
    }),
    invert: {
      0: "0",
      DEFAULT: "100%",
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    listStyleImage: {
      none: "none",
    },
    margin: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
    }),
    lineClamp: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
    },
    maxHeight: ({ theme }) => ({
      ...theme("spacing"),
      none: "none",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      "none": "none",
      0: "0rem",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content",
      "prose": "65ch",
      ...breakpoints(theme("screens")),
    }),
    minHeight: {
      0: "0px",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
    },
    objectPosition: {
      "bottom": "bottom",
      "center": "center",
      "left": "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      "right": "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      "top": "top",
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      90: "0.9",
      95: "0.95",
      100: "1",
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
    },
    outlineColor: ({ theme }) => theme("colors"),
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    outlineWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    padding: ({ theme }) => theme("spacing"),
    placeholderColor: ({ theme }) => theme("colors"),
    placeholderOpacity: ({ theme }) => theme("opacity"),

    ringOffsetColor: ({ theme }) => theme("colors"),
    ringOffsetWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    ringOpacity: ({ theme }) => ({
      DEFAULT: "0.5",
      ...theme("opacity"),
    }),
    ringWidth: {
      DEFAULT: "3px",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    rotate: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
      45: "45deg",
      90: "90deg",
      180: "180deg",
    },
    saturate: {
      0: "0",
      50: ".5",
      100: "1",
      150: "1.5",
      200: "2",
    },
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
    },

    scrollMargin: ({ theme }) => ({
      ...theme("spacing"),
    }),
    scrollPadding: ({ theme }) => theme("spacing"),
    sepia: {
      0: "0",
      DEFAULT: "100%",
    },
    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
    },
    space: ({ theme }) => ({
      ...theme("spacing"),
    }),
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    stroke: ({ theme }) => ({
      none: "none",
      ...theme("colors"),
    }),
    strokeWidth: {
      0: "0",
      1: "1",
      2: "2",
    },
    supports: {},

    textColor: ({ theme }) => theme("colors"),
    textDecorationColor: ({ theme }) => theme("colors"),
    textDecorationThickness: {
      "auto": "auto",
      "from-font": "from-font",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    textIndent: ({ theme }) => ({
      ...theme("spacing"),
    }),
    textOpacity: ({ theme }) => theme("opacity"),
    textUnderlineOffset: {
      auto: "auto",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    transformOrigin: {
      "center": "center",
      "top": "top",
      "top-right": "top right",
      "right": "right",
      "bottom-right": "bottom right",
      "bottom": "bottom",
      "bottom-left": "bottom left",
      "left": "left",
      "top-left": "top left",
    },
    transitionDelay: {
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    transitionDuration: {
      DEFAULT: "150ms",
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT:
        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
    },
    transitionTimingFunction: {
      "DEFAULT": "cubic-bezier(0.4, 0, 0.2, 1)",
      "linear": "linear",
      "in": "cubic-bezier(0.4, 0, 1, 1)",
      "out": "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    translate: ({ theme }) => ({
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "full": "100%",
    }),
    width: ({ theme }) => ({
      "auto": "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      "full": "100%",
      "screen": "100vw",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content",
    }),
    willChange: {
      auto: "auto",
      scroll: "scroll-position",
      contents: "contents",
      transform: "transform",
    },
    zIndex: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
    },
  },
  //also edited
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities, addVariant }) => {
      //for radix ui to be able to style for keyboard navigation only (data-highlighted but not hovering)
      addVariant("nothover", ["&:not(:hover)"]);
      addUtilities({
        //https://tailwindcss.com/docs/outline-style#removing-outlines
        //set "outline-none" and use this instead in relevant places
        //for example "outline-none focus-visible:focusring"
        //or "outline-none data-highlighted:nothover:focusring"
        ".focusring": {
          "@apply ring-color-accent-focus-300 ring-offset-2 ring-offset-color-neutral-0 ring-2": {},
        },
      });
    }),
  ],
} satisfies Config;
