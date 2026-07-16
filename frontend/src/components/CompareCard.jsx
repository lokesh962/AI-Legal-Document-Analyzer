import { useState } from "react";
import API from "../services/api";

import {
  Paper,
  Grid,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";

import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const CompareCard = ({ onCompare }) => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCompare = async () => {
    if (!file1 || !file2) {
      setError("Please select both documents.");
      return;
    }

    setError("");

    const formData = new FormData();
    formData.append("file1", file1);
    formData.append("file2", file2);

    try {
      setLoading(true);

      const response = await API.post("/compare", formData);

      console.log("COMPARE RESPONSE:", response.data);

      // Handle both response formats
      const comparison =
        response.data.comparison ?? response.data;

      onCompare(comparison);
    } catch (err) {
      console.error(err);
      setError("Comparison failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 5, borderRadius: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography fontWeight="bold" mb={2}>
            Contract A
          </Typography>

          <Button variant="outlined" component="label" fullWidth>
            Choose File
            <input
              hidden
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => setFile1(e.target.files[0])}
            />
          </Button>

          {file1 && <Typography mt={2}>📄 {file1.name}</Typography>}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography fontWeight="bold" mb={2}>
            Contract B
          </Typography>

          <Button variant="outlined" component="label" fullWidth>
            Choose File
            <input
              hidden
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => setFile2(e.target.files[0])}
            />
          </Button>

          {file2 && <Typography mt={2}>📄 {file2.name}</Typography>}
        </Grid>
      </Grid>

      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ mt: 5 }}
        startIcon={<CompareArrowsIcon />}
        disabled={loading}
        onClick={handleCompare}
      >
        Compare Contracts
      </Button>

      {loading && (
        <CircularProgress sx={{ mt: 3 }} />
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      )}
    </Paper>
  );
};

export default CompareCard;