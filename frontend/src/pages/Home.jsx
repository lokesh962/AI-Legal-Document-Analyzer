import { useState } from "react";
import { Container } from "@mui/material";

import HeroSection from "../components/HeroSection";
import FileUpload from "../components/FileUpload";
import OverviewCard from "../components/OverviewCard";
import SummaryCard from "../components/SummaryCard";
import ClauseTable from "../components/ClauseTable";
import RiskTable from "../components/RiskTable";
import Footer from "../components/Footer";
import DownloadReport from "../components/DownloadReport";

const Home = () => {

  const [analysis, setAnalysis] = useState(null);

  return (

    <Container maxWidth="lg" sx={{ py: 0 }}>

      {!analysis && <HeroSection />}

      <FileUpload
        onAnalysis={setAnalysis}
      />

      {analysis && (

        <>

          <OverviewCard
            analysis={analysis}
          />

          <SummaryCard
            analysis={analysis}
          />

          <ClauseTable
            clauses={analysis.clauses}
          />

          <RiskTable
            risks={analysis.risks}
          />
          <DownloadReport
    analysis={analysis}
/>

        </>

      )}

<Footer />
    </Container>
  );

};

export default Home;