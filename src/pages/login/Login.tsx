import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Card, Typography, TextField, Button, Grid, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const router = useRouter();
  interface Login {
    email: string;
    password: string;
  }

  const { signIn } = useContext(AuthContext);

  async function handleLogin() {
    const user: Login = { email, password };
    await signIn(user);

    router.push("/");
  }

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="Senha"
                  label="Senha"
                  required
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} display='flex' gap={2}>
                <Grid item xs={5}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={7}>
                  <Button fullWidth variant="contained" color="primary" href="/cadastro">
                    Não tem um cadastro?
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </>
  );
}
