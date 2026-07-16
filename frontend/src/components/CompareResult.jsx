import {
  Paper,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const CompareResult = ({ comparison }) => {
  console.log("COMPARE RESULT:", comparison);

  if (!comparison) return null;

  return (
    <>
      <Paper sx={{ mt: 5, p: 4, borderRadius: 4 }}>
        <Typography variant="h5" fontWeight="bold">
          🤖 AI Comparison Summary
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography>
          {comparison.summary || "No summary available."}
        </Typography>
      </Paper>

      <TableContainer component={Paper} sx={{ mt: 4, borderRadius: 4 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#1976d2" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Clause
              </TableCell>

              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Contract A
              </TableCell>

              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Contract B
              </TableCell>

              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Difference
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {comparison.differences?.length > 0 ? (
              comparison.differences.map((item, index) => (
                <TableRow hover key={index}>
                  <TableCell>{item.clause}</TableCell>
                  <TableCell>{item.contract_a}</TableCell>
                  <TableCell>{item.contract_b}</TableCell>
                  <TableCell>{item.difference}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  No comparison data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CompareResult;