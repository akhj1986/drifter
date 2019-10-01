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
  outerPadding: "0 50px",
  headerHeight: 150,
  headerMargin: "0 0 50px",
  titleMargin: "60px 0 0 50px",
  navPadding: "10px 0 10px 50px",
  navBarHeight: 31,
  siteTitleFontSize: "34px",
  fontSize: 15,
  navLink: 11,
  navLinkMargin: "0 20px 0 0",
  header2: 24,
  header3: 15,
  infoText: 15,
  smallInfo: 10,
  footerText: 10,
  spacing: 2,
  lineHeight: 1.5,
  searchHeight: "31px",
  searchWidth: "auto"
}

const mediumScaleValues = {
  outerPadding: "0 80px",
  headerHeight: 150,
  headerMargin: "0 0 50px",
  titleMargin: "50px 0 0 80px",
  navPadding: "10px 0 10px 80px",
  navBarHeight: 31,
  siteTitleFontSize: "40px",
  fontSize: 15,
  navLink: 11,
  navLinkMargin: "0 30px 0 0",
  header2: 24,
  header3: 15,
  infoText: 15,
  smallInfo: 10,
  footerText: 10,
  spacing: 2,
  lineHeight: 1.5,
  searchHeight: "40px",
  searchWidth: "400px"
}

const largeScreenScaleValues = {
  outerPadding: "0 100px",
  headerHeight: 170,
  headerMargin: "0 0 60px",
  titleMargin: "50px 0 0 100px",
  navPadding: "10px 0 10px 100px",
  navBarHeight: 35,
  siteTitleFontSize: "45px",
  fontSize: 18,
  navLink: 13,
  navLinkMargin: "0 40px 0 0",
  header2: 27,
  header3: 18,
  infoText: 18,
  smallInfo: 12,
  footerText: 12,
  spacing: 2,
  lineHeight: 1.8,
  searchHeight: "31px",
  searchWidth: "auto"
}
const extraLargeScreenScaleValues = {
  outerPadding: `0 calc((100vw - 1000px)/2)`,
  headerHeight: 170,
  headerMargin: "0 0 60px",
  titleMargin: "50px 0 0 calc((100vw - 1000px)/2)",
  navPadding: "10px 0 10px calc((100vw - 1000px)/2)",
  navBarHeight: 35,
  siteTitleFontSize: "45px",
  fontSize: 18,
  navLink: 13,
  navLinkMargin: "0 40px 0 0",
  header2: 27,
  header3: 18,
  infoText: 18,
  smallInfo: 12,
  footerText: 12,
  spacing: 2,
  lineHeight: 1.8,
  searchHeight: "31px",
  searchWidth: "auto"
}

//This object sets the scale factors for resizing for accessibility purposes-----------------------------------
const scaleFactors = {
  regularScale: 1,
  largeScale: 1.25,
  extraLargeScale: 1.5
}

//This function applies the scales to the different screen sizes-----------------------------------------------------

const applyScale = (scale, screenSize) => {
  return {
    outerPadding: screenSize.outerPadding,
    headerHeight: `${
      scale === 1.5 ? screenSize.headerHeight + 10 : screenSize.headerHeight
    }px`,
    headerMargin: screenSize.headerMargin,
    titleMargin: screenSize.titleMargin,
    navPadding: screenSize.navPadding,
    navBarHeight: `${
      scale === 1
        ? screenSize.navBarHeight
        : screenSize.navBarHeight * (scale - 0.1)
    }px`,
    siteTitleFontSize: screenSize.siteTitleFontSize,
    fontSize: `${screenSize.fontSize * scale}px`,
    navLink: `${screenSize.navLink * scale}px`,
    navLinkMargin: screenSize.navLinkMargin,
    header2: `${screenSize.header2 * scale}px`,
    header3: `${screenSize.header3 * scale}px`,
    infoText: `${screenSize.infoText * scale}px`,
    smallInfo: `${screenSize.smallInfo * scale}px`,
    footerText: `${screenSize.footerText * scale}px`,
    spacing: `${screenSize.spacing * scale}px`,
    lineHeight: `${screenSize.lineHeight * scale}rem`,
    searchHeight: screenSize.searchHeight,
    searchWidth: screenSize.searchWidth
  }
}

//This export object puts together the screen sizes and the scale factors for access within components through context
export const scales = {
  regularMobile: applyScale(scaleFactors.regularScale, mobileScaleValues),
  largeMobile: applyScale(scaleFactors.largeScale, mobileScaleValues),
  extraLargeMobile: applyScale(scaleFactors.extraLargeScale, mobileScaleValues),
  regularMedium: applyScale(scaleFactors.regularScale, mediumScaleValues),
  largeMedium: applyScale(scaleFactors.largeScale, mediumScaleValues),
  extraLargeMedium: applyScale(scaleFactors.extraLargeScale, mediumScaleValues),
  regularLargeScreen: applyScale(
    scaleFactors.regularScale,
    largeScreenScaleValues
  ),
  largeLargeScreen: applyScale(scaleFactors.largeScale, largeScreenScaleValues),
  extraLargeLargeScreen: applyScale(
    scaleFactors.extraLargeScale,
    largeScreenScaleValues
  ),
  regularExtraLargeScreen: applyScale(
    scaleFactors.regularScale,
    extraLargeScreenScaleValues
  ),
  largeExtraLargeScreen: applyScale(
    scaleFactors.largeScale,
    extraLargeScreenScaleValues
  ),
  extraLargeExtraLargeScreen: applyScale(
    scaleFactors.extraLargeScale,
    extraLargeScreenScaleValues
  )
}

//This function creates the context for components to access----------------------------------------------------
export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
  scale: scales.regularMobile,
  plusScale: () => {},
  minusScale: () => {}
})
