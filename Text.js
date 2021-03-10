import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Button style={{marginBottom:"25px"}} variant="contained" color="secondary" onClick={handleClickOpen}>Add Department
      </Button><br/>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
            <div className="primaryHeader">Add Department</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          
          </DialogContentText>
         
    
        
         <h6 className="cbox">Department</h6> 
         <h6  style={{float:"right"}} className="cbox">Cost Center</h6><br></br>
         <TextField  style={{float:"left"}} id="standard-basic" label="Name" variant="standard" />
         <TextField style={{float:"right"}} id="standard-basic" label="Cost Center" variant="standard" /><br></br><br></br>

        <h6 className="cbox">default question for department</h6>
        <h6 style={{float:"right"}} className="cbox">time allocated</h6><br></br><br></br>
        <div className="card1">
        <TextField style={{marginLeft:"-20px",width:380}} id="standard-basic" label="New Question" variant="standard" />

        <FormControl  >
        <InputLabel htmlFor="demo-customized-select-native">min</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
    
        >
          <option aria-label="choose country" value="" />
          <option value={10}>min</option>
          <option value={20}>0</option>
          <option value={30}>1</option>
        </NativeSelect> 
      </FormControl>

      <FormControl style={{marginLeft:"80px"}} >
        <InputLabel htmlFor="demo-customized-select-native">sec</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
    
        >
          <option aria-label="choose country" value="" />
          <option value={10}>sec</option>
          <option value={20}>0</option>
          <option value={30}>1</option>
        </NativeSelect> 
      </FormControl><br></br><br></br>
        
        <Button onClick={handleClose} variant="contained"  color="secondary">
            Save
          </Button>
        </div>
    
           </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}  variant="contained" color="primary">
            Cancel
          </Button>
          
          <Button onClick={handleClose} variant="contained"  color="secondary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
