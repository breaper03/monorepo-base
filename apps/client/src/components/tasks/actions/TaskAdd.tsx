import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import { useTasks } from '../../../context/tasks/useTasks';
import { CreateTask } from '../../common/interfaces/tasks.interface';
import { useUser } from '../../../context/users/useUser';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { TransactionTypeEnum } from '../../../enums/TransactionTypeEnum';
import { AllowedCurrencies } from '../../../api/currency';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
export const TaskAdd = () => {

  const {createTask} = useTasks()
  const {currentUser} = useUser()

  const [formValue, setformValue] = useState<CreateTask>({
    name: '', 
    description: '', 
    type: '', 
    price: 0,
    currency: "",
    dateFrom: "",
    dateTo: "",
    userId: ''
  });

  const {type} = formValue
  const handleInputChange = (event: any) => {
    setformValue({
          ...formValue,
          [event.target.name]: event.target.value
      });
  }

  const handleSubmit = () => {
    const task = formValue

    if (currentUser._id) createTask(task).then(() => setOpen(false))
    else console.log('no se creo')
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
      <Button sx={{
            color: "#fafafa", 
            fontSize: '0.8em', 
            paddingX: 2, 
            fontWeight: 600,
            bgcolor: 'rgb(99 102 241)',
            border: 2,
            borderColor: 'rgb(99 102 241)',
          }} 
      onClick={handleClickOpen}>
        Add Transaction
      </Button>
      <Dialog open={open} onClose={handleClose} sx={{backdropFilter: "blur(5px)",}}>
        <Box sx={
            {
              bgcolor: "#e2e8f049", 
              color: "#fafafa", display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              paddingY: 3, border: 2, 
              backdropFilter: "blur(10px)"
            }
        }>
          <DialogContent>
            <div className="flex flex-wrap items-center justify-around bg-transparent">
              <div className="flex gap-2">
                <TextField
                  autoFocus
                  name='name'
                  margin="dense"
                  id="name"
                  label="Name"
                  type="email"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => handleInputChange(e)}
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
                  name='price'
                  label="Price"
                  type="number"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => handleInputChange(e)}
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
                    <DatePicker label="Start Date" onChange={(e: any) => {
                      const event = {target: {name: "dateFrom", value: e}}
                      handleInputChange(event)
                    }}/>
                  </DemoContainer>
                </LocalizationProvider>
                {/* too */}
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="End Date" onChange={(e: any) => {
                      const event = {target: {name: "dateTo", value: e}}
                      handleInputChange(event)
                    }}/>
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{paddingX: 2, color: 'rgb(99 102 241)', fontWeight: 500, border: 2, borderColor: 'rgb(99 102 241)'}}>Cancel</Button>
            <Button onClick={handleSubmit} sx={{paddingX: 2, color: 'rgb(99 102 241)', fontWeight: 500, border: 2, borderColor: 'rgb(99 102 241)'}}>Add</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}