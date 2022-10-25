import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function User() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Box display="flex">
          <Box sx={{ flexGrow: 1 }}>Item 1</Box>
          <Box>Item 2</Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
