import {
  Box,
  Typography,
  Divider,
  Link,
} from "@mui/material";

import GavelIcon from "@mui/icons-material/Gavel";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 2,
        mb: 0,
      }}
    >
      <Divider sx={{ mb: 2 }} />

      <Box
        display="flex"
        flexDirection={{
          xs: "column",
          md: "row",
        }}
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        

       
        
      </Box>

      <Typography
        align="center"
        color="text.secondary"
        mt={3}
        fontSize={14}
      >
        © 2026 Lokesh Singh.
      </Typography>
    </Box>
  );
};

export default Footer;