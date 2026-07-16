import { useState } from "react";
import API from "../services/api";

import {
  Paper,
  Typography,
  Button,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const FileUpload = ({ onAnalysis }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a PDF or DOCX file.");
      return;
    }

    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await API.post(
        "/upload",
        formData
      );

      onAnalysis(response.data.analysis);

      setSuccess("Document analyzed successfully!");

    } catch (err) {

      console.log(err);

      setError("Failed to analyze document.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        mt: 5,
        p: 5,
        borderRadius: 4,
        textAlign: "center",
      }}
    >

      <CloudUploadIcon
        sx={{
          fontSize: 70,
          color: "primary.main",
        }}
      />

      <Typography
        variant="h5"
        fontWeight="bold"
        mt={2}
      >
        Upload Legal Contract
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Upload your PDF or DOCX file for AI-powered legal analysis.
      </Typography>

      <Button
        variant="outlined"
        component="label"
        startIcon={<UploadFileIcon />}
      >
        Choose Document

        <input
          hidden
          type="file"
          accept=".pdf,.docx"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />
      </Button>

      {file && (
        <Typography
          mt={3}
          fontWeight="bold"
        >
          📄 {file.name}
        </Typography>
      )}

      <Box mt={4}>

        <Button
          variant="contained"
          size="large"
          startIcon={<AutoAwesomeIcon />}
          disabled={loading}
          onClick={handleUpload}
        >
          Analyze Document
        </Button>

      </Box>

      {loading && (

        <Box
  mt={5}
  textAlign="center"
>

<CircularProgress
size={45}
/>

<Typography
mt={2}
fontWeight="bold"
>

Analyzing legal document...

</Typography>

<Typography
color="text.secondary"
>

Extracting clauses, identifying risks,
and generating summary.

</Typography>

</Box>

      )}

      {success && (
        <Alert
          sx={{ mt: 4 }}
          severity="success"
        >
          {success}
        </Alert>
      )}

      {error && (
        <Alert
          sx={{ mt: 4 }}
          severity="error"
        >
          {error}
        </Alert>
      )}

    </Paper>
  );
};

export default FileUpload;