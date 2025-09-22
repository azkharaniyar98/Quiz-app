import React from "react";
import { Box, Typography, Stack, Link, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box 
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#4b3ca7",
        color: "white",
        py: 4,
        px: 4,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        mt: 5,
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ mb: { xs: 2, sm: 0 } }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Azkhar Aniyar</Typography>
        <Typography variant="body2">
          Football & NBA Quiz App
        </Typography>
        <Typography variant="body2">
          Contact: <Link href="Azkhar.Aniyar@icloud.com" color="inherit">Azkhar.Aniyar@icloud.com</Link>
        </Typography>
      </Box>

      <Stack direction="row" spacing={2}>
        <Link href="https://www.linkedin.com/in/azkhar-aniyar-775120366" target="_blank" rel="noopener" color="inherit">
          <IconButton sx={{ color: "white" }}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link href="https://www.instagram.com/boomin.98/" target="_blank" rel="noopener" color="inherit">
          <IconButton sx={{ color: "white" }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Link>
      </Stack>
    </Box>
  );
}
