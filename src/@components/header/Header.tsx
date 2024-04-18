import React, { useEffect, useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ModalClickUser } from "../modals";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

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
        {isLoggedIn ? (
          <>
            <Button variant="text" color="inherit" onClick={handleClickOpen}>
              {" "}
              {/* Adicione o manipulador de eventos onClick aqui */}
              <AccountCircleIcon />
            </Button>
            <ModalClickUser open={open} handleClose={handleClose} />
          </>
        ) : (
          <Box>
            <Button color="primary" href="/cadastro">
              Criar conta
            </Button>
            <Button color="primary" href="/login">
              Entrar
            </Button>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}