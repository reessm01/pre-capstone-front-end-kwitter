import { palette } from "../ColorTheme/palette"

export const userContainerStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: palette.backgroundColor,
    borderWidth: "0px",
    padding: "0px",
    margin: "0px",
    overflowX: "hidden",
    overflowY: "scroll"
}

export const botTextStyle = {
    color: palette.complementaryColor,
    textAlign: "center",
    margin: "5px",
    fontStyle: "italic"
}

export const titleTextStyle = {
    marginBottom: "5px",
    fontWeight: "bold",
    color: palette.complementaryColor
}

export const userCardStyle = {
    marginTop: "0px",
}