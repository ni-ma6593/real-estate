import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const BaseModal = ({ adTitle, open, handleClose, handleSubmit }) => {
  return (
    <Dialog
      sx={{
        borderRadius: '16px'
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`آگهی ${adTitle} پاک شود ؟`}
      </DialogTitle>

      <DialogActions>
        <Button onClick={handleClose}>خیر</Button>
        <Button onClick={handleSubmit}>بله</Button>
      </DialogActions>
    </Dialog>
  );
};
export default BaseModal;
