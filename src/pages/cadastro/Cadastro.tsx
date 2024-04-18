import { useState } from "react";
import { Card, Typography, TextField, Button, Grid, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

import { useRouter } from "next/router";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleCadastro = () => {
    const data = { nome, email, senha };
    localStorage.setItem("cadastroData", JSON.stringify(data));

    setNome("");
    setEmail("");
    setSenha("");

    router.push("/");
  };

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
              Cadastre-se
            </Typography>
            <Typography>
              Cadastre seu email e senha para criar uma conta
            </Typography>
            <Grid container direction="column" spacing={2} sx={{ mt: 2 }}>
              <Grid item>
                <TextField
                  id="Nome"
                  label="Nome"
                  required
                  fullWidth
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>
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
                  id="senha"
                  label="Senha"
                  required
                  type="password"
                  fullWidth
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleCadastro}
                >
                  Criar nova conta
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </>
  );
}
