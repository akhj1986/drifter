import React from "react"

export const themes = {
  light: {
    name: "light",
    background: "#ffffff",
    text: "#555",
    siteTitle: "222",
    header: "#fdd8dc",
    nav: "#F78693",
    linkColor: "#d4fcf8",
    linkWeight: "222",
    homeArticlesHeading: "rgba(134,147,247,0.2)",
    aTagColor: "#000",
    button: {
      background: "#000",
      offset: "10px"
    }
  },
  dark: {
    name: "dark",
    background: "#111",
    text: "#ffffff",
    siteTitle: "#ffffff",
    header2: "#f9909b",
    header: "#000",
    nav: "#FF0",
    linkColor: "#000",
    linkWeight: "666",
    homeArticlesHeading: "#333",
    aTagColor: "#FF0",
    button: {
      background: "#000",
      offset: "10px"
    }
  }
}
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
})
