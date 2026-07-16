import { Box, Typography } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";

const HeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
      }}
    >
      <GavelIcon
        sx={{
          fontSize: 70,
          color: "primary.main",
          mb: 2,
        }}
      />

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        AI Legal Document Analyzer
      </Typography>

      <Typography
        mt={2}
        color="text.secondary"
        sx={{
          maxWidth: 700,
          mx: "auto",
          fontSize: 18,
        }}
      >
        Upload legal contracts and let AI extract
        important clauses, identify risks,
        compare agreements, and generate
        easy-to-understand summaries.
      </Typography>
    </Box>
  );
};

export default HeroSection;