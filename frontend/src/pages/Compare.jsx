    import { useState } from "react";

    import {
    Container,
    Typography,
    } from "@mui/material";

    import CompareCard from "../components/CompareCard";
    import CompareResult from "../components/CompareResult";

    const Compare = () => {

    const [comparison, setComparison] = useState(null);

    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>

        <Typography
            variant="h3"
            fontWeight="bold"
            align="center"
            gutterBottom
        >
            ⚖ Compare Contracts
        </Typography>

        <Typography
            align="center"
            color="text.secondary"
            mb={5}
        >
            Upload two legal contracts and compare
            their clauses using AI.
        </Typography>

        <CompareCard
            onCompare={setComparison}
        />

        {comparison && (

            <CompareResult
            comparison={comparison}
            />

        )}

        </Container>
    );
    };

    export default Compare;