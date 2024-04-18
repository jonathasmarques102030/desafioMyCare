import React from "react";
import { Grid, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Grid container justifyContent="space-between" alignItems="center" xs={12}>
      <Grid item>
        <Link href="/">
          <Box ml={2}>
            <Image
              alt="image"
              src="https://assets-global.website-files.com/6487805753a3bd44c3c85ae3/6487edd401c7affa85c3a5d2_logo.svg"
              width={150}
              height={50}
            />
          </Box>
        </Link>
      </Grid>
      <Grid item>
        <Box>
          <Button color="primary" href="/cadastro">
            Criar conta
          </Button>
          <Button color="primary" href="/login">
            Entrar
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
