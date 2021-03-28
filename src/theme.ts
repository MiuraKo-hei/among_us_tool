import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  spacing: (f) => `${8 * f}px`,
  props: {
    MuiAppBar: {
      position: "static",
      color: "default",
      variant: "outlined",
    },
    MuiButton: {
      variant: "outlined",
    },
    MuiSelect: {
      variant: "outlined",
      margin: "dense",
    },
    MuiTextField: {
      size: "small",
      variant: "outlined",
      autoComplete: "off",
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        padding: "16px",
      },
    },
    MuiFormControl: {
      root: {
        display: "block",
        width: "160px",
      },
    },
    MuiSelect: {
      root: {
        display: "flex",
        alignItems: "center",
      },
    },
    MuiTableCell: {
      root: {
        backgroundColor: "#fff",
      },
    },
    MuiMenu: {
      list: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      },
    },
    MuiList: {
      root: {
        padding: "8px",
      },
    },
    MuiListItem: {
      root: {
        "&$selected": {
          borderRadius: "8px",
        },
      },
      button: {
        "&:hover": {
          borderRadius: "8px",
        },
      },
    },
  },
});
