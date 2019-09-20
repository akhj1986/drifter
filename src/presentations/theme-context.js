import React from "react"

export const themes = {
  light: {
    background: "white",
    text: "#555",
    header: "#fdd8dc",
    nav: "#F78693",
    linkColor: "#d4fcf8",
    button: {
      background: "#222",
      offset: "0",
    },
  },
  dark: {
    background: "#333",
    text: "#f5f5f5",
    header: "#f9909b",
    nav: "#fdd8dc",
    linkColor: "#444",
    button: {
      background: "#666",
      offset: "15px",
    },
  },
}
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})
