import { useMemo, useState } from "react";

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
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";

const ClauseTable = ({ clauses = [] }) => {
  const [search, setSearch] = useState("");

  const filteredClauses = useMemo(() => {
    return clauses.filter((clause) =>
      clause.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [clauses, search]);

  return (
    <Paper
      elevation={3}
      sx={{
        mt: 4,
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      {/* Header */}

      <Box
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
        >
          📑 Extracted Clauses
        </Typography>

        <TextField
          size="small"
          placeholder="Search clauses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            minWidth: 280,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Divider />

      <Box
        sx={{
          px: 3,
          py: 1.5,
          bgcolor: "#fafafa",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Showing {filteredClauses.length} of {clauses.length} clauses
        </Typography>
      </Box>

      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 700,
                  bgcolor: "#1976d2",
                  color: "white",
                  width: 70,
                }}
              >
                S.NO
              </TableCell>

              <TableCell
                sx={{
                  fontWeight: 700,
                  bgcolor: "#1976d2",
                  color: "white",
                }}
              >
                Clause
              </TableCell>

              <TableCell
                sx={{
                  fontWeight: 700,
                  bgcolor: "#1976d2",
                  color: "white",
                }}
              >
                Description
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredClauses.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={3}
                  align="center"
                  sx={{ py: 6 }}
                >
                  <Typography
                    variant="h6"
                    color="text.secondary"
                  >
                    🔍 No matching clauses found
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    Try searching with another keyword.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredClauses.map((clause, index) => (
                <TableRow
                  hover
                  key={index}
                  sx={{
                    transition: ".2s",
                    "&:hover": {
                      bgcolor: "#f8fbff",
                    },
                  }}
                >
                  <TableCell>{index + 1}</TableCell>

                  <TableCell>
                    <Chip
                      icon={<DescriptionIcon />}
                      label={clause.name}
                      color="primary"
                      variant="outlined"
                    />
                  </TableCell>

                  <TableCell>{clause.content}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ClauseTable;