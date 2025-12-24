import { css } from "../../styled-system/css";

export const resultsContainer = css({
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "lg",
  boxShadow: "md",
});

export const resultsTitle = css({
  fontSize: "2xl",
  fontWeight: "semibold",
  marginBottom: "1.5rem",
  color: "green.700",
});

export const resultsPlaceholder = css({
  color: "gray.500",
  fontStyle: "italic",
});

export const resultsList = css({
  listStyle: "none",
  padding: "0",
  color: "gray.800",
});

export const resultsListItem = css({
  fontSize: "lg",
  padding: "0.75rem 0",
  borderBottom: "1px solid",
  borderColor: "gray.200",
  _last: {
    borderBottom: "none",
  },
  display: "flex",
  flexDirection: "column",
});

export const resultsListItemPosition = css({
  fontWeight: "bold",
  color: "red.700",
  fontSize: "md",
});

export const resultsListItemName = css({
  paddingTop: "0.25rem",
});
