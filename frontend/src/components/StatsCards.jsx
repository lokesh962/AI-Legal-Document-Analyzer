import {
  Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";

const StatsCards = ({ analysis }) => {
  const clauseCount = analysis?.clauses?.length || 0;
  const riskCount = analysis?.risks?.length || 0;
  const partyCount = analysis?.parties?.length || 0;

  const high =
    analysis?.risks?.filter(
      (r) => r.risk.toLowerCase() === "high"
    ).length || 0;

  const medium =
    analysis?.risks?.filter(
      (r) => r.risk.toLowerCase() === "medium"
    ).length || 0;

  let riskLabel = "Low";
  let riskColor = "#2e7d32";

  if (high >= 2) {
    riskLabel = "High";
    riskColor = "#d32f2f";
  } else if (high === 1 || medium >= 2) {
    riskLabel = "Medium";
    riskColor = "#ed6c02";
  }

  const stats = [
    {
      title: "Clauses",
      value: clauseCount,
      subtitle: "Extracted",
      color: "#1976d2",
      icon: <DescriptionOutlinedIcon sx={{ fontSize: 34 }} />,
    },
    {
      title: "Risks",
      value: riskCount,
      subtitle: "Potential Issues",
      color: "#d32f2f",
      icon: <WarningAmberRoundedIcon sx={{ fontSize: 34 }} />,
    },
    {
      title: "Parties",
      value: partyCount,
      subtitle: "Involved Parties",
      color: "#2e7d32",
      icon: <Groups2RoundedIcon sx={{ fontSize: 34 }} />,
    },
    {
      title: "Risk Level",
      value: riskLabel,
      subtitle: "Overall Safety",
      color: riskColor,
      icon: <ShieldRoundedIcon sx={{ fontSize: 34 }} />,
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
      {stats.map((item, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              border: "1px solid #E5E7EB",
              background: "#fff",
              transition: "all .25s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)",
              },
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "16px",
                bgcolor: item.color + "20",
                color: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              {item.icon}
            </Box>

            <Typography
              variant="h4"
              fontWeight={700}
            >
              {item.value}
            </Typography>

            <Typography
              variant="subtitle1"
              fontWeight={600}
            >
              {item.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {item.subtitle}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;