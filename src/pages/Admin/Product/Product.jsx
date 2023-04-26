import React, { useState, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import TableComponent from '../../../components/Table/Table';
import IconButton from '@material-ui/core/IconButton';
import { deleteProduct, getListsProduct } from '../../../api/api';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import moment from 'moment';
import ModalDelete from '../../../components/Modal/ModalDelete';
import "./style.css"
import { useHistory } from 'react-router-dom';

const Product = (props) => {
  const history = useHistory();
  const [product, setProduct] = useState([]);
  const [reload, setReload] = useState([]);
  const [deleteID, setDeleteID] = useState();
  const [open, setOpen] = useState(false);
  useEffect(async () => {
    props.handleLoading(true);
    await getListsProduct('all').then((res) => {
      setProduct(res.data);
    });
    props.handleLoading(false);
  }, [reload]);


  const columns = [
    { field: 'stt', headerName: 'STT', width: 90 },
    {
      field: 'image',
      headerName: 'Product Image',
      width: 150,
      renderCell: (action) => {
        console.log(action);
        return (
          <img
            src={action.row?.image}
            alt=""
            width="100%"
            height="300px"
            style={{ objectFit: 'contain' }}
          />
        );
      },
    },
    { field: 'productName', headerName: 'Product Name', width: 200 },
    { field: 'productCode', headerName: ' Code', width: 100 },
    { field: 'productPrice', headerName: ' Price', width: 150 },
    { field: 'date', headerName: 'Created', width: 150 },
    {
      field: 'action',
      headerName: 'Action',
      width: 250,
      renderCell: (action) => {
        return (
          <>
            <IconButton
              aria-label="delete"
              className="btn-action btn-a-2"
                onClick={() => {
                  handleClickEdit(action.row?.action?._id);
                }}
              style={{ color: 'blue' }}

            >
              <EditIcon />
            </IconButton>
            <IconButton
                  aria-label="delete"
                  className="btn-action btn-a-3"
                  onClick={() => {
                    handleClickDelete(action.row?.action?._id);
                  }}
                  style={{ color: 'red' }}
                >
                  <DeleteForeverIcon />
                </IconButton>
          </>
        );
      },
    },
  ];
  const rows = product.map((e, index) => {
    return {
      id: index,
      stt: index + 1,
      image: e.image[0].url || '',
      productName: e.name || '',
      productCode: e.code || '',
      productPrice: e.price || '',
      date: moment(e?.created).format('DD/MM/YYYY'),
      action: e
    };
  });

  const handleClickDelete = async (id) => {
    setDeleteID(id);
    setOpen(true);
  }

  const handleCloseConfirm = () => {
    setDeleteID();
    setOpen(false);
  }

  const handleDelete = async () => {
    await deleteProduct(deleteID).then(res => {
      handleCloseConfirm();
      setReload(!reload);
    })
  }

  const handleClickEdit = (id) => {
    history.push(`/admin/editProduct/${id}`);
  }
  return (
    <div className="wrap-content-admin wrap-product-main">
      <div className="content-admin-title">
        <div>
          <span>Product Manager:</span>
        </div>
      </div>
      <hr />
      <TableComponent columns={columns} rows={rows} />
      <ModalDelete
        open={open}
        handleClose={handleCloseConfirm}
        title="Confirm delete product"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Product;
