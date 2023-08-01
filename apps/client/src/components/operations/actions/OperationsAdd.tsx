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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Operations } from '../../common/interfaces/operations.interface';
import { addOperation } from '../../../api/operations';
export const OperationsAdd = () => {

  const [formValue, setformValue] = useState<Operations>({
    initialMount: 0, 
    date: '',
    gainLose: 0,
    lote: 0
  })

  const handleInputChange = (event: any) => {
    console.log(event.target.name)
    setformValue({
          ...formValue,
          [event.target.name]: event.target.value
      });
  }

  const handleSubmit = () => {
    addOperation(formValue)
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
        Agregar
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
              <div className="flex gap-2 w-[83%]">
                {/* Monto Inicial */}
                <TextField
                  autoFocus
                  margin="dense"
                  id="initialMount"
                  name='initialMount'
                  label="Monto Inicial"
                  type="number"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => handleInputChange(e)}
                />
                {/* Gain */}
                <TextField
                  autoFocus
                  margin="dense"
                  id="gain"
                  name='gainLose'
                  label="Ganancia o Perdida"
                  type="number"
                  fullWidth
                  variant="outlined"
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="flex gap-2 w-[83%]">
                {/* lotaje */}
                <TextField
                    autoFocus
                    margin="dense"
                    id="lote"
                    name='lote'
                    label="Lotaje"
                    type="number"
                    
                    variant="outlined"
                    onChange={(e) => handleInputChange(e)}
                  />
                {/* fecha */}
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Fecha" onChange={(e: any) => {
                      const event = {target: {name: "date", value: e}}
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