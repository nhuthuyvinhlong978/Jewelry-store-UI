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
// import warning from '../../assets/image/Modal/warning.png';
const ModalUpdateCategory = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose} maxWidth="sm">
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={props.handleClose}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent style={{ textAlign: 'center' }} className="mt-3">
        {/* <img src={warning} alt="" width="30%" /> */}
        <DialogTitle> Update Category</DialogTitle>

        <form>
          <div className="form-group">
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Category Name"
              defaultValue={props?.categoryName}
              onChange={(event) => { props?.handleChangeCategoryName(event) }}
            />
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={props.handleClose}>
          Cancel
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={props.handleDelete}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalUpdateCategory;
