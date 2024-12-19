import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { themeOptions } from "./theme";
import Carousel from "react-material-ui-carousel";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  const theme = createTheme({ ...themeOptions, palette: { mode: mode } });

  const items = [{
    name: "Name"
  }];

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container fixed>
          <Navbar toggleMode={toggleMode} />
          <Carousel sx={{mt: 8}}>
            {
                items.map((item, i) => <Card key={i} sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                    belent
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card> )
            }
        </Carousel>
          {/* <AppRouter /> */}
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
