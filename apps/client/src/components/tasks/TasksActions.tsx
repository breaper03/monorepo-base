import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material"
import { useState } from "react"
import { MdModeEditOutline, MdOutlineDelete } from "react-icons/md"
export const TasksActions = ({params}: any) => {

  const [open, setOpen] = useState(false)
  

  const handleEdit = () => {
    const obj = params.row;
    console.log(obj)
    setOpen(true)
    // updateTask(obj, obj._id)
  }

  const handleDelete = () => {
    console.log('deleting', params.row._id)
  }

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <Box
      sx={{
        m:1,
        position: "relative",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        fontSize: 20
      }}
    >
      
      <IconButton aria-label="edit" onClick={handleEdit}>
        <MdModeEditOutline />
        <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
      </IconButton>
      
      <IconButton aria-label="edit" onClick={handleDelete}>
        <MdOutlineDelete />
      </IconButton>
    </Box>
  )
}
