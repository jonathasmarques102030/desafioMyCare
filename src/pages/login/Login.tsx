import { Card, Typography, TextField, Button, Grid, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      >
        <Link href="/" style={{ color: "black" }}>
          <HomeIcon />
        </Link>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 485, width: "100%" }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h3" gutterBottom>
              Login
            </Typography>
            <Typography>
              Coloque seu email e senha para acessar sua conta
            </Typography>
            <Grid container direction="column" spacing={2} sx={{ mt: 2 }}>
              <Grid item>
                <TextField
                  id="email"
                  label="Email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  id="Senha"
                  label="Senha"
                  required
                  type="password"
                  fullWidth
                />
              </Grid>

              <Grid item>
                <Button variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </>
  );
}
