import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import TableComponent from '../../../components/Table/Table';
import IconButton from '@material-ui/core/IconButton';
import { addCategory, deleteCategory, getListCategory, updateCategory } from '../../../api/api';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useEffect } from 'react';
import moment from 'moment';
import ModalDelete from '../../../components/Modal/ModalDelete';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import ModalUpdateCategory from '../../../components/Modal/ModalUpdateCategory';

const Category = (props) => {
  const history = useHistory();
  const [categoryName, setCategoryName] = useState('');
  const [reload, setReload] = useState(false);
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectID, setSelectID] = useState('');
  const [categoryEdit, setCategoryEdit] = useState();
  const [openEdit, setOpenEdit] = useState(false);
  useEffect(async () => {
    props.handleLoading(true);
    await getListCategory().then((res) => {
      setCategory(res.data);
    });
    props.handleLoading(false);

  }, [reload]);
  const handleChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleClick = async () => {
    if (!categoryName || categoryName == '') {
      alert('Not found');
    } else {
      await addCategory({ categoryName: categoryName }).then(() => {
        setReload(!reload);
      });
    }
  };

  const handleClickDelete = (id) => {
    setSelectID(id);
    setOpen(true);
  };
  const handleCloseConfirm = () => {
    setSelectID('');
    setOpen(false);
  };

  const handleClickAddProduct = (id) => {
    history.push({ pathname: '/admin/addProduct', search: `?id=${id}` });
  };

  const handleClickEdit = (data) => {
    setCategoryEdit(data);
    setOpenEdit(true);
  };
  const columns = [
    { field: 'stt', headerName: 'STT', width: 90 },
    { field: 'category', headerName: 'CategoryName', width: 250 },
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
                handleClickEdit(action.row?.action);
              }}
              style={{ color: 'green' }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              className="btn-action btn-a-3"
              style={{ color: 'red' }}
              onClick={() => {
                handleClickDelete(action.row?.action?._id);
              }}
            >
              <DeleteForeverIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              className="btn-action btn-a-3"
              style={{ color: 'orange' }}
              onClick={() => {
                handleClickAddProduct(action.row?.action?._id);
              }}
            >
              <AddIcon />
            </IconButton>
          </>
        );
      },
    },
  ];
  const rows = category.map((e, index) => {
    return {
      id: index,
      stt: index + 1,
      category: e.categoryName,
      date: moment(e?.created).format('DD/MM/YYYY'),
      action: e,
    };
  });

  const handleDelete = async () => {
    await deleteCategory(selectID).then(() => {
      handleCloseConfirm();
      setReload(!reload);
    });
  };

  const handleCloseEdit = () => {
    setCategoryEdit();
    setOpenEdit(false);
  }

  const handleChangeCategoryName = (event) => {
    setCategoryEdit({...categoryEdit, categoryName: event.target.value});
  }

  const handleUpdateCategory = async () => {
    if(categoryEdit.categoryName == ""){
      alert("Please enter category name");
    }else{
      const data = {
        categoryID: categoryEdit._id,
        categoryName: categoryEdit.categoryName
      }
      await updateCategory(data).then(res => {
        handleCloseEdit()
        setReload(!reload)
      })
    }
  }
  
  return (
    <div className="wrap-content-admin">
      <div className="content-admin-title">
        <div>
          <span>Category Manager:</span>
        </div>
      </div>
      <hr />
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="CategoryName"
            aria-describedby="basic-addon2"
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <button
            className="btn  btn-primary"
            type="button"
            id="inputGroupFileAddon04"
            onClick={() => handleClick()}
          >
            Create Category
          </button>
        </div>
      </div>
      <hr />
      <TableComponent columns={columns} rows={rows} />
      <ModalDelete
        open={open}
        handleClose={handleCloseConfirm}
        title="Confirm delete category"
        handleDelete={handleDelete}
      />

      <ModalUpdateCategory
        open={openEdit}
        handleClose={handleCloseEdit}
        handleDelete={handleUpdateCategory}
        handleChangeCategoryName = {handleChangeCategoryName}
        categoryName = {categoryEdit?.categoryName}
      />
    </div>
  );
};

export default Category;
