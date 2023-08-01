import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useEffect, useState } from 'react';
import { useTasks } from '../../../context/tasks/useTasks';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { MdModeEditOutline } from 'react-icons/md';
import { TransactionTypeEnum } from '../../../enums/TransactionTypeEnum';
import { AllowedCurrencies } from '../../../api/currency';
import { Task } from '../../common/interfaces/tasks.interface';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import moment from 'moment';

export const TasksUpdate = ({value}: {value: Task}) => {

  const {updateTask} = useTasks()
  const {_id, name, description, type, price, currency, dateFrom, dateTo, userId} = value

  const [formValue, setformValue] = useState({
    _id: _id, 
    name: name, 
    description: description, 
    type: type,
    dateFrom: dateFrom,
    dateTo: dateTo,
    currency: currency, 
    price: price,
    userId: userId
  });
  

  const handleInputChange = (event: any) => {
    setformValue({
          ...formValue,
          [event.target.name]: event.target.value
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
    <>
      <button 
        className="hover:text-indigo-500"
        onClick={handleClickOpen}
      ><MdModeEditOutline/></button>
      <Dialog open={open} onClose={handleClose} sx={{backdropFilter: "blur(5px)",}}>
        <Box sx={
            {
              bgcolor: "#E2E8F0", 
              color: "#fafafa", display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              paddingY: 3,
            }
        }>
          <DialogContent>
            <div className="flex flex-wrap items-center justify-around">
              <div className="flex gap-2">
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  name="name"
                  label="Name"
                  type="email"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => handleInputChange(e)}
                  defaultValue={name}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="description"
                  name="description"
                  label="Description"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => handleInputChange(e)}
                  defaultValue={description}
                />
              </div>
              <div className="flex gap-2 w-[83%]">
                {/* type */}
                <FormControl sx={{width: "100%", mt: 0.6}}>
                  <InputLabel id="Type">Type</InputLabel>
                  <Select
                    labelId="Type"
                    id="type"
                    name='type'
                    value={type}
                    label="Type"
                    onChange={(e) => handleInputChange(e)}
                  >
                    <MenuItem value={TransactionTypeEnum[0]} onSelect={(e) => handleInputChange(e)}>{TransactionTypeEnum[0]}</MenuItem>
                    <MenuItem value={TransactionTypeEnum[1]} onSelect={(e) => handleInputChange(e)}>{TransactionTypeEnum[1]}</MenuItem>
                    <MenuItem value={TransactionTypeEnum[2]} onSelect={(e) => handleInputChange(e)}>{TransactionTypeEnum[2]}</MenuItem>
                  </Select>
                </FormControl>
                {/* price */}
                <TextField
                  autoFocus
                  margin="dense"
                  id="price"
                  name="price"
                  label="Price"
                  type="number"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => handleInputChange(e)}
                  defaultValue={price}
                />
                {/* currencies */}
                <FormControl sx={{width: "100%", mt: 0.6}}>
                  <InputLabel id="Currency">Currency</InputLabel>
                  <Select
                    labelId="Currency"
                    id="currency"
                    name='currency'
                    label="currency"
                    onChange={(e) => handleInputChange(e)}
                    defaultValue={AllowedCurrencies.find((e) => e === currency)}
                  >  
                    {AllowedCurrencies.map((el: string) => (
                      <MenuItem value={el} key={Math.random()} onSelect={(e) => handleInputChange(e)}>{el}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="flex gap-2 w-[83%]">
                {/* from */}
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Start Date" defaultValue={moment(dateFrom)} onChange={(e: any) => {
                      const event = {target: {name: "dateFrom", value: e._d}}
                      handleInputChange(event)
                    }}/>
                  </DemoContainer>
                </LocalizationProvider>
                {/* too */}
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="End Date" defaultValue={moment(dateTo)} onChange={(e: any) => {
                      const event = {target: {name: "dateTo", value: e._d}}
                      handleInputChange(event)
                    }}/>
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{paddingX: 2, color: 'rgb(99 102 241)', fontWeight: 500, border: 2, borderColor: 'rgb(99 102 241)'}}>Cancel</Button>
            <Button onClick={handleSubmit} sx={{paddingX: 2, color: 'rgb(99 102 241)', fontWeight: 500, border: 2, borderColor: 'rgb(99 102 241)'}}>Edit</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}