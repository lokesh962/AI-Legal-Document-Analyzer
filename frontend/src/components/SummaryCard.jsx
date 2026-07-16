import { useState } from "react";

import {
  Paper,
  Typography,
  Box,
  Divider,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  Chip,
} from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SummaryCard = ({ analysis }) => {
  const [open, setOpen] = useState(false);

  const copySummary = async () => {
    await navigator.clipboard.writeText(
      analysis.summary || ""
    );

    setOpen(true);
  };

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          borderRadius: 4,
          overflow: "hidden",
          border: "1px solid #E5E7EB",
        }}
      >
        {/* Header */}

        <Box
          sx={{
            px: 3,
            py: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#F8FAFC",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={1}
          >
            <AutoAwesomeIcon color="primary" />

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              AI Generated Summary
            </Typography>
          </Box>

          <Tooltip title="Copy Summary">
            <IconButton
              onClick={copySummary}
            >
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Divider />

        {/* Summary */}

        <Box
          sx={{
            p: 4,
          }}
        >
          <Typography
            sx={{
              lineHeight: 2,
              fontSize: 16,
            }}
          >
            {analysis.summary}
          </Typography>
        </Box>

        <Divider />

        {/* Footer */}

        <Box
          sx={{
            px: 3,
            py: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Chip
            icon={<CheckCircleIcon />}
            label="Generated using AI"
            color="success"
            variant="outlined"
          />

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Review important clauses before making legal decisions.
          </Typography>
        </Box>
      </Paper>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success">
          Summary copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SummaryCard;