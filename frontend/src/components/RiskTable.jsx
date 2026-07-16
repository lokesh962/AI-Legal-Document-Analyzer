import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
  Divider,
} from "@mui/material";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const getRiskColor = (risk) => {
  switch (risk?.toLowerCase()) {
    case "high":
      return "error";

    case "medium":
      return "warning";

    default:
      return "success";
  }
};

const RiskTable = ({ risks = [] }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        mt: 4,
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          p: 3,
          fontWeight: "bold",
        }}
      >
        ⚠ Risk Analysis
      </Typography>

      <Divider />

      <TableContainer>
        <Table>

          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#d32f2f",
              }}
            >
              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Clause
              </TableCell>

              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Risk
              </TableCell>

              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Reason
              </TableCell>

              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Recommendation
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {risks.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  align="center"
                >
                  No risks detected.
                </TableCell>
              </TableRow>
            ) : (
              risks.map((risk, index) => (
                <TableRow
                  hover
                  key={index}
                >
                  <TableCell>
                    {risk.clause}
                  </TableCell>

                  <TableCell>
                    <Chip
                      icon={<WarningAmberIcon />}
                      label={risk.risk}
                      color={getRiskColor(risk.risk)}
                    />
                  </TableCell>

                  <TableCell>
                    {risk.reason}
                  </TableCell>

                  <TableCell>
                    {risk.recommendation}
                  </TableCell>
                </TableRow>
              ))
            )}

          </TableBody>

        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RiskTable;