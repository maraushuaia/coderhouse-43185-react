import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const FooterWrapper = styled("footer")({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: "1rem",
  textAlign: "center",
  background: "linear-gradient(to right, #9c27b0, #b28035)",
  color: "#fff",
});

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography variant="body2">
        &copy; {currentYear} EXPLORA | Todos los derechos reservados
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;
