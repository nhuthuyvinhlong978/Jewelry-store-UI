import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
  } from '@material-ui/core';
  import { Close } from '@material-ui/icons';
import { useState } from 'react';
  import { useHistory } from 'react-router-dom';
  // import warning from '../../assets/image/Modal/warning.png';
  const ModalSearch = (props) => {
    const history = useHistory();
    const [name, setName] = useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleClickSearch = () => {
        if(name == '' || !name){
            alert("Please insert name");
        }else{
            props.handleClose();
            history.push({ pathname: '/search', search: `?q=${name}` });
        }
    }
    return (
      <Dialog open={props.open} onClose={props.handleClose} maxWidth="sm">
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={props.handleClose}>
            <Close />
          </IconButton>
        </Box>
        <DialogContent style={{ textAlign: 'center' }} className="mt-3">
          {/* <img src={warning} alt="" width="30%" /> */}
          <DialogTitle> Search Product</DialogTitle>
  
            <div className="form-group">
              <input
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Product Name"
                onChange={(event) => { handleChange(event) }}
              />
            </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {handleClickSearch()}}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ModalSearch;
  