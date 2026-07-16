import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import {
  Button,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

const DownloadReport = ({ analysis }) => {

  const downloadPDF = () => {

    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.setTextColor(25,118,210);
    doc.text("AI Legal Document Analysis Report", 14, 18);

    doc.setDrawColor(200);
    doc.line(14,22,195,22);

    // Document Information
    doc.setFontSize(15);
    doc.setTextColor(0);

    doc.text("Document Information",14,34);

    doc.setFontSize(11);

    doc.text(
      `Document Type: ${analysis.document_type || "-"}`,
      14,
      44
    );

    doc.text(
      `Purpose: ${analysis.purpose || "-"}`,
      14,
      52
    );

    doc.text(
      `Effective Date: ${analysis.effective_date || "-"}`,
      14,
      60
    );

    doc.text(
      `Expiration Date: ${analysis.expiration_date || "-"}`,
      14,
      68
    );

    // Summary

    doc.setFontSize(15);

    doc.text("AI Summary",14,82);

    doc.setFontSize(11);

    const summary = doc.splitTextToSize(
      analysis.summary || "-",
      180
    );

    doc.text(summary,14,90);

    // Clauses

    autoTable(doc,{
      startY:115,

      head:[["Clause","Description"]],

      body:analysis.clauses.map(c=>[
        c.name,
        c.content
      ]),

      styles:{
        fontSize:10
      },

      headStyles:{
        fillColor:[25,118,210]
      }

    });

    // Risks

    autoTable(doc,{
      startY:doc.lastAutoTable.finalY+12,

      head:[
        [
          "Clause",
          "Risk",
          "Reason",
          "Recommendation"
        ]
      ],

      body:analysis.risks.map(r=>[
        r.clause,
        r.risk,
        r.reason,
        r.recommendation
      ]),

      styles:{
        fontSize:9
      },

      headStyles:{
        fillColor:[211,47,47]
      }

    });

    doc.save("Legal_Analysis_Report.pdf");

  };

  return (

    <Button
      variant="contained"
      size="large"
      startIcon={<DownloadIcon/>}
      onClick={downloadPDF}
      sx={{
        mt:4,
        mb:4,
        borderRadius:3
      }}
    >
      Download Analysis Report
    </Button>

  );

};

export default DownloadReport;