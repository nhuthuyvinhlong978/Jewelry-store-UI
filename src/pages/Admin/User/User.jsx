import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import TableComponent from '../../../components/Table/Table';
import IconButton from '@material-ui/core/IconButton';
import { getListUser } from '../../../api/api';
import moment from 'moment';

const User = (props) => {
  const [listUser, setListUser] = useState([])
  useEffect(async () => {
    props.handleLoading(true);
    await getListUser().then(res => {
      setListUser(res.data);
    })
    props.handleLoading(false);

  }, [])

  const rows = listUser.map((e, index) => {
    return {
      id: index,
      stt: index + 1,
      fullName: e.fullName,
      email: e.email,
      created: moment(e?.created).format("DD/MM/YYY")
    }
  })
  const columns = [
    { field: 'stt', headerName: 'STT', width: 90 },
    { field: 'fullName', headerName: 'Full Name', width: 250 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'created', headerName: 'Created', width: 150 },
    // {
    //   field: 'action',
    //   headerName: 'Action',
    //   width: 250,
    //   renderCell: (action) => {
    //     return (
    //       <>
    //         <IconButton
    //           aria-label="delete"
    //           className="btn-action btn-a-2"
    //           //   onClick={() => {
    //           //     handleClickEdit(action.row?.action?._id);
    //           //   }}
    //         >
    //           <EditIcon />
    //         </IconButton>
    //         {/* <IconButton
    //               aria-label="delete"
    //               className="btn-action btn-a-3"
    //               onClick={() => {
    //                 handleClickDelete(action.row?.action?._id);
    //               }}
    //             >
    //               <DeleteForeverIcon />
    //             </IconButton> */}
    //       </>
    //     );
    //   },
    // },
  ];
  return (
    <div className="wrap-content-admin">
      <div className="content-admin-title">
        <div>
          <span>User Manager:</span>
        </div>
      </div>
      <hr />
      <TableComponent columns={columns} rows={rows} />
    </div>
  );
};

export default User;
