import { palette } from "../ColorTheme/palette"

export const errorStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: "25px",
    color: "red",
    background: "white",
    textAlign: "center",
    borderRadius: "5px",
    justifyContent: "center",
    lineHeight: "2em"
}

export const submitStyle = {
    color: "white",
    fontWeight: "bold",
    backgroundColor: palette.primaryColor,
    border: "none"
}

export const cardStyle = {
    padding: "2rem",
    marginBottom: "1rem",
    backgroundColor: palette.complementaryColor
}