import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

interface ModalClickUserProps {
  open: boolean;
  handleClose: () => void;
}

export const ModalClickUser: React.FC<ModalClickUserProps> = ({
  open,
  handleClose,
}) => {
  const handleLogout = () => {
    localStorage.removeItem("cadastroData");
    localStorage.removeItem("isLoggedIn");
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth="sm"
    >
      <DialogTitle
        id="form-dialog-title"
        style={{ color: "black", textAlign: "center" }}
      >
        Título
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ color: "gray", textAlign: "center" }}>
          Esta é uma breve descrição.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="outlined"
          style={{
            borderColor: "#4062f4",
            color: "#4062f4",
            borderRadius: "20px",
            flex: "1",
            padding: "5px 10px",
          }}
        >
          Continuar Logado
        </Button>
        <Button
          onClick={handleLogout}
          variant="contained"
          style={{
            backgroundColor: "#4062f4",
            color: "white",
            borderRadius: "20px",
            flex: "1",
            padding: "5px 10px",
          }}
        >
          Sair
        </Button>
      </DialogActions>
    </Dialog>
  );
};
