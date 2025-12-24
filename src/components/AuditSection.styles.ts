// src/components/AuditSection.styles.ts
import { css } from "../../styled-system/css";

export const auditSectionContainer = css({
  width: "100%",
  maxWidth: "1024px",
  marginTop: "2rem",
  padding: "2rem",
  backgroundColor: "gray.100",
  borderRadius: "lg",
  border: "1px solid",
  borderColor: "gray.300",
});

export const auditSectionTitle = css({
  fontSize: "xl",
  fontWeight: "bold",
  color: "gray.800",
  marginBottom: "1rem",
});

export const auditSectionText = css({
  color: "gray.700",
  marginBottom: "1rem",
});

export const auditSectionPre = css({
  backgroundColor: "gray.800",
  color: "white",
  padding: "1rem",
  borderRadius: "md",
  overflowX: "auto",
  fontFamily: "monospace",
  fontSize: "sm",
});
