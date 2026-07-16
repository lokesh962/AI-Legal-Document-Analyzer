import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import GavelIcon from "@mui/icons-material/Gavel";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={2}
    >
      <Toolbar>

        <GavelIcon sx={{ mr: 2 }} />

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          AI Legal Document Analyzer
        </Typography>

        

        <Button
color="inherit"
component={Link}
to="/"
>
Home
</Button>

<Button
color="inherit"
component={Link}
to="/compare"
>
Compare Contracts
</Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;