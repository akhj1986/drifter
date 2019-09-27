import React from "react"

//This sets the styles theme of the website - light is the regular color scheme, dark is the high-contrast color scheme for accessibility purposes
export const themes = {
  light: {
    name: "light",
    background: "#ffffff",
    transluscent: true,
    text: "#555",
    siteTitle: "#222",
    header: "#fdd8dc",
    nav: "#F78693",
    footer: "rgba(134, 147, 247, 0.7)",
    footerText: "#1744E8",
    linkColor: "#d4fcf8",
    linkWeight: "222",
    aTagColor: "#000",
    button: {
      background: "#000",
      offset: "10px"
    }
  },
  dark: {
    name: "dark",
    background: "#000",
    transluscent: false,
    text: "#ffffff",
    siteTitle: "#ffffff",
    header2: "#f9909b",
    header: "#000",
    nav: "#FF0",
    footer: "#FF0",
    footerText: "#000",
    linkColor: "#000",
    linkWeight: "666",
    aTagColor: "#FF0",
    button: {
      background: "#000",
      offset: "10px"
    }
  }
}

//These following objects set the regular values for scale across the site for different screen sizes.
const mobileScaleValues = {
  fontSize: 15,
  navLink: 11,
  header2: 24,
  header3: 15,
  infoText: 15,
  smallInfo: 10,
  spacing: 2,
  lineHeight: 1.5
}

const largeScreenScaleValues = {
  fontSize: 18,
  navLink: 13,
  header2: 27,
  header3: 18,
  infoText: 18,
  smallInfo: 12,
  spacing: 2,
  lineHeight: 1.8
}

//This object sets the scale factors for resizing for accessibility purposes
const scaleFactors = {
  regularScale: 1,
  largeScale: 1.25,
  extraLargeScale: 1.5
}

//This function applies the scales to the different screen sizes

const applyScale = (scale, screenSize) => {
  return {
    fontSize: `${screenSize.fontSize * scale}px`,
    navLink: `${screenSize.navLink * scale}px`,
    header2: `${screenSize.header2 * scale}px`,
    header3: `${screenSize.header3 * scale}px`,
    infoText: `${screenSize.infoText * scale}px`,
    smallInfo: `${screenSize.smallInfo * scale}px`,
    spacing: `${screenSize.spacing * scale}px`,
    lineHeight: `${screenSize.lineHeight * scale}rem`
  }
}

//This export function puts together the screen sizes and the scale factors for access through context
export const scales = {
  regularMobile: applyScale(scaleFactors.regularScale, mobileScaleValues),
  largeMobile: applyScale(scaleFactors.largeScale, mobileScaleValues),
  extraLargeMobile: applyScale(scaleFactors.extraLargeScale, mobileScaleValues),
  regularLargeScreen: applyScale(
    scaleFactors.regularScale,
    largeScreenScaleValues
  ),
  largeLargeScreen: applyScale(scaleFactors.largeScale, largeScreenScaleValues),
  extraLargeLargeScreen: applyScale(
    scaleFactors.extraLargeScale,
    largeScreenScaleValues
  )
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
  scale: scales.regularMobile,
  plusScale: () => {},
  minusScale: () => {}
})
