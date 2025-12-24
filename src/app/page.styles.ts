// src/app/page.styles.ts
import { css } from "../../styled-system/css";

export const mainContainer = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: { base: "2rem", md: "4rem" },
  minHeight: "100vh",
  backgroundColor: "red.50",
});

export const header = css({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  marginBottom: "3rem",
});

export const giftIcon = css({
  fontSize: "40px",
  color: "red.600",
});

export const mainTitle = css({
  fontSize: { base: "2xl", md: "4xl" },
  fontWeight: "bold",
  color: "green.800",
  textAlign: "center",
});

export const contentGrid = css({
  display: "grid",
  gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
  gap: { base: "3rem", md: "4rem" },
  width: "100%",
  maxWidth: "1024px",
});
