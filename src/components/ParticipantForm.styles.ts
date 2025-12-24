import { css } from "../../styled-system/css";

export const formContainer = css({
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "lg",
  boxShadow: "md",
  height: "fit-content",
});

export const formTitle = css({
  fontSize: "2xl",
  fontWeight: "semibold",
  marginBottom: "1.5rem",
  color: "green.700",
});

export const formTextarea = css({
  width: "100%",
  padding: "1rem",
  border: "1px solid token(colors.gray.300)",
  borderRadius: "md",
  fontSize: "md",
  resize: "vertical",
});

export const formButton = css({
  marginTop: "1.5rem",
  width: "100%",
  padding: "1rem 2rem",
  backgroundColor: "red.600",
  color: "white",
  fontWeight: "bold",
  borderRadius: "md",
  cursor: "pointer",
  transition: "background-color 0.2s",
  _hover: {
    backgroundColor: "red.700",
  },
});
