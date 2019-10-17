import React from "react"

//This sets the styles theme of the website - light is the regular color scheme, dark is the high-contrast color scheme for accessibility purposes
export const themes = {
  light: {
    name: "light",
    background: "#ffffff",
    transluscent: true,
    text: "#555",
    siteTitle: "rgba(34, 34, 34, 0.7)",
    // header: "#f27f8c",
    header: "#f6a5af",
    nav: "#fbbbc3",
    footer: "rgba(150, 150, 150, 0.2)",
    footerText: "#1744E8",
    linkColor: "#555",
    linkWeight: "222",
    aTagColor: "#000",
    searchButtonColor: { back: "#ffffff", icon: "#555" },
    themeButtonColor: "rgba(0,0,0,0.6)"
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
    searchButtonColor: { back: "#FF0", icon: "#000" },
    themeButtonColor: "#000"
  }
}

//These following objects set the regular values for scale across the site for different screen sizes.
export const scales = {
  // mobileScaleValues
  mobile: {
    screenType: "mobile",
    outerPadding: "0 50px",
    headerHeight: "100px",
    headerMargin: "0 0 50px",
    headerButtons: {
      offsetTop: "10px",
      offsetRight: "10px",
      containerWidth: "20px",
      buttonSize: "15px"
    },
    titleMargin: "30px 0 0 50px",
    navPadding: "10px 0 10px 50px",
    navBarHeight: "31px",
    siteTitleFontSize: "34px",
    fontSize: "15px",
    navLink: "9px",
    navLinkMargin: "0 20px 0 0",
    header2: "20px",
    header3: "15px",
    infoText: "15px",
    smallInfo: "10px",
    footerText: "10px",
    spacing: "2px",
    lineHeight: "1.5rem",
    searchHeight: "31px",
    searchWidth: "auto"
  },
  // mediumScaleValues
  mediumScreen: {
    screenType: "medium",
    outerPadding: "0 80px",
    headerHeight: "150px",
    headerMargin: "0 0 50px",
    headerButtons: {
      offsetTop: "10px",
      offsetRight: "10px",
      containerWidth: "20px",
      buttonSize: "15px"
    },
    titleMargin: "40px 0 0 80px",
    navPadding: "10px 0 10px 80px",
    navBarHeight: "31px",
    siteTitleFontSize: "45px",
    fontSize: "15px",
    navLink: "11px",
    navLinkMargin: "0 30px 0 0",
    header2: "24px",
    header3: "15px",
    infoText: "15px",
    smallInfo: "10px",
    footerText: "10px",
    spacing: "2px",
    lineHeight: "1.5rem",
    searchHeight: "40px",
    searchWidth: "400px"
  },
  // largeScreenScaleValues:
  largeScreen: {
    screenType: "large",
    outerPadding: "0 100px",
    headerHeight: "170px",
    headerMargin: "0 0 60px",
    headerButtons: {
      offsetTop: "20px",
      offsetRight: "20px",
      containerWidth: "20px",
      buttonSize: "15px"
    },
    titleMargin: "45px 0 0 100px",
    navPadding: "10px 0 10px 100px",
    navBarHeight: "35px",
    siteTitleFontSize: "50px",
    fontSize: "18px",
    navLink: "13px",
    navLinkMargin: "0 40px 0 0",
    header2: "27px",
    header3: "18px",
    infoText: "18px",
    smallInfo: "12px",
    footerText: "12px",
    spacing: "2px",
    lineHeight: "1.8rem",
    searchHeight: "40px",
    searchWidth: "600px"
  },
  // extraLargeScreenScaleValues
  extraLargeScreen: {
    screenType: "extra-large",
    outerPadding: `0 calc((100vw - 1000px)/2)`,
    headerHeight: "170px",
    headerMargin: "0 0 60px",
    headerButtons: {
      offsetTop: "20px",
      offsetRight: "30px",
      containerWidth: "20px",
      buttonSize: "15px"
    },
    titleMargin: "45px 0 0 calc((100vw - 1000px)/2)",
    navPadding: "10px 0 10px calc((100vw - 1000px)/2)",
    navBarHeight: "35px",
    siteTitleFontSize: "50px",
    fontSize: "18px",
    navLink: "13px",
    navLinkMargin: "0 40px 0 0",
    header2: "27px",
    header3: "18px",
    infoText: "18px",
    smallInfo: "12px",
    footerText: "12px",
    spacing: "2px",
    lineHeight: "1.8rem",
    searchHeight: "40px",
    searchWidth: "700px"
  }
}

//This function creates the context for components to access----------------------------------------------------
export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
  scale: scales.mobile
})
