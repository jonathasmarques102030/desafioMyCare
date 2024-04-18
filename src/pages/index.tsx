import { Typography, Button, Grid, Box } from "@mui/material";
import Header from "./header/Header";

export default function Component() {
  return (
    <>
      <Header />
      <Grid container xs={12} sx={{ backgroundcolor: "#4062f4" }}>
        <Grid item xs={12} display="flex" justifyContent="center" m="auto">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 3,
              m: "auto",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: "#4062f4" }}>
              Turnos Disponíveis!
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#4062f4" }}>
              Estamos procurando enfermeiros para preencher nossos turnos
              disponíveis. Se você está disponível, por favor, considere se
              candidatar.
            </Typography>
            <Button
              href="/unidades"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Candidatar-se Agora
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
