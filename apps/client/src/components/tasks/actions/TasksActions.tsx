import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MdModeEditOutline } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useTasks } from '../../../context/tasks/useTasks';
import { UpdateTask } from '../../../interfaces/tasks.interface';
import { useUser } from '../../../context/users/useUser';

export const TaskActions = ({value}: any) => {

  const {createTask, updateTask} = useTasks()
  const {currentUser} = useUser()

  const {_id, name, description, type, place, price,userId} = value

  const [formValue, setformValue] = useState({
    _id: _id, 
    name: name, 
    description: description, 
    type: type, 
    place: place, 
    price: price,
    userId: userId
  });

  const handleInputChange = (event: any) => {
    setformValue({
          ...formValue,
          [event.target.id]: event.target.value
      });
  }

  const handleSubmit = () => {
    const task = formValue

    if (task._id) updateTask(task, task._id)
    setOpen(false)
  }
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button sx={{color: "rgb(107 114 128)", fontSize: '0.9em'}} onClick={handleClickOpen}>
        <MdModeEditOutline/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <div className="flex flex-wrap items-center justify-around">
            <div className="flex gap-2">
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="email"
                fullWidth
                variant="outlined"
                defaultValue={name}
                onChange={(e) => handleInputChange(e)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                type="text"
                fullWidth
                variant="outlined"
                defaultValue={description}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="flex w-[83%]">
              <TextField
                autoFocus
                margin="dense"
                id="type"
                label="Type"
                type="text"
                fullWidth
                variant="outlined"
                defaultValue={type}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="flex gap-2">
              <TextField
                autoFocus
                margin="dense"
                id="place"
                label="Place"
                type="text"
                fullWidth
                variant="outlined"
                defaultValue={place}
                onChange={(e) => handleInputChange(e)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="price"
                label="Price"
                type="number"
                fullWidth
                variant="outlined"
                defaultValue={price}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}