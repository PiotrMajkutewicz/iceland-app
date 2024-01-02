import "./App.css";
import { Container, Box } from "@mui/material";
import ClippedDrawer from "components/Toolbar/Toolbar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ClippedDrawer appName="Iceland App" />
        <Box
          component="main"
          sx={{ display: "flex", flexGrow: 1, pt: 8, pl: 30 }}
        >
          <Container
            sx={{
              position: "relative",
              height: "calc(100vh - 64px)",
              py: "2em",
            }}
          >
            <AppRoutes></AppRoutes>
          </Container>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
