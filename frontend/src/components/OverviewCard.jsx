import {
  Paper,
  Typography,
  Grid,
  Box,
  Chip,
  Divider,
} from "@mui/material";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";

const OverviewCard = ({ analysis }) => {
  const clauseCount = analysis?.clauses?.length || 0;
  const riskCount = analysis?.risks?.length || 0;
  const partyCount = analysis?.parties?.length || 0;

  const high =
    analysis?.risks?.filter((r) => r.risk === "High").length || 0;

  const medium =
    analysis?.risks?.filter((r) => r.risk === "Medium").length || 0;

  let riskLabel = "Low";
  let chipColor = "success";

  if (high >= 2) {
    riskLabel = "High";
    chipColor = "error";
  } else if (high === 1 || medium >= 2) {
    riskLabel = "Medium";
    chipColor = "warning";
  }

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 5,
        borderRadius: 5,
        overflow: "hidden",
        border: "1px solid #E5E7EB",
      }}
    >
      {/* HEADER */}

      <Box
        sx={{
          background:
            "linear-gradient(135deg,#1565C0 0%, #42A5F5 100%)",
          color: "white",
          p: 4,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Box sx={{ maxWidth: "75%" }}>
            <Typography
              variant="h4"
              fontWeight={700}
            >
              {analysis.document_type}
            </Typography>

            <Typography
              sx={{
                mt: 1.5,
                opacity: .9,
                lineHeight: 1.7,
              }}
            >
              {analysis.purpose || "No purpose detected."}
            </Typography>
          </Box>

          <Chip
            icon={<ShieldRoundedIcon />}
            label={`${riskLabel.toUpperCase()} RISK`}
            color={chipColor}
            sx={{
              fontWeight: "bold",
              mt: { xs: 3, md: 0 },
            }}
          />
        </Box>
      </Box>

      {/* STATS */}

      <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(2,1fr)",
      md: "repeat(4,1fr)",
    },
    borderTop: "1px solid #ECECEC",
  }}
>
  <StatCard
    icon={<Groups2OutlinedIcon color="primary" />}
    title="Parties"
    value={partyCount}
  />

  <StatCard
    icon={<DescriptionOutlinedIcon color="primary" />}
    title="Clauses"
    value={clauseCount}
  />

  <StatCard
    icon={<WarningAmberRoundedIcon color="error" />}
    title="Risks"
    value={riskCount}
  />

  <StatCard
    icon={<CalendarMonthOutlinedIcon color="success" />}
    title="Effective Date"
    value={analysis.effective_date || "--"}
  />
</Box>
    </Paper>
  );
};

function StatCard({ icon, title, value }) {
  return (
    <Box
      sx={{
        p: 4,
        textAlign: "center",
        borderRight: {
          md: "1px solid #ECECEC",
        },
        "&:last-child": {
          borderRight: "none",
        },
      }}
    >
      <Box
        sx={{
          mb: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>

      <Typography
        variant="h4"
        fontWeight={700}
      >
        {value}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 1 }}
      >
        {title}
      </Typography>
    </Box>
  );
}
export default OverviewCard;